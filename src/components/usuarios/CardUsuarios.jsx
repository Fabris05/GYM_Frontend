import { IdCardLanyard, User, UserStar } from "lucide-react";
import CountUp from "react-countup";

export default function CardUsuarios({ usuarios = [] }) {
    const totalUsuarios = usuarios.length;
    const totalAdministradores = usuarios.filter(
        (u) => u.rol === "ADMIN"
    ).length;
    const totalRecepcionistas = usuarios.filter( (u) => u.rol === "RECEPCIONISTA").length;

    return (
        <>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Usuarios Totales
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalUsuarios || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <User size={60} className="text-blue-500" />
                </div>
            </div>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Administradores
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalAdministradores || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <UserStar size={60} className="text-green-500" />
                </div>
            </div>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Recepcionistas
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalRecepcionistas || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <IdCardLanyard size={60} className="text-gray-500" />
                </div>
            </div>
        </>
    );
}
