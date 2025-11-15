import { Tag } from "primereact/tag";

export default function EstadoSpan({ rowData }) {
    const getSeverity = (estado) => {
        switch (estado) {
            case "Pagado":
                return "success";
            case "Pendiente":
                return "danger";
            default:
                return "info";
        }
    };
    return (
        <div>
            <Tag
                value={rowData.estado}
                severity={getSeverity(rowData.estado)}
            />
        </div>
    );
}
