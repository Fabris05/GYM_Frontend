import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { categorias } from "@/constants/categorias";
import { initialProveedorForm } from "@/constants/initialForms";
import useProveedor from "@/hooks/useProveedor";

export default function FormProveedores({
    visible,
    handleModalClose,
    handleSubmit,
    selectedProveedor,
    mode,
}) {
    const [form, setForm] = useState(initialProveedorForm);
    const [selectedCategoria, setSelectedCategoria] = useState("");

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
        if (selectedProveedor) {
            setForm(selectedProveedor);
        }
    }, [selectedProveedor]);

    return (
        <div className="card flex justify-content-center">
            <Dialog
                header={
                    mode === "crear" ? "Añadir Proveedor" : "Editar Proveedor"
                }
                footer={footerContent}
                style={{ width: "40vw" }}
                visible={visible}
                onHide={handleModalClose}
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
                            Ingresa el nombre del proveedor.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="categoria">Categoría</label>
                        <Dropdown
                            name="categoria"
                            options={categorias}
                            optionLabel="name"
                            optionValue="code"
                            placeholder="Categorías"
                            value={form.categoria}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    categoria: e.value,
                                }))
                            }
                        />
                        <small id="categoria-help">
                            Selecciona la categoría del proveedor.
                        </small>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
