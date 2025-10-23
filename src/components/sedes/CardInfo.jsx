import { CircleCheck, EyeOff, StoreIcon } from "lucide-react";
import React from "react";

export default function CardInfo({ sede }) {

    let totalSedes = sede.length;

    return (
        <>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Sedes Totales
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        {totalSedes}
                    </span>
                </div>
                <div className="flex items-center">
                    <StoreIcon size={60} className="text-blue-500" />
                </div>
            </div>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Sedes Activas
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        {totalSedes}
                    </span>
                </div>
                <div className="flex items-center">
                    <CircleCheck size={60} className="text-green-500" />
                </div>
            </div>
            <div className="flex border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Sedes Inactivas
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        {0}
                    </span>
                </div>
                <div className="flex items-center">
                    <EyeOff size={60} className="text-red-500" />
                </div>
            </div>
        </>
    );
}
