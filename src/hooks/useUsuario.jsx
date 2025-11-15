import useModal from "@/hooks/useModal";
import { useState } from "react";
import { Button } from "primereact/button";
import { Pencil } from "lucide-react";
import { initialUsuarioForm } from "@/constants/initialForms";
import { useUsuarioStore } from "@/store/useUsuarioStore";
import { successAlert, errorAlert } from "@/utils/alerts";
export default function useUsuario() {
    const { open, close, visible } = useModal();
    const [mode, setMode] = useState("crear");
    const [selectedUsuario, setSelectedUsuario] = useState(initialUsuarioForm);
    const { addUsuario, updateUsuario } = useUsuarioStore();

    const handleModalOpen = () => {
        open();
    };

    const handleModalClose = () => {
        setSelectedUsuario(initialUsuarioForm);
        close();
    };

    const handleCrear = () => {
        setMode("crear");
        handleModalOpen();
    };

    const handleEditar = (usuario) => {
        setMode("editar");
        setSelectedUsuario(usuario);
        handleModalOpen();
    };

    const createUsuario = async (usuario) => {
        await addUsuario(usuario);
        handleModalClose();
        successMessage();
    };

    const updatedUsuario = async (usuario) => {
        await updateUsuario(usuario.usuarioId, usuario);
        handleModalClose();
        successMessage();
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
