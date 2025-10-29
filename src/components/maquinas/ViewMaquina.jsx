import { Badge } from "primereact/badge";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";

export default function ViewMaquina({
    visible,
    selectedItem,
    handleCloseModal,
}) {
    const getSeverity = (estado) => {
        switch (estado) {
            case "Operativa":
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
        <div className="card flex justify-content-center">
            <Dialog
                header="Vista de Máquina"
                visible={visible}
                style={{ width: "50vw" }}
                onHide={handleCloseModal}
                className="backdrop-blur-md bg-white rounded-2xl shadow-2xl border border-white"
            >
                <div className="flex flex-row gap-6 items-center p-4 bg-gradient-to-br from-slate-200/20 to-slate-200/20 rounded-xl backdrop-blur-md border border-white shadow-lg">
                    <div className="flex justify-center items-center w-2/5 p-3 bg-white rounded-xl backdrop-blur-md border border-gray-200/40 shadow-md hover:scale-[1.02] transition-all duration-200">
                        <Image
                            src={selectedItem.imagen}
                            alt={selectedItem.nombre}
                            className="w-full h-64 object-contain rounded-lg"
                            preview 
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-3 w-3/5 bg-white rounded-xl p-5 border border-gray-200/40 shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {selectedItem.nombre}
                        </h2>

                        <div className="flex items-center gap-2">
                            <span className="text-gray-700 text-sm font-bold">
                                Estado del equipo:
                            </span>
                            <Badge
                                severity={getSeverity(selectedItem.estado)}
                                value={selectedItem.estado}
                            />
                        </div>
                        <span className="text-gray-700 text-sm font-bold">
                            Descripción:
                        </span>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {selectedItem.descripcion}
                        </p>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}