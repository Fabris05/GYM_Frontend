"use client";

import FormUsuarios from "@/components/FormUsuarios";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import useModal from "@/hooks/useModal";
import { useEmpleadoStore } from "@/store/useEmpleadoStore";
import { Pencil, UserPlus } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect, useState } from "react";
import ButtonsEmpleados from "@/components/ButtonsEmpleados";
import CardEmpleados from "@/components/CardEmpleados";
import { Dropdown } from "primereact/dropdown";
import { initialUserForm } from "@/constants/initialForms";

export default function page() {
    const { empleados, loading, fetchEmpleados, findByRole } =
        useEmpleadoStore();
    const { visible, open, close } = useModal();
    const [selectedEmpleado, setSelectedEmpleado] = useState(initialUserForm);
    const [selectedCargo, setSelectedCargo] = useState("");
    const [estado, setEstado] = useState("crear");

    const cargos = [
        { label: "Recepcionista", code: "Recepcionista" },
        { label: "Entrenador", code: "Entrenador" },
        { label: "Limpieza", code: "Limpieza" },
    ];

    const handleCargoChange = async (e) => {
        const cargoSeleccionado = e.value;
        setSelectedCargo(cargoSeleccionado);
        findByRole(cargoSeleccionado.code);
    };

    const handleEditar = (empleado) => {
        setSelectedEmpleado(empleado);
        setEstado("editar");
        open();
    };

    const handleAgregar = () => {
        setSelectedEmpleado(initialUserForm);
        setEstado("crear");
        open();
    };

    useEffect(() => {
        fetchEmpleados();
    }, [fetchEmpleados]);

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
            </div>
        );
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
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
                                onClick={handleAgregar}
                                severity="contrast"
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-3 gap-6 mb-4">
                        <CardEmpleados usuarios={empleados} />
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
                            <div className="ml-4">
                                <Dropdown
                                    value={selectedCargo}
                                    options={cargos}
                                    onChange={handleCargoChange}
                                    placeholder="Selecciona un cargo"
                                />
                            </div>
                        </div>
                    </div>
                    {loading ? (
                        <ProgressSpinner />
                    ) : (
                        <section className="w-5/5 bg-white p-4 border border-gray-300  rounded-lg shadow-md">
                            <DataTable
                                value={empleados}
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
                                <Column field="sede" header="Sede"></Column>
                                <Column field="cargo" header="Cargo"></Column>
                                <Column body={actionBodyTemplate} />
                            </DataTable>
                        </section>
                    )}
                    <FormUsuarios
                        visible={visible}
                        close={close}
                        selectedEmpleado={selectedEmpleado}
                        estado={estado}
                    />
                </section>
            </main>
        </div>
    );
}
