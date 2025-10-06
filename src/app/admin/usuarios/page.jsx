"use client";

import FormUsuarios from "@/components/FormUsuarios";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import useModal from "@/hooks/useModal";
import { useUserStore } from "@/store/useUserStore";
import { CircleCheck, EyeOff, User, UserPlus } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect } from "react";

export default function page() {
    const { users, loading, fetchUsers } = useUserStore();
    const { visible, open, close } = useModal();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full bg-zinc-50 space-y-4">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <section className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Empleados
                        </span>
                        <div>
                            <Button
                                label="Añadir empleado"
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
                                    Empleados Totales
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
                                    Empleados Activos
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
                                    Empleados Inactivos
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
                                value={users}
                                paginator
                                rows={10}
                                className="p-datatable-gridlines"
                            >
                                <Column field="nombre" header="Nombre"></Column>
                                <Column field="dni" header="DNI"></Column>
                                <Column
                                    field="telefono"
                                    header="Telefono"
                                ></Column>
                                <Column field="cargo" header="Cargo"></Column>
                                <Column field="acciones" header="Acciones"></Column>
                            </DataTable>
                        </section>
                    )}
                    <FormUsuarios visible={visible} close={close} />
                </section>
            </main>
        </div>
    );
}
