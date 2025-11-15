"use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Button } from "primereact/button";
import { BanknoteArrowUp } from "lucide-react";
import CardPagos from "@/components/pagos/CardPagos";
import { usePagoStore } from "@/store/usePagoStore";
import { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import EstadoSpan from "@/components/pagos/EstadoSpan";
import FormPagos from "@/components/pagos/FormPagos";
import usePago from "@/hooks/usePago";
import FilterPagos from "@/components/pagos/FilterPagos";

export default function PagosPage() {
    const { pagos, fetchPagos, loading } = usePagoStore();
    const {
        visible,
        mode,
        handleCloseModal,
        handleSubmit,
        handleCrear,
        findCliente,
        actionBodyTemplate,
        selectedPago,
    } = usePago();

    useEffect(() => {
        fetchPagos();
    }, [fetchPagos]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <section className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Pagos
                        </span>
                        <div>
                            <Button
                                label="Agregar Pago"
                                icon={<BanknoteArrowUp />}
                                size="small"
                                className="gap-2 hover:scale-102 transition-transform"
                                severity="contrast"
                                onClick={() => handleCrear()}
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-3 gap-6 mb-4">
                        <CardPagos pagos={pagos} />
                    </section>
                    <div className="flex justify-end items-center mb-4 gap-4 border border-gray-300 rounded-lg shadow-md p-3 bg-white">
                        <div className="flex items-center">
                            <FilterPagos fetchPagos={fetchPagos}/>
                        </div>
                    </div>
                    {loading ? (
                        <ProgressSpinner />
                    ) : (
                        <section className="w-5/5 bg-white p-4 border border-gray-300  rounded-lg shadow-md">
                            <DataTable
                                value={pagos}
                                rows={5}
                                size="small"
                                paginator
                                rowsPerPageOptions={[5, 10, 25, 50]}
                            >
                                <Column
                                    header="N° Pago"
                                    field="pagoId"
                                ></Column>
                                <Column header="Fecha" field="fecha"></Column>
                                <Column
                                    header="Monto"
                                    body={(rowData) => `S/ ${rowData.monto}`}
                                ></Column>
                                <Column
                                    header="Estado"
                                    body={(rowData) => (
                                        <EstadoSpan rowData={rowData} />
                                    )}
                                ></Column>
                                <Column
                                    header=""
                                    body={(rowData) =>
                                        actionBodyTemplate(rowData)
                                    }
                                ></Column>
                            </DataTable>
                        </section>
                    )}
                    <FormPagos
                        visible={visible}
                        handleCloseModal={handleCloseModal}
                        mode={mode}
                        handleSubmit={handleSubmit}
                        findCliente={findCliente}
                        selectedPago={selectedPago}
                    />
                </section>
            </main>
        </div>
    );
}
