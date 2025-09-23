import { create } from 'zustand';
import type { Cliente } from '@/services/clienteService';
import * as clienteService from '@/services/clienteService';

interface ClienteState {
    clientes: Cliente[];
    loading: boolean;
    fetchClientes: () => Promise<void>;
    addCliente: (cliente: Omit<Cliente, "id">) => Promise<void>;
    findByDNI : (dni: string) => Cliente | undefined;
    //removeCliente: (id: number) => void;
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
        }catch (error) {
            console.error("Datos no encontrados:", error);
        } finally {
            set({ loading: false });
        }
    },
    addCliente: async(cliente) => {
        try{
            const newCliente = await clienteService.addCliente(cliente);
            set({clientes:[...get().clientes, newCliente]})
        }catch(error){
            console.error("Error al agregar cliente:", error);
            throw error;
        }
    },
    findByDNI: (dni: string) => {
        const clientes = get().clientes;
        return clientes.find(cliente => cliente.dni === dni);
    }
}));