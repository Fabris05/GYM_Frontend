import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React, { useState } from "react";

export default function ModalLogin({ visible, handleCloseLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            onHide={handleCloseLogin}
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
                    className="p-inputtext w-full"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.79)",
                        color: "#fff",
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
                    className="p-inputtext w-full"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.79)",
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 1)",
                        borderRadius: "6px",
                    }}
                />

                <div className="flex gap-4 justify-center mt-4">
                    <Button
                        label="Iniciar Sesión"
                        className="p-button "
                        style={{
                            backgroundColor: "rgba(245, 149, 15, 0.89)",
                            border: "none",
                            color: "#fff",
                            backdropFilter: "blur(5px)",
                        }}
                        onClick={() =>
                            alert(`Email: ${email}, Password: ${password}`)
                        }
                    />
                </div>
            </div>
        </Dialog>
    );
}
