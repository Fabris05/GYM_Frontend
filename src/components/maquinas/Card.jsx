import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

export default function Card({ maquina, openViewMaquina, handleEditar }) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {maquina.map((m) => (
                <div
                    key={m.maquinaId}
                    className="flex flex-col items-center rounded-md shadow-md border border-gray-300 hover:shadow-lg transition-shadow bg-white p-4"
                >
                    {/* Imagen */}
                    <figure className="flex justify-center mb-3">
                        <Image
                            src={m.imagen}
                            alt={m.nombre}
                            className="w-32 h-32 object-cover rounded-md"
                            preview
                        />
                    </figure>

                    {/* Título con altura fija */}
                    <h3
                        className="font-sans font-bold text-center text-sm leading-tight line-clamp-2 min-h-[40px] flex items-center justify-center"
                    >
                        {m.nombre}
                    </h3>

                    <div className="mt-2">
                        <Badge
                            severity={getSeverity(m.estado)}
                            value={m.estado}
                            className="px-3 py-1"
                        />
                    </div>

                    <div className="flex gap-2 justify-center mt-4">
                        <Button
                            icon="pi pi-eye"
                            size="small"
                            severity="info"
                            outlined
                            onClick={() => openViewMaquina(m)}
                        />
                        <Button
                            icon="pi pi-pencil"
                            size="small"
                            severity="warning"
                            outlined
                            onClick={() => handleEditar(m)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
