import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { errorAlert } from "@/utils/alerts";
import { useClienteStore } from "@/store/useClienteStore";

export default function SearchCliente({ fetchClientes }) {
    const { clientes, findByDNI } = useClienteStore();
    const [dni, setDni] = useState("");

    const findByDNIe = async (e) => {
        e.preventDefault();
        try {
            await findByDNI(dni);
        } catch (error) {
            errorAlert("Error de búsqueda", "No se encontró al cliente");
        }
    };
    return (
        <div className="flex items-center gap-2">
            <form onSubmit={findByDNIe}>
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
                        type="submit"
                    />
                </div>
            </form>
            {clientes.length > 1 ? (
                ""
            ) : (
                <Button
                    icon="pi pi-refresh"
                    severity="help"
                    aria-label="Reset"
                    size="small"
                    onClick={() => {
                        setDni("");
                        fetchClientes();
                    }}
                />
            )}
        </div>
    );
}
