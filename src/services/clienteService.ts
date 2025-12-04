import axios from "axios";
import { PORT } from "@/utils/port";

export interface Cliente {
    clienteId: number;
    nombre: string;
    dni: string;
    telefono: string;
    correo: string;
    direccion: string;
    sede: { sedeId: number | null, nombre: string | null };
    fechaPago: string;
    mensualidad: number;
    descripcion: string;
    eliminado: boolean;
}

export async function getClientes(): Promise<Cliente[]> {
    const res = await axios.get(`http://localhost:${PORT}/api/clientes/eliminados`);
    return res.data;
}

export async function addCliente(cliente: Omit<Cliente, 'id'>): Promise<Cliente> {
    const res = await axios.post(
        "http://localhost:8080/api/clientes",
        cliente,
        {
            headers: { "Content-Type": "application/json" }
        }
    );
    return res.data;
}

export async function findByDNI(dni: string): Promise<Cliente> {
    const res = await axios.get(`http://localhost:${PORT}/api/clientes/dni/${dni}`);
    return res.data;
}

export async function updateCliente<Cliente>(clienteId: number, cliente: Cliente): Promise<Cliente> {
    const res = await axios.put(`http://localhost:${PORT}/api/clientes/${clienteId}`, cliente);
    return res.data;
}

export async function deleteCliente(clienteId: number): Promise<void> {
    await axios.delete(`http://localhost:${PORT}/api/clientes/${clienteId}`);
}

export async function enableCliente(clienteId: number): Promise<void> {
    await axios.put(`http://localhost:${PORT}/api/clientes/restaurar/${clienteId}`);
}