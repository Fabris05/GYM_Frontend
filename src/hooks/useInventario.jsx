import { useState } from "react";
import useModal from "./useModal";
import { initialMaquinaForm } from "@/constants/initialForms";
import { successAlert, errorAlert } from "@/utils/alerts";
import { useMaquinaStore } from "@/store/useMaquinaStore";

export default function useInventario() {
    const { addMaquina, updateMaquina, findByEstado } = useMaquinaStore();
    const { open, close, visible, openView, closeView, visibleView } =
        useModal();
    const [mode, setMode] = useState("crear");
    const [selectedItem, setSelectedItem] = useState(initialMaquinaForm);

    const handleCloseModal = () => {
        close();
        setSelectedItem(initialMaquinaForm);
    };

    const handleCrear = () => {
        setMode("crear");
        setSelectedItem(initialMaquinaForm);
        open();
    };

    const handleEditar = (item) => {
        setMode("editar");
        setSelectedItem(item);
        open();
    };

    const handleOpenView = (item) => {
        setSelectedItem(item);
        openView();
    };

    const handleCloseViewModal = () => {
        closeView();
        //setSelectedItem(initialMaquinaForm);
    };

    const handleFindByEstado = async (estado) => {
        try {
            await findByEstado(estado);
        } catch (error) {
            console.error("Error al buscar por estado:", error);
        }
    }

    const saveMaquina = async (form) => {
        await addMaquina(form);
    };

    const updatedMaquina = async (maquinaId, form) => {
        await updateMaquina(maquinaId, form);
    };

    const messaggeSuccess = () => {
        const tipeMessage = mode === "crear" ? "añadida" : "editada";
        successAlert(
            `Maquina ${tipeMessage} correctamente`,
            `La maquina ha sido ${tipeMessage} con éxito.`
        );
    };

    const messaggeError = () => {
        const tipeMessage = mode === "crear" ? "añadir" : "editar";
        errorAlert(
            `Error al ${tipeMessage} la máquina`,
            `Ha ocurrido un error al ${tipeMessage} la máquina.`
        );
    };

    const onSubmit = async (form) => {
        try {
            const payload = {
                ...form,
                sede: { sedeId: form.sede?.sedeId || 1 },
                proveedor: { proveedorId: form.proveedor?.proveedorId || 1 },
            };

            if (mode === "crear") {
                await saveMaquina(payload);
            } else {
                await updatedMaquina(payload.maquinaId, payload);
            }

            handleCloseModal();
            messaggeSuccess();
        } catch (error) {
            console.error("Error al guardar máquina:", error);
            messaggeError();
        }
    };

    return {
        mode,
        visible,
        selectedItem,
        handleCrear,
        handleEditar,
        handleCloseModal,
        onSubmit,
        handleOpenView,
        handleCloseViewModal,
        visibleView,
        handleFindByEstado,
    };
}
