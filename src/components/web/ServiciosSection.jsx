"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicios } from "@/constants/servicios";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export function ServiciosSection() {
    return (
        <section
            id="servicios"
            className="py-24 bg-slate-50 relative overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        NUESTROS{" "}
                        <span className="text-yellow-500">SERVICIOS</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        Hemos cuidado cada detalle para ofrecerte un ecosistema
                        de bienestar integral.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {servicios.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 border border-gray-100"
                            >
                                <div className="mb-6 inline-block">
                                    <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-yellow-600 group-hover:text-black transition-colors duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sm font-bold text-yellow-500 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    DESCUBRE MÁS{" "}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </div>

                                <div className="absolute bottom-0 left-8 right-8 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
