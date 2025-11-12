import axios from "axios";
import { PORT } from "../utils/port";

export interface DashboardData {
    maquinasTotales: number;
    sedesMasConcurridas: { nombre: string; totalClientes: number }[];
    sedesConMasGanancias: { nombre: string; ganancias: number }[];
    proveedoresTotales: number;
    clientesTotales: number;
    ingresosTotales: number;
}

export async function getDashboardData(): Promise<DashboardData> {
    const res = await axios.get(`http://localhost:${PORT}/api/dashboard/resumen`);
    return res.data;
}