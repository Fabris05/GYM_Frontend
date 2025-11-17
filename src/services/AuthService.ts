import axios from "axios";
import { PORT } from "@/utils/port"

export interface authRequest {
    nombreUsuario: string;
    password: string;
}

export interface authResponse {
    usuarioId: number;
    nombreUsuario: string;
    rol: string;
}

export const authtenticate = async (request: authRequest): Promise<authResponse> => {
    console.log("AuthService: authtenticate called with request:", request);
    const response = await axios.post<authResponse>(`http://localhost:${PORT}/auth/login`, request);
    return response.data;
}

