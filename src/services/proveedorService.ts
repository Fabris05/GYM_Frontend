import axios from "axios";

import { PORT } from "../utils/port";

export interface Proveedor {
    proveedorId: number;
    nombre: string;
    categoria: string;
}

export async function getAllProveedores(): Promise<Proveedor[]> {
    const res = await axios.get(`http://localhost:${PORT}/api/proveedores`);
    return res.data;
}

export async function addProveedor(proveedor: Omit<Proveedor, 'proveedorId'>): Promise<Proveedor> {
    const res = await axios.post(`http://localhost:${PORT}/api/proveedores`, proveedor, {
        headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
}

export async function updateProveedor(proveedorId: number, proveedor: Proveedor): Promise<Proveedor> {
    const res = await axios.put(`http://localhost:${PORT}/api/proveedores/${proveedorId}`, proveedor);
    return res.data;
}

export async function deleteProveedor(proveedorId: number): Promise<void> {
    await axios.delete(`http://localhost:${PORT}/api/proveedores/${proveedorId}`);
}
