import { useState } from "react";
import useModal from "./useModal";
import { initialMaquinaForm } from "@/constants/initialForms";
import { successAlert, errorAlert } from "@/utils/alerts";
import { useMaquinaStore } from "@/store/useMaquinaStore";

export default function useInventario() {
    const { addMaquina, updateMaquina } = useMaquinaStore();
    const { open, close, visible } = useModal();
    const [mode, setMode] = useState("crear");
    const [selectedItem, setSelectedItem] = useState(initialMaquinaForm);

    const handleCloseModal = () => {
        close();
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

    const onSubmit = (form) => {
        try {
            if (mode === "crear") {
                saveMaquina(form);
            } else {
                updatedMaquina(form.maquinaId, form);
            }
            handleCloseModal();
            messaggeSuccess();
        } catch (error) {
            console.error(error);
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
    };
}
