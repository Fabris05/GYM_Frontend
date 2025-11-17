"use client";

import { UserPlus } from "lucide-react";
import { Button } from "primereact/button";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useProveedorStore } from "@/store/useProveedorStore";
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from "primereact/datatable";
import { useEffect } from "react";
import { Column } from "primereact/column";
import CardProveedores from "@/components/proveedores/CardProveedores";
import useProveedor from "@/hooks/useProveedor";
import FormProveedores from "@/components/proveedores/FormProveedores";
import FilterProveedores from "@/components/proveedores/FilterProveedores";

export default function PageProveedores() {
    const { loading, proveedores, fetchProveedores, findByCategoria } = useProveedorStore();
    const {
        handleModalClose,
        handleSubmit,
        actionBodyTemplate,
        selectedProveedor,
        handleCrear,
        visible,
        mode,
    } = useProveedor();

    useEffect(() => {
        fetchProveedores();
    }, [fetchProveedores]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Proveedores
                        </span>
                        <div>
                            <Button
                                label="Añadir Proveedor"
                                icon={<UserPlus />}
                                size="small"
                                className="gap-2"
                                onClick={handleCrear}
                                severity="contrast"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-4">
                        <CardProveedores proveedores={proveedores} />
                    </div>
                    <div className="flex justify-end items-center mb-4 gap-4 border border-gray-300 rounded-lg shadow-md p-3 bg-white">
                        <FilterProveedores fetchProveedores={fetchProveedores} findByCategoria={findByCategoria} />
                    </div>
                    <section className="w-5/5 bg-white p-4 border border-gray-300  rounded-lg shadow-md justify-center items-center">
                        {loading ? (
                            <div className="flex justify-center items-center w-full h-full">
                                <ProgressSpinner />
                            </div>
                        ) : (
                            <DataTable
                                value={proveedores}
                                paginator
                                rows={5}
                                size="small"
                                rowsPerPageOptions={[5, 10, 25, 50]}
                            >
                                <Column field="nombre" header="Nombre" />
                                <Column field="categoria" header="Categoría" />
                                <Column
                                    body={(rowData) => actionBodyTemplate(rowData)}
                                    style={{ textAlign: "center", width: "8rem" }}
                                />
                            </DataTable>
                        )}
                    </section>
                    <FormProveedores
                        visible={visible}
                        handleModalClose={handleModalClose}
                        handleSubmit={handleSubmit}
                        selectedProveedor={selectedProveedor}
                        mode={mode}
                    />
                </section>
            </main>
        </div>
    );
}
