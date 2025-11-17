import { CircleCheck, LayoutList, User } from "lucide-react";
import CountUp from "react-countup";
import { categorias } from "@/constants/categorias";

export default function CardProveedores({ proveedores }) {
    const totalProveedores = proveedores.length;
    const totalCategorias = categorias.length;
    return (
        <>
            <div className="flex border h-30 border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Proveedores Totales
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalProveedores || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <User size={60} className="text-blue-500" />
                </div>
            </div>
            <div className="flex border h-30 border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Proveedores Activos
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalProveedores || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <CircleCheck size={60} className="text-green-500" />
                </div>
            </div>
            <div className="flex border h-30 border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">Categorías</h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalCategorias || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <LayoutList size={60} className="text-red-500" />
                </div>
            </div>
        </>
    );
}
