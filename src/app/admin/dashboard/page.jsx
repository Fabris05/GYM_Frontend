"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { usePagoStore } from "@/store/usePagoStore";
import KPICard from "@/components/dashboard/KPICard";
import { ProgressSpinner } from "primereact/progressspinner";
import { useDashboardStore } from "@/store/useDashboardStore";
import GananciasSede from "@/components/dashboard/GananciasSede";
import GananciasFecha from "@/components/dashboard/GananciasFecha";
import SedesConcurridas from "@/components/dashboard/SedesConcurridas";

export default function DashboardPage() {
    const { dashboardData, fetchDashboardData, loading } = useDashboardStore();
    const { pagos, fetchPagos } = usePagoStore();

    useEffect(() => {
        fetchDashboardData();
        fetchPagos();
    }, [fetchDashboardData, fetchPagos]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                {loading || !dashboardData ? (
                    <ProgressSpinner />
                ) : (
                    <section className="flex flex-col w-full p-6 gap-6">
                        <div className="flex flex-col justify-between gap-4">
                            <span className="font-sans font-bold text-3xl">
                                Dashboard
                            </span>
                            <div className="w-full flex gap-4">
                                <KPICard
                                    title={"Ingresos Totales"}
                                    value={dashboardData.ingresosTotales}
                                    type={"ingresos"}
                                />
                                <KPICard
                                    title={"Clientes Totales"}
                                    value={dashboardData.clientesTotales}
                                    type={"clientes"}
                                />
                                <KPICard
                                    title={"Proveedores Totales"}
                                    value={dashboardData.proveedoresTotales}
                                    type={"proveedores"}
                                />
                                <KPICard
                                    title={"Máquinas Totales"}
                                    value={dashboardData.maquinasTotales}
                                    type={"maquinas"}
                                />
                            </div>
                        </div>
                        <div className="w-full flex gap-4">
                            <div className="w-1/2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                                <span className="font-sans font-bold text-lg">
                                    Ganancias por sede
                                </span>
                                <GananciasSede
                                    data={dashboardData.sedesConMasGanancias}
                                />
                            </div>
                            <div className="w-1/2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                                <span className="font-sans font-bold text-lg">
                                    Sedes más concurridas
                                </span>
                                <SedesConcurridas
                                    data={dashboardData.sedesMasConcurridas}
                                />
                            </div>
                        </div>
                        <div className="w-full bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                            <GananciasFecha pagos={pagos} />
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}