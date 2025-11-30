import useModal from "@/hooks/useModal";
import { useState } from "react";
import { Button } from "primereact/button";
import { Pencil } from "lucide-react";
import { initialUsuarioForm } from "@/constants/initialForms";
import { useUsuarioStore } from "@/store/useUsuarioStore";
import { successAlert, errorAlert, deleteItem } from "@/utils/alerts";

export default function useUsuario() {
    const { open, close, visible } = useModal();
    const [mode, setMode] = useState("crear");
    const [selectedUsuario, setSelectedUsuario] = useState(initialUsuarioForm);
    const { addUsuario, updateUsuario, deleteUsuario } = useUsuarioStore();

    const handleModalOpen = () => {
        open();
    };

    const handleModalClose = () => {
        setSelectedUsuario({
            ...initialUsuarioForm,
            nombreUsuario: "",
            password: "",
            rol: "",
        });
        close();
        console.log(selectedUsuario);
    };

    const handleCrear = () => {
        setMode("crear");
        setSelectedUsuario(initialUsuarioForm);
        handleModalOpen();
    };

    const handleEditar = (usuario) => {
        setMode("editar");
        setSelectedUsuario(usuario);
        handleModalOpen();
    };

    const handleEliminar = async (usuario) => {
        try {
            deleteItem(deletedUsuario, usuario.usuarioId, "usuario");
        } catch (error) {
            errorMessage(
                "Error al eliminar usuario",
                "Hubo un error al eliminar el usuario."
            );
        }
    };

    const createUsuario = async (usuario) => {
        await addUsuario(usuario);
        handleModalClose();
        successMessage();
        setSelectedUsuario(initialUsuarioForm);
    };

    const updatedUsuario = async (usuario) => {
        await updateUsuario(usuario.usuarioId, usuario);
        handleModalClose();
        successMessage();
    };

    const deletedUsuario = async (usuarioId) => {
        await deleteUsuario(usuarioId);
    };

    const successMessage = () => {
        successAlert(
            "Usuario actualizado",
            "El usuario ha sido actualizado con éxito."
        );
    };

    const errorMessage = () => {
        errorAlert(
            "Error al actualizar usuario",
            "Hubo un error al actualizar el usuario."
        );
    };

    const handleSubmit = (usuario) => {
        try {
            mode === "crear" ? createUsuario(usuario) : updatedUsuario(usuario);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            errorMessage();
        }
    };

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
                <Button
                    icon="pi pi-trash"
                    rounded
                    text
                    severity="danger"
                    aria-label="delete"
                    onClick={() => handleEliminar(rowData)}
                />
            </div>
        );
    };

    return {
        visible,
        selectedUsuario,
        handleCrear,
        handleEditar,
        handleModalClose,
        actionBodyTemplate,
        handleSubmit,
        mode,
    };
}
