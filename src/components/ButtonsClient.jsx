import useClienteStore from "@/store/clienteStore";
import { Eye, EyeOff, Pencil } from "lucide-react";
import { Button } from "primereact/button";

export default function ButtonsClient({ rowData }) {
    const { deleteCliente, enableCliente } = useClienteStore();

    const handleEliminar = (clienteId) => {
        deleteCliente(clienteId);
    };

    const handleEnable = (clienteId) => {
        enableCliente(clienteId);
    };

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
}
