import { Save } from "lucide-react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { initialMaquinaForm } from "@/constants/initialForms";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import useInventario from "@/hooks/useInventario";
import { useSedeStore } from "@/store/useSedeStore";
import { useProveedorStore } from "@/store/useProveedorStore";
import { InputTextarea } from "primereact/inputtextarea";
export default function FormMaquina({
    visible,
    mode,
    selectedItem,
    handleCloseModal,
    onSubmit,
}) {
    const [form, setForm] = useState(initialMaquinaForm);
    const { sedes, fetchSedes } = useSedeStore();
    const { proveedores, fetchProveedores } = useProveedorStore();
    const [imagenUrl, setImagenUrl] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const estadosOptions = [
        { label: "Operativa", value: "Operativa" },
        { label: "Mantenimiento", value: "Mantenimiento" },
        { label: "Dañada", value: "Dañada" },
    ];

    const onUpload = (e) => {
        const response = e.xhr.response ? JSON.parse(e.xhr.response) : null;
        if (response?.imageUrl) {
            setImagenUrl(response.imageUrl);
            setForm((prev) => ({
                ...prev,
                imagen: response.imageUrl,
            }));
        }
    };

    const footerContent = (
        <div>
            <Button
                label={mode === "crear" ? "Guardar" : "Actualizar"}
                icon={<Save />}
                severity="success"
                size="small"
                className="gap-2"
                onClick={() => onSubmit(form)}
            />
        </div>
    );

    useEffect(() => {
        if (selectedItem) {
            setForm(selectedItem);
        } else {
            setForm(initialMaquinaForm);
        }

        fetchSedes();
        fetchProveedores();
    }, [selectedItem]);

    return (
        <div className="card flex justify-content-center">
            <Dialog
                header={mode === "crear" ? "Añadir Máquina" : "Editar Máquina"}
                footer={footerContent}
                style={{ width: "50vw" }}
                visible={visible}
                onHide={handleCloseModal}
            >
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre">Nombre</label>
                        <InputText
                            id="nombre"
                            name="nombre"
                            aria-describedby="nombre-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            value={form.nombre}
                            onChange={handleChange}
                        />
                        <small id="nombre-help">
                            Ingresa el nombre de la máquina.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="categoria">Descripción</label>
                        <InputTextarea
                            id="descripcion"
                            name="descripcion"
                            aria-describedby="descripcion-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            value={form.descripcion}
                            onChange={handleChange}
                        />
                        <small id="direccion-help">
                            Ingresa la dirección de la Sede.
                        </small>
                    </div>
                    {mode === "crear" ? (
                        <div className="flex flex-col gap-2">
                            <label htmlFor="categoria">Estado</label>
                            <InputText
                                id="estado"
                                name="estado"
                                className="p-inputtext-sm"
                                value={form.estado || "Operativa"}
                                readOnly
                            />
                            <small id="estado-help">
                                El estado está predeterminado como "Operativa".
                            </small>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <label htmlFor="estado">Estado</label>
                            <Dropdown
                                id="estado"
                                name="estado"
                                options={estadosOptions}
                                value={form.estado}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        estado: e.value,
                                    }))
                                }
                                placeholder="Selecciona el estado"
                                className="p-inputtext-sm"
                            />
                            <small id="estado-help">
                                Selecciona el estado de la máquina.
                            </small>
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="categoria">Proveedor</label>
                            <Dropdown
                                id="proveedor"
                                name="proveedorId"
                                value={form.proveedor?.proveedorId || ""}
                                options={proveedores}
                                optionLabel="nombre"
                                optionValue="proveedorId"
                                className="p-inputtext-sm"
                                placeholder="Selecciona un proveedor"
                                readOnly
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        proveedor: { proveedorId: e.value },
                                    }))
                                }
                            />
                            <small id="estado-help">
                                Seleccione el proveedor.
                            </small>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="categoria">Sede</label>
                            <Dropdown
                                id="sede"
                                name="sedeId"
                                value={form.sede?.sedeId || ""}
                                options={sedes}
                                optionLabel="nombre"
                                optionValue="sedeId"
                                placeholder="Selecciona una sede"
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        sede: { sedeId: e.value },
                                    }))
                                }
                                className="p-inputtext-sm"
                            />
                            <small id="estado-help">Seleccione la sede.</small>
                        </div>
                    </div>
                    <div className="card flex flex-col gap-2">
                        <label htmlFor="categoria" className="font-bold">
                            Imagen
                        </label>
                        <FileUpload
                            name="file"
                            url="/api/upload"
                            accept="image/*"
                            maxFileSize={1000000}
                            onUpload={onUpload}
                            chooseLabel="Elegir"
                            uploadLabel="Subir"
                            cancelLabel="Cancelar"
                            emptyTemplate={
                                <p className="m-0">
                                    Arrastra y suelta archivos aquí para
                                    subirlos.
                                </p>
                            }
                        />
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
