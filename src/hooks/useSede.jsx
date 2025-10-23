import { useState } from "react";
import useModal from "./useModal";
import { initialSedeForm } from "@/constants/initialForms";
import { useSedeStore } from "@/store/useSedeStore";
import { successAlert, errorAlert } from "@/utils/alerts";

export default function useSede() {
    const { addSede, updateSede } = useSedeStore();
    const { open, close, visible } = useModal();
    const [mode, setMode] = useState("crear");
    const [selectedSede, setSelectedSede] = useState(initialSedeForm);

    const handleOpenModal = () => {
        open();
    };

    const handleCloseModal = () => {
        close();
        setSelectedSede(initialSedeForm);
    };

    const handleCrear = () => {
        setMode("crear");
        handleOpenModal();
    };

    const handleEditar = (sede) => {
        setMode("editar");
        setSelectedSede(sede);
        handleOpenModal();
    };

    const saveSede = async (form) => {
        await addSede(form);
    };

    const updatedSede = async (sedeId, form) => {
        await updateSede(sedeId, form);
    };

    const successMessage = () => {
        const tipeMessage = mode === "crear" ? "añadida" : "editada";
        successAlert(
            `Sede ${tipeMessage} correctamente`,
            `La sede ha sido ${tipeMessage} con éxito.`
        );
    };

    const errorMessage = () => {
        const tipeMessage = mode === "crear" ? "guardar" : "editar";
        errorAlert(
            `Error al ${tipeMessage} la sede`,
            `Ha ocurrido un error al ${tipeMessage} la sede.`
        );
    };

    const handleSubmit = (form) => {
        try {
            if (mode === "crear") {
                saveSede(form);
            } else {
                updatedSede(form.sedeId, form);
            }
            handleCloseModal();
            successMessage();

        } catch (error) {
            console.log(error);
            errorMessage();
            return;
        }
    };

    return {
        visible,
        handleCrear,
        handleEditar,
        handleCloseModal,
        mode,
        selectedSede,
        handleSubmit,
    };
}
