import { create } from 'zustand';
import type { Cliente } from '@/services/clienteService';
import * as clienteService from '@/services/clienteService';

interface ClienteState {
    clientes: Cliente[];
    loading: boolean;
    fetchClientes: () => Promise<void>;
    addCliente: (cliente: Omit<Cliente, "id">) => Promise<void>;
    findByDNI: (dni: string) => Promise<void>;
}

export const useClienteStore = create<ClienteState>((set, get) => ({
    clientes: [],
    loading: false,

    fetchClientes: async () => {
        set({ loading: true });
        try {
            const data = await clienteService.getClientes();
            console.log("Fetched clientes:", data);
            set({ clientes: data });
        } catch (error) {
            console.error("Datos no encontrados:", error);
        } finally {
            set({ loading: false });
        }
    },
    addCliente: async (cliente) => {
        try {
            const newCliente = await clienteService.addCliente(cliente);
            set({ clientes: [...get().clientes, newCliente] })
        } catch (error) {
            console.error("Error al agregar cliente:", error);
            throw error;
        }
    },
    findByDNI: async (dni: string) => {
        set({ loading: true });
        try {
            const data = await clienteService.findByDNI(dni);
            console.log("Cliente encontrado:", data);
            set({ clientes: data ? [data] : [] });
        } catch (error) {
            console.error("Error al buscar cliente por DNI:", error);
            throw error;
        } finally {
            set({ loading: false });
        }
    },
    updateCliente: async (id: number, cliente: Cliente) => {
        try {
            const updatedCliente = await clienteService.updateCliente(id, cliente);
            set({
                clientes: get().clientes.map((c) =>
                    c.clienteId === id ? updatedCliente : c
                ),
            });
        } catch (error) {
            console.error("Error al actualizar cliente:", error);
            throw error;
        }
    },
}));