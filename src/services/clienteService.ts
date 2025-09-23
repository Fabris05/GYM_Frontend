import axios from "axios";

export interface Cliente {
    id: number;
    nombre: string;
    dni: string;
    telefono: string;
    correo: string;
    direccion: string;
    sede: { sedeId: number | null };
    fechaPago: string;
    mensualidad: number;
    descripcion: string;
}

export async function getClientes(): Promise<Cliente[]> {
    const res = await axios.get("http://localhost:8080/api/clientes");
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
