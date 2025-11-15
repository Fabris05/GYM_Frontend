import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { estadosPago } from "@/constants/estadosPago";
import { useState } from "react";
import { useClienteStore } from "@/store/useClienteStore";
import { usePagoStore } from "@/store/usePagoStore";
import { ListRestart } from "lucide-react";

export default function FilterPagos({ fetchPagos }) {
    const { findByDNI } = useClienteStore();
    const { findPagosByClientId, findPagosByEstado } = usePagoStore();
    const [refresh, setRefresh] = useState(false);
    const [dni, setDni] = useState("");
    const [estado, setEstado] = useState(null);

    const findPagosById = async () => {
        const cliente = await findByDNI(dni);
        console.log("cliente", cliente);
        await findPagosByClientId(cliente.clienteId);
    };

    const findPagosByStado = (e) => {
        setEstado(e.value);
        findPagosByEstado(e.value);
        setRefresh(true);
    };

    const refreshTable = () => {
        setDni("");
        setEstado(null);
        setRefresh(false);
        fetchPagos();
    };

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        await findPagosById();
        setRefresh(true);
    };

    return (
        <div className="flex flex-row gap-3">
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
                    onClick={(e) => handleSubmit(e, "dni")}
                />
            </div>
            <div>
                <Dropdown
                    placeholder="Buscar estado"
                    options={estadosPago}
                    optionLabel="label"
                    optionValue="value"
                    onChange={(e) => findPagosByStado(e)}
                    value={estado}
                ></Dropdown>
            </div>
            {refresh && (
                <div>
                    <Button
                        icon={<ListRestart />}
                        severity="secondary"
                        aria-label="Filter"
                        className="ml-2"
                        onClick={refreshTable}
                    ></Button>
                </div>
            )}
        </div>
    );
}