import useModal from "./useModal";
import { successAlert, errorAlert } from "@/utils/alerts";
import { useProveedorStore } from "@/store/useProveedorStore";
import { Pencil } from "lucide-react";
import { Button } from "primereact/button";
import { initialProveedorForm } from "@/constants/initialForms";
import { useState } from "react";

export default function useProveedor() {
    const [selectedProveedor, setSelectedProveedor] =
        useState(initialProveedorForm);
    const [mode, setMode] = useState("crear");
    const { addProveedor, updateProveedor } = useProveedorStore();
    const { open, close, visible } = useModal();

    // Función para abrir el modal
    const handleModalOpen = () => {
        open();
    };

    // Función para cerrar el modal y resetear el proveedor seleccionado
    const handleModalClose = () => {
        close();
        setSelectedProveedor(initialProveedorForm);
    };

    const handleCrear = () => {
        setMode("crear");
        handleModalOpen();
    };

    // Función para manejar la edición de un proveedor
    const handleEditar = (proveedor) => {
        setMode("editar");
        setSelectedProveedor(proveedor);
        handleModalOpen();
    };

    // Función para mostrar el mensaje de éxito
    const messageSuccess = () => {
        const tipeMessage = mode === "crear" ? "añadido" : "editado";
        successAlert(
            `Proveedor ${tipeMessage} correctamente`,
            `El proveedor ha sido ${tipeMessage} con éxito.`
        );
    };

    // Función para mostrar el mensaje de error
    const messageError = () => {
        errorAlert(
            "Error al añadir proveedor",
            "Ha ocurrido un error al añadir el proveedor."
        );
    };

    const saveProveedor = async (form) => {
        await addProveedor(form);
    };

    const updatedProveedor = async (proveedorId, form) => {
        await updateProveedor(proveedorId, form);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (form, selectedCategoria) => {
        try {
            if (mode === "crear") {
                await saveProveedor(form, selectedCategoria);
            } else {
                await updatedProveedor(form.proveedorId, form);
            }
            handleModalClose();
            messageSuccess();
        } catch (error) {
            console.log(error);
            messageError();
        }
    };

    // Plantilla para el botón de acción en la tabla
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-center">
                <Button
                    icon={<Pencil size={20} />}
                    rounded
                    text
                    severity="success"
                    aria-label="Search"
                    onClick={() => handleEditar(rowData)}
                />
            </div>
        );
    };

    return {
        handleModalOpen,
        handleModalClose,
        handleSubmit,
        actionBodyTemplate,
        selectedProveedor,
        mode,
        handleCrear,
        visible,
    };
}
