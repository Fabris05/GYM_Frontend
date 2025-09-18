import axios from "axios";

export interface Cliente {
    id: number;
    nombre: string;
    dni: string;
    telefono: string;
    correo: string;
    direccion: string;
    sede_id: number;
    fecha_pago: string;
    mensualidad: number;
    descripcion: string;
}

export async function getClientes(): Promise<Cliente[]> {
    const res = await axios.get("http://localhost:8080/api/clientes");
    return res.data;
}
