import { CircleCheck, EyeOff, User } from "lucide-react";

export default function CardClientes() {
    return (
        <>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Clientes Totales
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">7</span>
                </div>
                <div className="flex items-center">
                    <User size={60} className="text-blue-500" />
                </div>
            </div>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Clientes Activos
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">7</span>
                </div>
                <div className="flex items-center">
                    <CircleCheck size={60} className="text-green-500" />
                </div>
            </div>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Clientes Inactivos
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">0</span>
                </div>
                <div className="flex items-center">
                    <EyeOff size={60} className="text-red-500" />
                </div>
            </div>
        </>
    );
}
