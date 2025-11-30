import axios from "axios";
import { PORT } from "../utils/port";

export interface Empleado{
    empleadoId: number;
    nombre: string;
    dni: string;
    telefono: string;
    cargo: string;
    sede:{
        sedeId: number;
    };
}

export async function getAllEmpleados(): Promise<Empleado[]>{
    const res = await axios.get(`http://localhost:${PORT}/api/empleados`);
    return res.data;
}

export async function addEmpleado(empleado: Omit<Empleado, 'empleadoId'>): Promise<Empleado>{
    const res = await axios.post(`http://localhost:${PORT}/api/empleados`, empleado, {
        headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
}

export async function updateEmpleado(empleadoId: number, empleado: Empleado): Promise<Empleado>{
    const res = await axios.put(`http://localhost:${PORT}/api/empleados/${empleadoId}`, empleado);
    return res.data;
}

export async function findByRole(cargo: string): Promise<Empleado[]>{
    const res = await axios.get(`http://localhost:${PORT}/api/empleados/cargo/${cargo}`);
    return res.data;
}

export async function findByDNI(dni: string): Promise<Empleado>{
    const res = await axios.get(`http://localhost:${PORT}/api/empleados/dni/${dni}`);
    return res.data;
}

export async function deleteEmpleado(empleadoId: number): Promise<void>{
    await axios.delete(`http://localhost:${PORT}/api/empleados/${empleadoId}`);
}