import { CircleCheck, EyeOff, Hammer, HeartCrack, StoreIcon } from "lucide-react";
import React from "react";

export default function CardInfo({ maquinas }) {

    let totalMaquinas = maquinas.length;
    let operativas = maquinas.filter(m => m.estado === "Operativa").length;
    let mantenimiento = maquinas.filter(m => m.estado === "Mantenimiento").length;
    let fueraDeServicio = maquinas.filter(m => m.estado === "Dañada").length;

    return (
        <>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Máquinas
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        {totalMaquinas}
                    </span>
                </div>
                <div className="flex items-center">
                    <StoreIcon size={60} className="text-blue-500" />
                </div>
            </div>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Operativas
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        {operativas}
                    </span>
                </div>
                <div className="flex items-center">
                    <CircleCheck size={60} className="text-green-500" />
                </div>
            </div>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Mantenimiento
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        {mantenimiento}
                    </span>
                </div>
                <div className="flex items-center">
                    <Hammer size={60} className="text-red-500" />
                </div>
            </div>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Dañadas
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        {fueraDeServicio}
                    </span>
                </div>
                <div className="flex items-center">
                    <HeartCrack size={60} className="text-gray-500" />
                </div>
            </div>
        </>
    );
}
