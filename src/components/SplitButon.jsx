import { Eye, EyeOff, icons, Pencil } from "lucide-react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import { useRef } from "react";

export default function SplitButon({ rowData, onEdit, onDelete }) {
    const toast = useRef(null);

    const items = [
        {
            label: "Editar",
            icons: <Pencil size={20} />,
        },
        {
            label: "Ocultar",
            icons: <EyeOff size={20} />,
        },
        {
            label: "Mostrar",
            icons: <Eye size={20} />,
        },
    ];

    return (
        <div>
            <SpeedDial model={items} direction="left" style={{ top: 'calc(10% - 2rem)', right: 0 }} />
        </div>
    );
}
