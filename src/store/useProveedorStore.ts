import { create } from "zustand";
import type { Proveedor } from "@/services/proveedorService";
import * as proveedorService from "@/services/proveedorService";

interface ProveedorState {
    proveedores: Proveedor[];
    loading: boolean;
    fetchProveedores: () => Promise<void>;
    addProveedor: (proveedor: Omit<Proveedor, 'proveedorId'>) => Promise<void>;
    updateProveedor: (proveedorId: number, proveedor: Proveedor) => Promise<void>;
    findByCategoria: (categoria: string) => void;
    deleteProveedor: (proveedorId: number) => Promise<void>;
}

export const useProveedorStore = create<ProveedorState>((set, get) => ({
    proveedores: [],
    loading: false,

    fetchProveedores: async () => {
        set({ loading: true });
        try {
            const data = await proveedorService.getAllProveedores();
            set({ proveedores: data });
        } catch (error) {
            console.error("Datos no encontrados:", error);
        } finally {
            set({ loading: false });
        }
    },

    addProveedor: async (proveedor) => {
        try {
            const newProveedor = await proveedorService.addProveedor(proveedor);
            set({ proveedores: [...get().proveedores, newProveedor] })
        } catch (error) {
            console.error("Error al agregar proveedor:", error);
            throw error;
        }
    },

    updateProveedor: async (proveedorId: number, proveedor: Proveedor) => {
        try {
            const updatedProveedor = await proveedorService.updateProveedor(proveedorId, proveedor);
            set({
                proveedores: get().proveedores.map((p) =>
                    p.proveedorId === proveedorId ? updatedProveedor : p
                ),
            });
        } catch (error) {
            console.error("Error al actualizar proveedor:", error);
            throw error;
        }
    },
    findByCategoria: (categoria: string) => {
        const proveedoresFiltered = get().proveedores.filter((p) => p.categoria === categoria);
        set({ proveedores: proveedoresFiltered });
    },
    deleteProveedor: async (proveedorId: number) => {
        try {
            await proveedorService.deleteProveedor(proveedorId);
            set({
                proveedores: get().proveedores.filter((p) => p.proveedorId !== proveedorId),
            });
        } catch (error) {
            console.error("Error al eliminar proveedor:", error);
            throw error;
        }
    }
}))