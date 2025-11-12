import axios from "axios";
import { PORT } from "@/utils/port";

export interface Pago{
    idPago: number;
    clienteId: number;
    fecha: string;
    monto: number;
    estado: string;
}

export async function obtenerPagos(): Promise<Pago[]>{
    const res = await axios.get(`http://localhost:${PORT}/api/pagos`);
    return res.data;
}

export async function crearPago(pago: Omit<Pago, 'idPago'>, idCliente: number){
    const res = await axios.post(`http://localhost:${PORT}/api/pagos/registrar/${idCliente}`, pago);
    return res.data;
}