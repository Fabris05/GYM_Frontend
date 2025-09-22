"use client";

import FormUsuarios from "@/components/FormUsuarios";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import useModal from "@/hooks/useModal";
import { useUserStore } from "@/store/useUserStore";
import { UserPlus } from "lucide-react";
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
                    <div>
                        <span className="font-sans font-bold text-2xl">
                            Gestion de Usuarios
                        </span>
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
                                label="Añadir Usuario"
                                icon={<UserPlus />}
                                size="small"
                                className="gap-2"
                                onClick={open}
                            />
                        </div>
                    </div>
                    {loading ? (
                        <ProgressSpinner />
                    ) : (
                        <div className="w-5/5">
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
                                <Column></Column>
                            </DataTable>
                        </div>
                    )}
                    <FormUsuarios visible={visible} close={close} />
                </section>
            </main>
        </div>
    );
}
