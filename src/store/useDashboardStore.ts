import {create} from "zustand";
import type {DashboardData} from "@/services/dashboardService";
import * as dashboardService from "@/services/dashboardService";


interface DashboardState {
    dashboardData: DashboardData | null;
    loading: boolean;
    fetchDashboardData: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>( (set, get) => ({
    dashboardData: null,
    loading: false,
    fetchDashboardData: async () => {
        set( {loading: true})
        try{
            const data = await dashboardService.getDashboardData();
            console.log("Datos del dashboard obtenidos:", data);
            set( {dashboardData: data})
        }catch (error){
            console.error("Error al obtener datos del dashboard:", error);
            throw error;
        }finally{
            set( {loading: false} );
        }
    },
}))