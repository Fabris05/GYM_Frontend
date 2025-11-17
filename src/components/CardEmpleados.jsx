import { CircleCheck, EyeOff, User } from "lucide-react";
import CountUp from "react-countup";

export default function CardEmpleados({usuarios}) {

    const totalEmpleados = usuarios.length;

    return (
        <>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Empleados Totales
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalEmpleados || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <User size={60} className="text-blue-500" />
                </div>
            </div>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Empleados Activos
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={7} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <CircleCheck size={60} className="text-green-500" />
                </div>
            </div>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Empleados Inactivos
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
