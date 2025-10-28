import { Badge } from "primereact/badge";
import { Button } from "primereact/button";

export default function Card({ maquina }) {
    const getSeverity = (estado) => {
        switch (estado) {
            case "Operativo":
                return "success";
            case "Mantenimiento":
                return "warning";
            case "Dañada":
                return "danger";
            default:
                return "info";
        }
    };

    return (
        <div className="grid grid-cols-5 gap-4 gap-y-6">
            {maquina.map((m) => (
                <div
                    className="flex flex-col rounded-md shadow-md gap-4 border border-gray-300 hover:shadow-lg transition-shadow bg-white p-4"
                    key={m.maquinaId}
                >
                    <figure className="flex justify-center">
                        <img src={m.imagen} alt={m.nombre} className="w-32 h-32 object-cover rounded-md" />
                    </figure>
                    <h3 className="font-sans font-bold">{m.nombre}</h3>
                    <div>
                        <Badge
                            severity={getSeverity(m.estado)}
                            value={m.estado}
                        ></Badge>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Button icon="pi pi-eye" size="small" severity="info" outlined  />
                        <Button icon="pi pi-pencil" size="small" severity="warning" outlined />
                    </div>
                </div>
                
            ))}
        </div>
    );
}
