import axios from "axios";
import { PORT } from "@/utils/port";

export interface Sede {
    sedeId: number;
    nombre: string;
    direccion: string;
}

export async function getSedes(): Promise<Sede[]> {
    const res = await axios.get(`http://localhost:${PORT}/api/sedes`);
    return res.data;
}

export async function addSede(sede: Omit<Sede, 'sedeId'>): Promise<Sede> {
    const res = await axios.post(
        `http://localhost:${PORT}/api/sedes`, sede);
    return res.data;
}

export async function updateSede(sedeId: number, sede: Sede): Promise<Sede> {
    const res = await axios.put(`http://localhost:${PORT}/api/sedes/${sedeId}`, sede);
    return res.data;
}