"use client";
import { useEffect } from "react";
import { UserPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import FormClientes from "@/components/FormClientes";
import { useClienteStore } from "@/store/useClienteStore";
import useModal from "@/hooks/useModal";

export default function ClientPage() {
    const { clientes, loading, fetchClientes } = useClienteStore();
    const {visible, open, close} = useModal();
    useEffect(() => {
        fetchClientes();
    }, [fetchClientes]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full bg-zinc-50 space-y-4">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <div>
                        <span className="font-sans font-bold text-2xl">Gestion de Clientes</span>
                    </div>
                    <div className="flex justify-end items-center mb-4 gap-4">
                        <div className="flex items-center">
                            <div className="p-inputgroup">
                                <InputText
                                    placeholder="DNI"
                                    className="p-inputtext-sm"
                                />
                                <Button
                                    icon="pi pi-search"
                                    severity="secondary"
                                    aria-label="Search"
                                    size="small"
                                />
                            </div>
                        </div>
                        <div>
                            <Button
                                label="Añadir cliente"
                                icon={<UserPlus />}
                                size="small"
                                className="gap-2"
                                onClick={open}
                            />
                        </div>
                    </div>
                    <div className="w-5/5">
                        <DataTable
                            value={clientes}
                            paginator
                            rows={10}
                            className="p-datatable-gridlines"
                        >
                            {}
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
                            <Column></Column>
                        </DataTable>
                    </div>
                    <FormClientes visible={visible} close={close} />
                </section>
            </main>
        </div>
    );
}
