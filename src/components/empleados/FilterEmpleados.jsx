import { useEmpleadoStore } from "@/store/useEmpleadoStore";
import { ListRestart } from "lucide-react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const cargos = [
    { code: "Recepcionista" },
    { code: "Entrenador" },
    { code: "Limpieza" },
];

export default function FilterEmpleados({ fetchEmpleados }) {
    const { findByRole, findByDNI } = useEmpleadoStore();
    const [rol, setRol] = useState("");
    const [dni, setDni] = useState("");
    const [isFiltered, setIsFiltered] = useState(false);

    const findEmpleadosByRol = async (value) => {
        setRol(value);
        console.log(value);
        await findByRole(value);
        setIsFiltered(true);
    };

    const findEmpleadosByDNI = async () => {
        setIsFiltered(true);
        console.log("dni", dni);
        await findByDNI(dni);
    };

    const clearFilters = async () => {
        setRol("");
        setDni("");
        fetchEmpleados();
        setIsFiltered(false);
    };
    return (
        <>
            <div className="flex items-center gap-4">
                <div className="p-inputgroup">
                    <InputText
                        placeholder="DNI"
                        className="p-inputtext-sm"
                        name="dni"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                    />
                    <Button
                        icon="pi pi-search"
                        severity="success"
                        aria-label="Search"
                        size="small"
                        onClick={findEmpleadosByDNI}
                    />
                </div>
                <div>
                    <Dropdown
                        value={rol}
                        options={cargos}
                        optionLabel="code"
                        optionValue="code"
                        onChange={({ value }) => findEmpleadosByRol(value)}
                        placeholder="Selecciona un cargo"
                        className="w-50"
                    />
                </div>
                {isFiltered && (
                    <div>
                        <Button
                            icon={<ListRestart />}
                            onClick={clearFilters}
                            severity="secondary"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
