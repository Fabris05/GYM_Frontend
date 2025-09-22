import axios from "axios";

export interface User{
    empleadoId: number;
    nombre: string;
    dni: string;
    telefono: string;
    cargo: string;
    sede:{
        sedeId: number;
    };
}

export async function getAllUsers(): Promise<User[]>{
    const res = await axios.get("http://localhost:8080/api/empleados");
    return res.data;
}

export async function addUser(user: Omit<User, 'empleadoId'>): Promise<User>{
    const res = await axios.post("http://localhost:8080/api/empleados", user, {
        headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
}