"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Dumbbell, StoreIcon } from "lucide-react";
import { Button } from "primereact/button";
import useInventario from "@/hooks/useInventario";
import FormMaquina from "@/components/maquinas/FormMaquina";
import { useMaquinaStore } from "@/store/useMaquinaStore";
import CardInfo from "@/components/maquinas/CardInfo";
import { useEffect } from "react";
import Card from "@/components/maquinas/Card";
import { ProgressSpinner } from "primereact/progressspinner";
import ViewMaquina from "@/components/maquinas/ViewMaquina";
import SearchMaquina from "@/components/maquinas/SearchMaquina";
import ExportButtons from "@/components/ExportButtons";
import useExport from "@/hooks/useExport";

export default function page() {
    const { maquinas, fetchMaquinas, loading } = useMaquinaStore();
    const { exportCSV, exportExcel, exportPDF } = useExport();
    const {
        mode,
        visible,
        handleCrear,
        handleCloseModal,
        onSubmit,
        handleOpenView,
        handleCloseViewModal,
        visibleView,
        selectedItem,
        handleEditar,
        handleFindByEstado,
    } = useInventario();

    useEffect(() => {
        fetchMaquinas();
    }, [fetchMaquinas]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Inventario
                        </span>
                        <div>
                            <Button
                                label="Añadir Material"
                                icon={<Dumbbell />}
                                size="small"
                                className="gap-2"
                                onClick={handleCrear}
                                severity="contrast"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6 mb-4">
                        <CardInfo maquinas={maquinas} />
                    </div>
                    <div className="flex justify-between items-center mb-4 gap-4 border border-gray-300 rounded-lg shadow-md p-3 bg-white">
                        <div>
                            <ExportButtons
                                data={maquinas}
                                exportCSV={exportCSV}
                                exportExcel={exportExcel}
                                exportPDF={exportPDF}
                                titulo={"Máquinas"}
                            />
                        </div>

                        <div className="flex items-center">
                            <SearchMaquina
                                handleFindByEstado={handleFindByEstado}
                                fetchMaquinas={fetchMaquinas}
                            />
                        </div>
                    </div>
                    <section className="bg-white p-4 rounded-md shadow-md border border-gray-300">
                        {loading ? (
                            <div className="flex justify-center items-center w-full h-full">
                                <ProgressSpinner />
                            </div>
                        ) : (
                            <Card
                                maquina={maquinas}
                                openViewMaquina={handleOpenView}
                                handleEditar={handleEditar}
                            />
                        )}
                    </section>
                    <FormMaquina
                        visible={visible}
                        handleCloseModal={handleCloseModal}
                        selectedItem={selectedItem}
                        mode={mode}
                        onSubmit={onSubmit}
                    />
                    <ViewMaquina
                        visible={visibleView}
                        handleCloseModal={handleCloseViewModal}
                        selectedItem={selectedItem}
                    />
                </section>
            </main>
        </div>
    );
}
