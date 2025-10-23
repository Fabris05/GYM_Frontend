"use client";

import { useSedeStore } from "@/store/useSedeStore";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { Button } from "primereact/button";
import { StoreIcon } from "lucide-react";
import { ProgressSpinner } from "primereact/progressspinner";
import Card from "@/components/sedes/Card";
import useSede from "@/hooks/useSede";
import FormSede from "@/components/sedes/FormSede";
import CardInfo from "@/components/sedes/CardInfo";

export default function SedesPage() {
    const { fetchSedes, sedes, loading } = useSedeStore();
    const {
        visible,
        handleCrear,
        handleEditar,
        handleCloseModal,
        mode,
        selectedSede,
        handleSubmit,
    } = useSede();

    useEffect(() => {
        fetchSedes();
    }, [fetchSedes]);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Sedes
                        </span>
                        <div>
                            <Button
                                label="Añadir Sede"
                                icon={<StoreIcon />}
                                size="small"
                                className="gap-2"
                                onClick={handleCrear}
                                severity="contrast"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-4">
                        <CardInfo sede={sedes} />
                    </div>
                    <section className="w-5/5 bg-white p-4 border border-gray-300  rounded-lg shadow-md justify-center items-center">
                        {loading ? (
                            <div className="flex justify-center items-center w-full h-full">
                                <ProgressSpinner />
                            </div>
                        ) : (
                            <Card sede={sedes} handleEditar={handleEditar} />
                        )}
                    </section>
                    <FormSede
                        visible={visible}
                        handleCloseModal={handleCloseModal}
                        mode={mode}
                        selectedSede={selectedSede}
                        handleSubmit={handleSubmit}
                    />
                </section>
            </main>
        </div>
    );
}
