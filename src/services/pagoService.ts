import axios from "axios";
import { PORT } from "@/utils/port";

export interface Pago {
    pagoId: number;
    clienteId: number;
    fecha: string;
    monto: number;
    estado: string;
}

export async function obtenerPagos(): Promise<Pago[]> {
    const res = await axios.get(`http://localhost:${PORT}/api/pagos`);
    return res.data;
}

export async function crearPago(pago: Omit<Pago, 'pagoId'>, idCliente: number) {
    const res = await axios.post(`http://localhost:${PORT}/api/pagos/registrar/${idCliente}`, pago);
    return res.data;
}

export async function actualizarPago(pagoId: number, pago: Pago) {
    const res = await axios.put(`http://localhost:${PORT}/api/pagos/${pagoId}`, pago);
    return res.data;
}

export async function findPagoByClientId(clienteId: number): Promise<Pago[]> {
    const res = await axios.get(`http://localhost:${PORT}/api/pagos/cliente/${clienteId}`);
    return res.data;
}
