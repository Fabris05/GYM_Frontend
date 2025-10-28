import axios from "axios";

import { PORT } from "@/utils/port";

export interface Maquina {
    maquinaId: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    estado: string;
    sede: {
        sedeId: number;
    };
    proveedor: {
        proveedorId: number;
    };
}

export async function getMaquinas(): Promise<Maquina[]> {
    const res = await axios.get(`http://localhost:${PORT}/api/maquinas`);
    return res.data;
}

export async function addMaquina(maquina: Omit<Maquina, 'maquinaId'>): Promise<Maquina> {
    const res = await axios.post(`http://localhost:${PORT}/api/maquinas`, maquina);
    return res.data;
}

export async function updateMaquina(maquinaId: number, maquina: Maquina): Promise<Maquina> {
    const res = await axios.put(`http://localhost:${PORT}/api/maquinas/${maquinaId}`, maquina);
    return res.data;
}