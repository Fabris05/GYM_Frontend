import { create } from 'zustand';
import type { Empleado } from '@/services/empleadoService';
import * as empleadoService from '@/services/empleadoService';

interface EmpleadoState {
    empleados: Empleado[];
    loading: boolean;
    fetchEmpleados: () => Promise<void>;
    addEmpleado: (empleado: Omit<Empleado, 'empleadoId'>) => Promise<void>;
    updateEmpleado: (empleadoId: number, empleado: Empleado) => Promise<void>;
    findByRole: (cargo: string) => Promise<void>;
}

export const useEmpleadoStore = create<EmpleadoState>((set, get) => ({
    empleados: [],
    loading: false,
    fetchEmpleados: async () => {
        set({ loading: true });
        try {
            const data = await empleadoService.getAllEmpleados();
            console.log("Fetched empleados:", data);
            set({ empleados: data })
        } catch (error) {
            console.error("Datos no encontrados:", error);
        } finally {
            set({ loading: false });
        }
    },
    addEmpleado: async (empleado) => {
        try {
            const newEmpleado = await empleadoService.addEmpleado(empleado);
            set({ empleados: [...get().empleados, newEmpleado] })
        } catch (error) {
            console.error("Error al agregar usuario:", error);
            throw error;
        }
    },
    updateEmpleado: async (empleadoId, empleado) => {
        try{
            const updatedEmpleado = await empleadoService.updateEmpleado(empleadoId, empleado);
            set({
                empleados: get().empleados.map((e) =>
                    e.empleadoId === empleadoId ? updatedEmpleado : e)
            });
        }catch(error){
            console.error("Error al actualizar empleado:", error);
        }
    },
    findByRole: async (cargo) => {
        try{
            set({ loading: true });
            const data = await empleadoService.findByRole(cargo);
            set( {empleados: data} );
        }catch(error){
            console.error("Error al buscar empleados por cargo:", error);
            throw error;
        }finally{
            set({ loading: false });
        }
    }
}))