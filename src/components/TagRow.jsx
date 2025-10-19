import { Tag } from "primereact/tag";

export default function TagRow({ rowData }) {
    const getSeverity = (estado) => {
        switch (estado) {
            case "Activo":
                return "success";
            case "Inactivo":
                return "danger";
            default:
                return "secondary";
        }
    };

    return (
        <div>
            <Tag
                value={rowData.eliminado ? "Inactivo" : "Activo"}
                severity={getSeverity(
                    rowData.eliminado ? "Inactivo" : "Activo"
                )}
            />
        </div>
    );
}
