import { DollarSign, Dumbbell, Package, UserPlus } from "lucide-react";
import CountUp from "react-countup";

export default function KPICard({ title, value, type }) {
    const icons = {
        ingresos: <DollarSign className="text-green-500" size={30} />,
        clientes: <UserPlus className="text-blue-500" size={30} />,
        proveedores: <Package className="text-orange-500" size={30} />,
        maquinas: <Dumbbell className="text-purple-500" size={30} />,
    };

    const getColor = () => {
        switch (type) {
            case "ingresos":
                return "text-green-600";
            case "clientes":
                return "text-blue-600";
            case "proveedores":
                return "text-purple-600";
            case "maquinas":
                return "text-orange-600";
            default:
                return "text-gray-700";
        }
    };

    return (
        <div className="w-full h-30 flex items-center justify-between p-4 shadow-md rounded-2xl gap-4 hover:shadow-lg bg-white">
            <div className="flex flex-col">
                <span className="font-sans text-lg text-gray-800 font-bold">
                    {title}
                </span>
                <span className={`text-2xl font-bold ${getColor()}`}>
                    <CountUp
                        end={value || 0}
                        duration={2}
                        separator=","
                        prefix={type === "ingresos" ? "S/ " : ""}
                    />
                </span>
            </div>
            <div className="p-3 bg-gray-100 rounded-full">{icons[type]}</div>
        </div>
    );
}
