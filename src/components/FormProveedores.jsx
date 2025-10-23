import { Button } from "primereact/button";
import useProveedorStore from "../stores/proveedorStore";
import { Save } from "lucide-react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

export default function FormProveedores({visible}) {
    const { addProveedor, updateProveedor } = useProveedorStore();

    const footerContent = (
        <div>
            <Button
                label="Guardar"
                icon={<Save />}
                severity="success"
                size="small"
                className="gap-2"
            />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Dialog
                header="Formulario Proveedor"
                footer={footerContent}
                style={{ width: "40vw" }}
                visible={visible}
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
                </form>
            </Dialog>
        </div>
    );
}
