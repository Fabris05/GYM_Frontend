"use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Button } from "primereact/button";
import { BanknoteArrowUp } from "lucide-react";
import CardPagos from "@/components/pagos/CardPagos";

export default function PagosPage() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-zinc-50 space-y-4 overflow-y-auto">
                <Navbar />
                <section className="flex flex-col w-full p-6">
                    <section className="flex justify-between items-center mb-4">
                        <span className="font-sans font-bold text-3xl">
                            Pagos
                        </span>
                        <div>
                            <Button
                                label="Agregar Pago"
                                icon={<BanknoteArrowUp />}
                                size="small"
                                className="gap-2 hover:scale-102 transition-transform"
                                severity="contrast"
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-3 gap-6 mb-4">
                        <CardPagos />
                    </section>
                </section>
            </main>
        </div>
    );
}
