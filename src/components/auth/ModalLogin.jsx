import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { confirmLogin } from "@/utils/alerts";

export default function ModalLogin({
    visible,
    handleCloseLogin,
    userLogin,
    error,
    loading,
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userLogged } = useAuthStore();
    const router = useRouter();

    const redirectIfLogged = async () => {
        if (userLogged) {
            handleCloseLogin();
            confirmLogin();
            userLogged.rol === "ADMIN"
                ? router.push("/admin/dashboard")
                : router.push("/admin/clientes");
        }
    };

    const closeLoginModal = () => {
        setEmail("");
        setPassword("");
        handleCloseLogin();
    };

    const handleLogin = () => {
        userLogin(email, password);
        redirectIfLogged();
    };

    return (
        <Dialog
            visible={visible}
            style={{
                width: "30rem",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "#fff",
                padding: "1rem",
            }}
            modal
            onHide={closeLoginModal}
        >
            <div className="flex flex-col gap-4">
                <span className="text-center text-3xl font-semibold text-gray-900">
                    Inicio de Sesión
                </span>
                <label
                    htmlFor="username"
                    className="text-gray-700 font-semibold"
                >
                    Usuario
                </label>
                <InputText
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-inputtext w-full text-gray-900"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.79)",
                        border: "1px solid rgba(255, 255, 255, 1)",
                        borderRadius: "6px",
                    }}
                />
                <label
                    htmlFor="username"
                    className="text-gray-700 font-semibold"
                >
                    Contraseña
                </label>
                <InputText
                    placeholder="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-inputtext w-full text-gray-900"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.79)",
                        border: "1px solid rgba(255, 255, 255, 1)",
                        borderRadius: "6px",
                    }}
                />
                <div>
                    {error && (
                        <span className="text-red-600 font-semibold text-center">
                            {error}
                        </span>
                    )}
                </div>
                <div className="flex gap-4 justify-center mt-4">
                    <Button
                        label={loading ? "Cargando..." : "Iniciar Sesión"}
                        className="p-button "
                        style={{
                            backgroundColor: "rgba(245, 149, 15, 0.89)",
                            border: "none",
                            color: "#fff",
                            backdropFilter: "blur(5px)",
                        }}
                        onClick={handleLogin}
                    />
                </div>
            </div>
        </Dialog>
    );
}
