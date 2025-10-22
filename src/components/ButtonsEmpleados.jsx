import { Eye, EyeOff, Pencil } from "lucide-react";
import { Button } from "primereact/button";

export default function ButtonsEmpleados({ rowData }) {



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
                    onClick={() => handleEnable(rowData)}
                />
            ) : (
                <Button
                    icon={<EyeOff size={20} />}
                    rounded
                    text
                    severity="danger"
                    aria-label="Search"
                    onClick={() => handleEliminar(rowData)}
                />
            )}
        </div>
    );
}
