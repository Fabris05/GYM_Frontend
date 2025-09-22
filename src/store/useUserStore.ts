import { create } from 'zustand';
import type { User } from '@/services/userService';
import * as userService from '@/services/userService';

interface UserState {
    users: User[];
    loading: boolean;
    fetchUsers: () => Promise<void>;
    addUser: (user: Omit<User, 'empleadoId'>) => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
    users: [],
    loading: false,
    fetchUsers: async () => {
        set({ loading: true });
        try {
            const data = await userService.getAllUsers();
            console.log("Fetched users:", data);
            set({ users: data })
        } catch (error) {
            console.error("Datos no encontrados:", error);
        } finally {
            set({ loading: false });
        }
    },
    addUser: async (user) => {
        try {
            const newUser = await userService.addUser(user);
            set({ users: [...get().users, newUser] })
        } catch (error) {
            console.error("Error al agregar usuario:", error);
            throw error;
        }
    }
}))