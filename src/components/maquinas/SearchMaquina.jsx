import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export default function SearchMaquina({ handleFindByEstado, fetchMaquinas }) {
    const [estadoSelected, setEstadoSelected] = useState("");

    const estados = [
        { label: "Operativa", value: "Operativa" },
        { label: "Mantenimiento", value: "Mantenimiento" },
        { label: "Dañada", value: "Dañada" },
    ];

    const onEstadoChange = (e) => {
        setEstadoSelected(e.value);
        handleFindByEstado(e.value);
    };

    const resetSearch = () => {
        setEstadoSelected("");
        fetchMaquinas();
    };

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center">
                <div className="gap-3 flex items-center">
                    <Dropdown
                        value={estadoSelected}
                        options={estados}
                        onChange={onEstadoChange}
                        placeholder="Selecciona un estado"
                    />
                    {estadoSelected === "" ? (
                        ""
                    ) : (
                        <Button
                          icon="pi pi-refresh"
                          severity="help"
                          aria-label="Reset"
                          onClick={resetSearch}
                        ></Button>
                    )}
                </div>
            </div>
        </div>
    );
}
