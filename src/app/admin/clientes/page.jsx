"use client";
import { useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import {
    Pencil,
    Trash,
    UserPlus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import FormClientes from "@/components/FormClientes";
import { useClienteStore } from "@/store/useClienteStore";
import { ProgressSpinner } from "primereact/progressspinner";
import SearchCliente from "@/components/SearchCliente";
import CardClientes from "@/components/CardClientes";
import { initialClienteForm } from "@/constants/initialForms";

export default function ClientPage() {
    const { clientes, loading, fetchClientes } = useClienteStore();
    const { visible, open, close } = useModal();
    const [ estado, setEstado ] = useState("crear");
    const [ clienteSeleccionado, setClienteSeleccionado ] = useState(initialClienteForm);

    const handleEditar = (cliente) => {
        setClienteSeleccionado(cliente);
        setEstado("editar");
        open();
    };

    const handleAgregar = () => {
        setClienteSeleccionado(initialClienteForm);
        setEstado("crear");
        open();
    };

    useEffect(() => {
        fetchClientes();
    }, [fetchClientes]);

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-center">
                <Button
                    icon={<Pencil size={20} />}
                    rounded
                    text
                    severity="success"
                    aria-label="Search"
                    onClick={() => handleEditar(rowData)}
                />
                <Button
                    icon={<Trash size={20} />}
                    rounded
                    text
                    severity="danger"
                    aria-label="Search"
                />
            </div>
        );
    };

    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full bg-zinc-50 space-y-4">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Clientes
                        </span>
                        <div>
                            <Button
                                label="Añadir cliente"
                                icon={<UserPlus />}
                                size="small"
                                className="gap-2"
                                onClick={handleAgregar}
                                severity="contrast"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-4">
                        <CardClientes />
                    </div>

                    <div className="flex justify-end items-center mb-4 gap-4 border border-gray-300 rounded-lg shadow-md p-3 bg-white">
                        <SearchCliente fetchClientes={fetchClientes} />
                    </div>

                    <section className="w-5/5 bg-white p-4 border border-gray-300  rounded-lg shadow-md justify-center items-center">
                        {loading ? (
                            <div className="flex justify-center items-center w-full h-full">
                                <ProgressSpinner />
                            </div>
                        ) : (
                            <DataTable
                                value={clientes}
                                removableSort
                                paginator
                                rows={5}
                                size={"small"}
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
                                    field="sede.nombre"
                                    header="Sede"
                                ></Column>
                                <Column
                                    field="mensualidad"
                                    header="Mensualidad"
                                ></Column>
                                <Column
                                    field="descripcion"
                                    header="Descripción"
                                ></Column>
                                <Column body={actionBodyTemplate} />
                            </DataTable>
                        )}
                    </section>

                    <FormClientes
                        visible={visible}
                        close={close}
                        clienteSeleccionado={clienteSeleccionado}
                        estado={estado}
                    />
                </section>
            </main>
        </div>
    );
}
