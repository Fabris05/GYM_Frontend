import { create } from 'zustand';
import type { Pago } from '@/services/pagoService';
import * as pagoService from '@/services/pagoService';

interface PagoState {
    pagos: Pago[];
    loading: boolean;
    fetchPagos: () => Promise<void>;
    addPago: (pago: Omit<Pago, 'pagoId'>, clienteId: number) => Promise<void>;
    updatePago: (pagoId: number, pago: Pago) => Promise<void>;
}

export const usePagoStore = create<PagoState>((set, get) => ({
    pagos: [],
    loading: false,
    fetchPagos: async () => {
        set({ loading: true });
        try {
            const data = await pagoService.obtenerPagos();
            console.log("Fetched pagos:", data);
            set({ pagos: data });
        } catch (error) {
            console.error("Datos no encontrados:", error);
        } finally {
            set({ loading: false });
        }
    },
    addPago: async (pago, clienteId: number) => {
        try {
            const newPago = await pagoService.crearPago(pago, clienteId);
            set({ pagos: [...get().pagos, newPago] })
        } catch (error) {
            console.error("Error al agregar pago:", error);
            throw error;
        }
    },
    updatePago: async (pagoId: number, pago: Pago) => {
        try {
            const updatedPago = await pagoService.actualizarPago(pagoId, pago);
            set({ pagos: get().pagos.map((p) => 
                p.pagoId === pagoId ? updatedPago : p) 
            });
        } catch (error) {
            console.error("Error al actualizar pago:", error);
            throw error;
        }
    }
}))