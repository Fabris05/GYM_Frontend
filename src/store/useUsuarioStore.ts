import { create } from 'zustand';
import type { Usuario } from '@/services/usuarioService';
import * as usuarioService from '@/services/usuarioService';

interface UsuarioState {
    usuarios: Usuario[];
    fetchUsuarios: () => Promise<void>;
    loading: boolean;
    addUsuario: (usuario: Omit<Usuario, 'usuarioId'>) => Promise<void>;
    updateUsuario: (usuarioId: number, usuario: Usuario) => Promise<void>;
    findUsuariosByRol: (rol: string) => void;
    findByNombreUsuario: (nombreUsuariio: string) => void;
}

export const useUsuarioStore = create<UsuarioState>((set, get) => ({
    usuarios: [],
    loading: false,
    fetchUsuarios: async () => {
        set({ loading: true });
        try {
            const data = await usuarioService.getUsuarios();
            set({ usuarios: data });
        } catch (error) {
            console.error("Error fetching usuarios:", error);
        } finally {
            set({ loading: false });
        }
    },
    addUsuario: async (usuario) => {
        try {
            const newUsuario = await usuarioService.addUsuario(usuario);
            set({ usuarios: [...get().usuarios, newUsuario] });
        } catch (error) {
            console.error("Error adding usuario:", error);
        }
    },
    updateUsuario: async (usuarioId: number, usuario: Usuario) => {
        try {
            const updatedUsuario = await usuarioService.updateUsuario(usuarioId, usuario);
            set({
                usuarios: get().usuarios.map((u) =>
                    u.usuarioId === usuarioId ? updatedUsuario : u)
            });
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    },
    findUsuariosByRol: (rol: string) => {
        const usuariosFiltrados = get().usuarios.filter((u) => u.rol === rol)
        set({ usuarios: usuariosFiltrados });
    },
    findByNombreUsuario: (nombreUsuariio: string) => {
        const usuarioFiltrado = get().usuarios.find( (u) => u.nombreUsuario === nombreUsuariio)
        set({ usuarios: usuarioFiltrado ? [usuarioFiltrado] : [] });
    }
}))