import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { authRequest, authResponse } from '@/services/AuthService';
import * as AuthService from '@/services/AuthService';

interface AuthState {
    userLogged: authResponse | null;
    loading: boolean;
    error: string | null;
    login: (user: authRequest) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            userLogged: null,
            loading: false,
            error: null,

            login: async (user: authRequest) => {
                set({ loading: true, error: null });
                try {
                    const userData = await AuthService.authtenticate(user);
                    set({ userLogged: userData, loading: false });
                } catch (error: any) {
                    set({
                        loading: false,
                        error: error?.response?.data?.message || "Usuario o contraseña incorrectos",
                    });
                }
            },

            logout: () => set({ userLogged: null, error: null })
        }),
        { name: 'auth-storage' }
    )
);
