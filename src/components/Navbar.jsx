"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { useAuthStore } from "@/store/useAuthStore";
import { OverlayPanel } from "primereact/overlaypanel";
import { ChevronDown, IdCardLanyard, UserStar } from "lucide-react";

export default function Navbar() {
    const { userLogged, logout } = useAuthStore();
    const router = useRouter();
    const opRef = useRef(null);
    const [open, setOpen] = useState(false);

    const toggleMenu = (e) => {
        opRef.current?.toggle(e);
    };

    const handleShow = () => setOpen(true);
    const handleHide = () => setOpen(false);

    const handleLogOut = () => {
        logout();
        router.push("/");
    };

    return (
        <header className="w-full h-[8ch] px-6 bg-zinc-50 shadow-md flex items-center justify-between">
            <div className="w-full flex justify-end">
                <div className="flex items-center gap-4 relative">
                    <div
                        className="flex items-center gap-3 cursor-pointer select-none"
                        onClick={(e) => toggleMenu(e)}
                    >
                        <div className="flex flex-col text-right mr-2">
                            <span className="font-semibold text-gray-700">
                                {userLogged?.nombreUsuario ?? "Invitado"}
                            </span>
                            <span className="text-gray-600 text-sm">
                                {userLogged?.rol ?? "Sin rol"}
                            </span>
                        </div>

                        <Avatar
                            icon={
                                userLogged?.rol === "ADMIN" ? (
                                    <UserStar />
                                ) : (
                                    <IdCardLanyard />
                                )
                            }
                            shape="square"
                            className="bg-gray-300 text-gray-700"
                            style={{ width: "40px", height: "40px" }}
                        />

                        <span
                            className={`inline-block ml-2 transform transition-transform duration-200 ${
                                open ? "rotate-180" : "rotate-0"
                            }`}
                            aria-hidden
                        >
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                        </span>
                    </div>

                    <OverlayPanel
                        ref={opRef}
                        className="shadow-lg p-1"
                        onShow={handleShow}
                        onHide={handleHide}
                        showCloseIcon={false}
                    >
                        <div className="flex flex-col gap-2 w-48">
                            <div className="px-2 py-2 border-b border-gray-300">
                                <div className="text-sm text-gray-700 font-semibold">
                                    {userLogged?.nombreUsuario}
                                </div>
                                <div className="text-xs text-gray-800">
                                    {userLogged?.rol}
                                </div>
                            </div>

                            <div className="p-2">
                                <Button
                                    label="Cerrar sesión"
                                    severity="danger"
                                    className="button-sm w-full"
                                    onClick={() => {
                                        handleLogOut();
                                        opRef.current?.hide?.();
                                    }}
                                />
                            </div>
                        </div>
                    </OverlayPanel>
                </div>
            </div>
        </header>
    );
}
