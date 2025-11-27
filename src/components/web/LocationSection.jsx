"use client";

import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { sedes } from "@/constants/sedesWeb";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 12 },
    },
};

export function LocationsSection() {
    return (

        <section className="py-24 bg-white relative overflow-hidden" id="sedes">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-100/40 rounded-full blur-3xl pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        NUESTRAS <span className="text-yellow-500">SEDES</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Estratégicamente ubicadas para estar cerca de ti.
                        Equipamiento premium en cada rincón de la ciudad.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                >
                    {sedes.map((sede, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow:
                                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                            }}
                            className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:border-yellow-400 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-8">

                                        <h3 className="text-3xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors">
                                            {sede.name}
                                        </h3>

                                        <div className="p-3 bg-gray-100 rounded-full group-hover:bg-yellow-500 transition-all duration-300">
                                            <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-white" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">

                                        <div className="flex items-start space-x-4">

                                            <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20 transition-colors">
                                                <MapPin className="w-6 h-6 text-yellow-500" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
                                                    Dirección
                                                </p>

                                                <p className="text-gray-900 font-medium leading-snug">
                                                    {sede.address}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20 transition-colors">
                                                <Clock className="w-6 h-6 text-yellow-500" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
                                                    Horario
                                                </p>
                                                <p className="text-gray-900 font-medium leading-snug">
                                                    {sede.hours}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20 transition-colors">
                                                <Phone className="w-6 h-6 text-yellow-500" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
                                                    Contacto
                                                </p>
                                                <p className="text-gray-900 font-medium leading-snug">
                                                    {sede.phone}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-gray-100">
                                    <Link href={sede.maps} target="_blank" className="text-sm font-bold text-gray-600 group-hover:text-yellow-600 flex items-center gap-2 transition-colors uppercase tracking-wide">
                                        Ver en mapa{" "}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
