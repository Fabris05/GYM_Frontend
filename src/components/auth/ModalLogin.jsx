import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { confirmLogin } from "@/utils/alerts";
import { ProgressSpinner } from "primereact/progressspinner";

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

    const closeLoginModal = () => {
        setEmail("");
        setPassword("");
        handleCloseLogin();
    };

    const handleLogin = async () => {
        await userLogin(email, password);
    };

    useEffect(() => {
        if (userLogged && visible) {
            handleCloseLogin();
            confirmLogin();
            userLogged.rol === "ADMIN"
                ? router.push("/admin/dashboard")
                : router.push("/admin/clientes");
        }
    }, [userLogged, visible, router, handleCloseLogin]);

    return (
        <Dialog
            visible={visible}
            style={{
                width: "30rem",
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
                />
                <div className="flex justify-center mt-4">
                    {error && (
                        <span className="text-red-600 font-semibold">
                            {error}
                        </span>
                    )}
                </div>
                <div className="flex gap-4 justify-center mt-4">
                    <Button
                        label={
                            loading ? (
                                <ProgressSpinner
                                    style={{ width: "25px", height: "25px" }}
                                    strokeWidth="8"
                                    fill="transparent"
                                    animationDuration="2s"
                                />
                            ) : (
                                "Iniciar Sesión"
                            )
                        }
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
