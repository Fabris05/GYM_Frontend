"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Dumbbell, StoreIcon } from "lucide-react";
import { Button } from "primereact/button";
import useInventario from "@/hooks/useInventario";
import FormMaquina from "@/components/maquinas/FormMaquina";
import { useMaquinaStore } from "@/store/useMaquinaStore";
import CardInfo from "@/components/maquinas/CardInfo";
import { useEffect } from "react";
import Card from "@/components/maquinas/Card";

export default function page() {
    const { maquinas, fetchMaquinas } = useMaquinaStore();
    const { mode, visible, handleCrear, handleCloseModal, onSubmit } = useInventario();

    useEffect( () => {
        fetchMaquinas();
    }, [fetchMaquinas]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Inventario
                        </span>
                        <div>
                            <Button
                                label="Añadir Material"
                                icon={<Dumbbell />}
                                size="small"
                                className="gap-2"
                                onClick={handleCrear}
                                severity="contrast"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6 mb-4">
                        <CardInfo maquinas={maquinas} />
                    </div>
                    <section className="bg-white p-4 rounded-md shadow-md border border-gray-300">
                        <Card maquina={maquinas} />
                    </section>
                    <FormMaquina visible={visible} handleCloseModal={handleCloseModal} mode={mode} onSubmit={onSubmit} />
                </section>
            </main>
        </div>
    );
}
