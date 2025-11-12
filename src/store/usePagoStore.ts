import { create } from 'zustand';
import type { Pago } from '@/services/pagoService';
import * as pagoService from '@/services/pagoService';

interface PagoState {
    pagos: Pago[];
    loading: boolean;
    fetchPagos: () => Promise<void>;
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
    }
}))