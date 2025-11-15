import { useState } from "react";
import useModal from "./useModal";
import { usePagoStore } from "@/store/usePagoStore";
import { initialPagoForm } from "@/constants/initialForms";
import { successAlert, errorAlert } from "@/utils/alerts";
import { useClienteStore } from "@/store/useClienteStore";
import { getFecha } from "@/utils/getFecha";
import { Button } from "primereact/button";
import { Pencil } from "lucide-react";

export default function usePago() {
    const [selectedPago, setSelectedPago] = useState(initialPagoForm);
    const { findByDNI } = useClienteStore();
    const [mode, setMode] = useState("crear");
    const { addPago, updatePago } = usePagoStore();
    const { open, close, visible } = useModal();

    const handleOpenModal = () => {
        open();
    };

    const handleCloseModal = () => {
        close();
        setSelectedPago(initialPagoForm);
    };

    const handleCrear = () => {
        setMode("crear");
        handleOpenModal();
    };

    const handleEditar = (pago) => {
        setMode("editar");
        handleOpenModal();
        setSelectedPago(pago);
    };

    const savePago = async (form, clienteId) => {
        await addPago({ ...form, fecha: getFecha() }, clienteId);
    };

    const updatedPago = async (pagoId, form) => {
        await updatePago(pagoId, form);
    };

    const successMessage = () => {
        const tipeMessage = mode === "crear" ? "creado" : "editado";
        successAlert(
            `Pago ${tipeMessage} con éxito`,
            `El pago ha sido ${tipeMessage} correctamente.`
        );
    };

    const errorMessage = () => {
        const tipeMessage = mode === "crear" ? "guardar" : "editar";
        errorAlert(
            `Error al ${tipeMessage} el pago`,
            `Ha ocurrido un error al ${tipeMessage} el pago.`
        );
    };

    const findCliente = async (dni) => {
        try {
            await findByDNI(dni);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const handleSubmit = (form, clienteId) => {
        try {
            mode === "crear"
                ? savePago(form, clienteId)
                : updatedPago(selectedPago.pagoId, form);
            handleCloseModal();
            successMessage();
        } catch (error) {
            errorMessage();
            console.error(error);
            throw error;
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
        selectedPago,
        mode,
        visible,
        handleCrear,
        handleEditar,
        handleSubmit,
        handleCloseModal,
        findCliente,
        actionBodyTemplate,
    };
}
