import { create } from "zustand";
import type { Sede } from "@/services/sedeService";
import * as sedeService from "@/services/sedeService";

interface SedeState {
    sedes: Sede[];
    loading: boolean;
    fetchSedes: () => Promise<void>;
    addSede: (sede: Omit<Sede, 'sedeId'>) => Promise<void>;
    updateSede: (sedeId: number, sede: Sede) => Promise<void>;
}

export const useSedeStore = create<SedeState>((set, get) => ({
    sedes: [],
    loading: false,

    fetchSedes: async () => {
        set({ loading: true });
        try {
            const data = await sedeService.getSedes();
            set({ sedes: data });
        } catch (error) {
            console.error("Datos no encontrados:", error);
        } finally {
            set({ loading: false });
        }
    },
    addSede: async (sede) => {
        try {
            const newSede = await sedeService.addSede(sede);
            set({ sedes: [...get().sedes, newSede] });
        } catch (error) {
            console.error("Error al agregar sede:", error);
            throw error;
        }
    },
    updateSede: async (sedeId: number, sede: Sede) => {
        try {
            const updatedSede = await sedeService.updateSede(sedeId, sede);
            set({ sedes: get().sedes.map((s) => 
                s.sedeId === sedeId ? updatedSede : s), 
            });
        } catch (error) {
            console.error("Error al actualizar sede:", error);
            throw error;
        }
    }
}))