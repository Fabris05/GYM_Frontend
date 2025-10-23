import { Dumbbell } from "lucide-react";
import { Button } from "primereact/button";
import React from "react";

export default function Card({ sede, handleEditar }) {
    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            {sede.map((s) => (
                <div
                    className="flex flex-col rounded-md shadow-md gap-4 border border-gray-300 hover:shadow-lg transition-shadow bg-white"
                    key={s.sedeId}
                >
                    <div className="justify-center items-center py-4 bg-zinc-100 rounded-t-md flex">
                        <Dumbbell size={80} />
                    </div>

                    <h2 className="font-sans justify-center items-center text-2xl font-bold flex">
                        Sede - {s.nombre}
                    </h2>

                    <div className="px-4 py-2 gap-4 flex flex-col">
                        <p className="text-gray-700">
                            <span className="font-semibold">Dirección:</span>{" "}
                            {s.direccion}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold bg-green-500 text-white px-2 py-1 rounded-md">
                                Operativo
                            </span>
                        </p>
                    </div>

                    <div className="px-4 mb-4 flex justify-end gap-2">
                        <Button
                            label="Ver más"
                            size="small"
                            severity="secondary"
                        ></Button>
                        <Button
                            label="Editar"
                            size="small"
                            severity="info"
                            onClick={() => handleEditar(s)}
                        ></Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
