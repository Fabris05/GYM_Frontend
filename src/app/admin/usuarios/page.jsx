"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CardUsuarios from "@/components/usuarios/CardUsuarios";
import { useUsuarioStore } from "@/store/useUsuarioStore";
import { useEffect } from "react";
import FilterUsuarios from "@/components/usuarios/FilterUsuarios";
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import useUsuario from "@/hooks/useUsuario";
import FormUsuario from "@/components/usuarios/FormUsuario";
import { Button } from "primereact/button";
import { UserPlus } from "lucide-react";

export default function UsuariosPage() {
    const { loading, usuarios, fetchUsuarios } = useUsuarioStore();
    const {
        visible,
        selectedUsuario,
        actionBodyTemplate,
        handleModalClose,
        handleSubmit,
        mode,
        handleCrear,
    } = useUsuario();

    useEffect(() => {
        fetchUsuarios();
    }, [fetchUsuarios]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <section className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Usuarios
                        </span>
                        <div>
                            <Button
                                label="Añadir Usuario"
                                icon={<UserPlus />}
                                size="small"
                                className="gap-2"
                                onClick={handleCrear}
                                severity="contrast"
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-3 gap-6 mb-4">
                        <CardUsuarios usuarios={usuarios} />
                    </section>
                    <div className="flex justify-end items-center mb-4 gap-4 border border-gray-300 rounded-lg shadow-md p-3 bg-white">
                        <div className="flex items-center">
                            <FilterUsuarios fetchUsuarios={fetchUsuarios} />
                        </div>
                    </div>
                    {loading ? (
                        <ProgressSpinner />
                    ) : (
                        <section className="w-5/5 bg-white p-4 border border-gray-300  rounded-lg shadow-md">
                            <DataTable
                                value={usuarios}
                                rows={5}
                                size="small"
                                paginator
                                rowsPerPageOptions={[5, 10, 25, 50]}
                            >
                                <Column
                                    header="Usuario"
                                    field="nombreUsuario"
                                ></Column>
                                <Column header="Rol" field="rol"></Column>

                                <Column
                                    header=""
                                    body={(rowData) =>
                                        actionBodyTemplate(rowData)
                                    }
                                ></Column>
                            </DataTable>
                        </section>
                    )}
                    <FormUsuario
                        visible={visible}
                        handleModalClose={handleModalClose}
                        selectedUsuario={selectedUsuario}
                        handleSubmit={handleSubmit}
                        mode={mode}
                    />
                </section>
            </main>
        </div>
    );
}
