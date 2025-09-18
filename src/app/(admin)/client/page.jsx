"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useClienteStore } from "@/store/useClienteStore";
import { UserPlus } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect } from "react";
export default function ClientPage() {
    const { clientes, loading, fetchClientes } = useClienteStore();
    useEffect(() => {
        fetchClientes();
    }, [fetchClientes]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <main className="flex">
                <Sidebar />
                <section className="flex flex-col bg-white w-full p-4">
                    <div className="flex justify-end items-center mb-4 gap-4">
                        <div className="flex">
                            <div className="p-inputgroup">
                                <InputText placeholder="DNI" />
                                <Button
                                    icon="pi pi-search"
                                    severity="secondary"
                                    aria-label="Search"
                                />
                            </div>
                        </div>
                        <div>
                            <Button label="Añadir cliente" icon={<UserPlus />} size="small" className="gap-2" />
                        </div>
                    </div>
                    <div className="w-4/5">
                        <DataTable
                            value={clientes}
                            paginator
                            rows={10}
                            className="p-datatable-gridlines"
                        >
                            <Column field="nombre" header="Nombre"></Column>
                            <Column field="dni" header="DNI"></Column>
                            <Column field="telefono" header="Telefono"></Column>
                            <Column field="correo" header="Em@il"></Column>
                            <Column
                                field="fecha_pago"
                                header="Fecha de Pago"
                            ></Column>
                            <Column
                                field="mensualidad"
                                header="Mensualidad"
                            ></Column>
                            <Column
                                field="descripcion"
                                header="Descripcion"
                            ></Column>
                        </DataTable>
                    </div>
                </section>
            </main>
        </div>
    );
}
