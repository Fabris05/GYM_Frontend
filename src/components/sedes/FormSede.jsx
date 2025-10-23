import { initialSedeForm } from "@/constants/initialForms";
import { Save } from "lucide-react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";

export default function FormSede({
    visible,
    handleCloseModal,
    mode,
    selectedSede,
    handleSubmit,
}) {
    const [form, setForm] = useState(initialSedeForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const footerContent = (
        <div>
            <Button
                label={mode === "crear" ? "Guardar" : "Actualizar"}
                icon={<Save />}
                severity="success"
                size="small"
                className="gap-2"
                onClick={() => handleSubmit(form)}
            />
        </div>
    );

    useEffect(() => {
        if (selectedSede) {
            setForm(selectedSede);
        }
    }, [selectedSede]);

    return (
        <div className="card flex justify-content-center">
            <Dialog
                header={mode === "crear" ? "Añadir Sede" : "Editar Sede"}
                footer={footerContent}
                style={{ width: "40vw" }}
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
                            Ingresa el nombre de la sede.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="categoria">Dirección</label>
                        <InputText
                            id="direccion"
                            name="direccion"
                            aria-describedby="direccion-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            value={form.direccion}
                            onChange={handleChange}
                        />
                        <small id="direccion-help">
                            Ingresa la dirección de la Sede.
                        </small>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
