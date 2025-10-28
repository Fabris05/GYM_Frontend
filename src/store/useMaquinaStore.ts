import { create } from 'zustand';
import type { Maquina } from '@/services/MaquinaService';
import * as MaquinaService from '@/services/MaquinaService';
import { error } from 'console';

interface MaquinaState {
    maquinas: Maquina[];
    loading: boolean;
    fetchMaquinas: () => Promise<void>;
    addMaquina: (maquina: Omit<Maquina, 'maquinaId'>) => Promise<void>;
    updateMaquina: (maquinaId: number, maquina: Maquina) => Promise<void>;
}

export const useMaquinaStore = create<MaquinaState>((set, get) => ({
    maquinas: [],
    loading: false,
    fetchMaquinas: async () => {
        set({ loading: true });
        try {
            const data = await MaquinaService.getMaquinas();
            set({ maquinas: data })
        } catch (error) {
            console.error("Datos no encontrados:", error);
        }
        finally {
            set({ loading: false });
        }
    },
    addMaquina: async (maquina) => {
        try {
            const newMaquina = await MaquinaService.addMaquina(maquina);
            set({ maquinas: [...get().maquinas, newMaquina] })
        } catch (error) {
            console.error("Error al agregar maquina:", error);
            throw error;
        }
    },
    updateMaquina: async (maquinaId: number, maquina: Maquina) => {
        try {
            const updateMaquina = await MaquinaService.updateMaquina(maquinaId, maquina);
            set({
                maquinas: get().maquinas.map((m) =>
                    m.maquinaId === maquinaId ? updateMaquina : m)
            })
        } catch (error) {
            console.error("Error al actualizar maquina:", error);
            throw error;
        }
    }
}))