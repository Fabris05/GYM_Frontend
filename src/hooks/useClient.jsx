import { useState } from "react";
import { useClienteStore } from "@/store/useClienteStore";
import useModal from "@/hooks/useModal";
import { initialClienteForm } from "@/constants/initialForms";

export default function useClient() {
    const { deleteCliente } = useClienteStore();
    const { visible, open, close } = useModal();
    const [estado, setEstado] = useState("crear");
    const [clienteSeleccionado, setClienteSeleccionado] =
        useState(initialClienteForm);

    const handleEliminar = (clienteId) => {
        deleteCliente(clienteId);
        console.log("Eliminar cliente con ID:", clienteId);
    };

    const handleEditar = (cliente) => {
        setClienteSeleccionado(cliente);
        setEstado("editar");
        open();
    };

    const handleAgregar = () => {
        setClienteSeleccionado(initialClienteForm);
        setEstado("crear");
        open();
    };

    return { handleEliminar, handleEditar, handleAgregar, visible, open, close, estado, clienteSeleccionado };
}
