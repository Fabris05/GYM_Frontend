"use client";

import { Check, X, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { planes } from "@/constants/planes";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
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

export function PlanesSection() {
    return (
        <section id="planes" className="py-24 bg-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        ELIGE TU <span className="text-yellow-500">POTENCIAL</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        Sin contratos forzosos. Cancela cuando quieras. 
                        Invierte en la mejor versión de ti mismo.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                >
                    {planes.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}

                            className={`relative rounded-[2rem] p-8 border transition-all duration-300 flex flex-col h-full ${
                                plan.featured
                                    ? "bg-black border-black shadow-2xl scale-100 lg:scale-110 z-10"
                                    : "bg-white border-gray-200 shadow-lg hover:border-yellow-400 hover:shadow-xl"
                            }`}
                        >

                            {plan.featured && (
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-lg">
                                        <Crown className="w-4 h-4" /> Más Popular
                                    </div>
                                </div>
                            )}

                            <div className="mb-8 text-center">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-gray-900"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm mb-6 ${plan.featured ? "text-gray-400" : "text-gray-500"}`}>
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline justify-center">
                                    <span className={`text-sm font-semibold mr-1 ${plan.featured ? "text-gray-400" : "text-gray-500"}`}>S/</span>
                                    <span className={`text-6xl font-black tracking-tight ${plan.featured ? "text-yellow-500" : "text-gray-900"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm font-medium ml-1 ${plan.featured ? "text-gray-400" : "text-gray-500"}`}>/mes</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow ">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 items-center">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                                            feature.included 
                                                ? (plan.featured ? "bg-yellow-500 text-black" : "bg-green-100 text-green-600")
                                                : "bg-gray-100 text-gray-400"
                                        }`}>
                                            {feature.included ? <Check className="w-3 h-3" strokeWidth={3} /> : <X className="w-3 h-3" />}
                                        </div>
                                        <span className={`text-sm leading-tight ${
                                            feature.included 
                                                ? (plan.featured ? "text-gray-200" : "text-gray-700 font-medium")
                                                : "text-gray-400 line-through decoration-gray-300"
                                        }`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}