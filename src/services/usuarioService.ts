import axios from 'axios';
import { PORT } from '@/utils/port';

export interface Usuario {
    usuarioId: number;
    nombreUsuario: string;
    password: string;
    rol: string;
}

export async function getUsuarios(): Promise<Usuario[]> {
    const res = await axios.get(`http://localhost:${PORT}/api/usuarios`);
    return res.data;
}

export async function addUsuario(usuario: Omit<Usuario, 'usuarioId'>): Promise<Usuario> {
    const res = await axios.post(`http://localhost:${PORT}/api/usuarios`, usuario);
    return res.data;
}

export async function updateUsuario(usuarioId: number, usuario: Usuario): Promise<Usuario> {
    const res = await axios.put(`http://localhost:${PORT}/api/usuarios/${usuarioId}`, usuario);
    return res.data;
}

export async function deleteUsuario(usuarioId: number): Promise<void>{
    await axios.delete(`http://localhost:${PORT}/api/usuarios/${usuarioId}`);
}