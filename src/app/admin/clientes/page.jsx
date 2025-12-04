"use client";
import { useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import { Eye, EyeOff, Pencil, Trash, UserPlus } from "lucide-react";
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
import TagRow from "@/components/TagRow";
import { successAlert } from "@/utils/alerts";
import useExport from "@/hooks/useExport";
import ExportButtons from "@/components/ExportButtons";

export default function ClientPage() {
    const { clientes, loading, fetchClientes, deleteCliente, enableCliente } =
        useClienteStore();
    const { exportCSV, exportExcel, exportPDF } = useExport();
     const { visible, open, close } = useModal();
    const [estado, setEstado] = useState("crear");
    const [clienteSeleccionado, setClienteSeleccionado] =
        useState(initialClienteForm);

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

    const handleEliminar = (clienteId) => {
        deleteCliente(clienteId);
        successAlert(
            "Cliente deshabilitado correctamente",
            "Lo podrás habilitar desde el botón correspondiente"
        );
    };

    const handleEnable = (clienteId) => {
        enableCliente(clienteId);
        successAlert(
            "Cliente habilitado correctamente",
            "El cliente ha sido habilitado correctamente."
        );
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
                {rowData.eliminado ? (
                    <Button
                        icon={<Eye size={20} />}
                        rounded
                        text
                        severity="danger"
                        aria-label="Search"
                        onClick={() => handleEnable(rowData.clienteId)}
                    />
                ) : (
                    <Button
                        icon={<EyeOff size={20} />}
                        rounded
                        text
                        severity="danger"
                        aria-label="Search"
                        onClick={() => handleEliminar(rowData.clienteId)}
                    />
                )}
            </div>
        );
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
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
                        <CardClientes clientes={clientes} />
                    </div>

                    <div className="flex justify-between items-center mb-4 gap-4 border border-gray-300 rounded-lg shadow-md p-3 bg-white">
                        <ExportButtons
                            data={clientes}
                            exportCSV={exportCSV}
                            exportExcel={exportExcel}
                            exportPDF={exportPDF}
                            titulo="Clientes"
                        />
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
                                <Column
                                    body={(rowData) => (
                                        <TagRow rowData={rowData} />
                                    )}
                                    header="Estado"
                                />
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
