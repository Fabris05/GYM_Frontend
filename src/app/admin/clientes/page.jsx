"use client";
import { useEffect } from "react";
import useModal from "@/hooks/useModal";
import { CircleCheck, EyeOff, User, UserPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import FormClientes from "@/components/FormClientes";
import { useClienteStore } from "@/store/useClienteStore";
import { ProgressSpinner } from "primereact/progressspinner";

export default function ClientPage() {
    const { clientes, loading, fetchClientes } = useClienteStore();
    const { visible, open, close } = useModal();
    useEffect(() => {
        fetchClientes();
    }, [fetchClientes]);

    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full bg-zinc-50 space-y-4">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <section className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Clientes
                        </span>
                        <div>
                            <Button
                                label="Añadir cliente"
                                icon={<UserPlus />}
                                size="small"
                                className="gap-2"
                                onClick={open}
                                severity="contrast"
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-3 gap-6 mb-4">
                        <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-sans font-bold text-lg">
                                    Clientes Totales
                                </h3>
                                <span className="font-sans text-gray-900 text-4xl">
                                    7
                                </span>
                            </div>
                            <div className="flex items-center">
                                <User size={60} className="text-blue-500" />
                            </div>
                        </div>
                        <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-sans font-bold text-lg">
                                    Clientes Activos
                                </h3>
                                <span className="font-sans text-gray-900 text-4xl">
                                    7
                                </span>
                            </div>
                            <div className="flex items-center">
                                <CircleCheck
                                    size={60}
                                    className="text-green-500"
                                />
                            </div>
                        </div>
                        <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-sans font-bold text-lg">
                                    Clientes Inactivos
                                </h3>
                                <span className="font-sans text-gray-900 text-4xl">
                                    0
                                </span>
                            </div>
                            <div className="flex items-center">
                                <EyeOff size={60} className="text-red-500" />
                            </div>
                        </div>
                    </section>

                    <div className="flex justify-end items-center mb-4 gap-4 border border-gray-300 rounded-lg shadow-md p-3 bg-white">
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
                    </div>
                    {loading ? (
                        <ProgressSpinner />
                    ) : (
                        <section className="w-5/5 bg-white p-4 border border-gray-300  rounded-lg shadow-md">
                            <DataTable
                                value={clientes}
                                className="p-datatable-gridlines"
                                removableSort
                                paginator
                                rows={10}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                            >
                                <Column field="nombre" header="Nombre"></Column>
                                <Column field="dni" header="DNI"></Column>
                                <Column
                                    field="telefono"
                                    header="Telefono"
                                ></Column>
                                <Column field="correo" header="Em@il"></Column>
                                <Column
                                    field="fechaPago"
                                    header="Fecha de Pago"
                                    sortable
                                ></Column>
                                <Column
                                    field="mensualidad"
                                    header="Mensualidad"
                                ></Column>
                                <Column
                                    field="descripcion"
                                    header="Descripción"
                                ></Column>
                                <Column></Column>
                            </DataTable>
                        </section>
                    )}
                    <FormClientes visible={visible} close={close} />
                </section>
            </main>
        </div>
    );
}
