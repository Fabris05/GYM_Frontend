"use client";

import { Check, X } from "lucide-react";

const plans = [
    {
        name: "Básico",
        price: "70",
        description: "Perfecto para comenzar tu vida fitness",
        featured: false,
        features: [
            { text: "Acceso una sede", included: true },
            { text: "Horario: 6am - 10pm", included: true },
            { text: "Área de pesas y cardio", included: true },
            { text: "Vestuarios y duchas", included: true },
            { text: "Clases grupales de baile", included: false },
            { text: "Entrenador personal", included: false },
            { text: "Sorteo de accesorios e implementos", included: false },
        ],
    },
    {
        name: "Premium",
        price: "100",
        description: "La opción más popular para resultados serios",
        featured: true,
        features: [
            { text: "Acceso a 2 sedes a elección", included: true },
            { text: "Horario: 6am - 10pm", included: true },
            { text: "Área de pesas y cardio", included: true },
            { text: "Vestuarios y duchas", included: true },
            { text: "Clases grupales de baile", included: true },
            { text: "4 sesiones con entrenador", included: true },
            { text: "Sorteo de accesorios e implementos", included: false },
        ],
    },
    {
        name: "Elite",
        price: "150",
        description: "Experiencia completa de transformación",
        featured: false,
        features: [
            { text: "Acceso a todas las sedes", included: true },
            { text: "Acceso 24/7", included: true },
            { text: "Área de pesas y cardio", included: true },
            { text: "Vestuarios premium", included: true },
            { text: "Clases grupales ilimitadas", included: true },
            { text: "Entrenador personal ilimitado", included: true },
            { text: "Sorteo de accesorios e implementos", included: true },
        ],
    },
];

export function PlanesSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-white mb-4">
                    Nuestros <span className="text-yellow-500">Planes</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Planes diseñados para adaptarse a tus objetivos y estilo de
                    vida
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-3xl ${
                            plan.featured
                                ? "bg-gradient-to-br from-yellow-500 to-yellow-600 scale-105 lg:scale-110 shadow-2xl shadow-yellow-500/50"
                                : "bg-gray-900 border border-gray-800"
                        }`}
                    >
                        {plan.featured && (
                            <div className="absolute top-0 right-0 bg-black text-yellow-500 px-4 py-1 text-sm font-bold rounded-bl-lg">
                                MÁS POPULAR
                            </div>
                        )}

                        <div className="p-8 pb-0">
                            <h3
                                className={`text-2xl font-bold mb-2 ${
                                    plan.featured ? "text-black" : "text-white"
                                }`}
                            >
                                {plan.name}
                            </h3>
                            <p
                                className={`text-sm mb-6 ${
                                    plan.featured
                                        ? "text-black/70"
                                        : "text-gray-400"
                                }`}
                            >
                                {plan.description}
                            </p>
                            <div className="mb-6">
                                <span
                                    className={`text-5xl font-black ${
                                        plan.featured
                                            ? "text-black"
                                            : "text-yellow-500"
                                    }`}
                                >
                                    S/{plan.price}
                                </span>
                                <span
                                    className={`text-lg ${
                                        plan.featured
                                            ? "text-black/70"
                                            : "text-gray-400"
                                    }`}
                                >
                                    /mes
                                </span>
                            </div>
                        </div>

                        <div className="p-8 pt-4">
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start space-x-3"
                                    >
                                        {feature.included ? (
                                            <Check
                                                className={`w-5 h-5 flex-shrink-0 ${
                                                    plan.featured
                                                        ? "text-black"
                                                        : "text-yellow-500"
                                                }`}
                                            />
                                        ) : (
                                            <X
                                                className={`w-5 h-5 flex-shrink-0 ${
                                                    plan.featured
                                                        ? "text-black/30"
                                                        : "text-gray-600"
                                                }`}
                                            />
                                        )}
                                        <span
                                            className={`${
                                                feature.included
                                                    ? plan.featured
                                                        ? "text-black"
                                                        : "text-gray-300"
                                                    : plan.featured
                                                    ? "text-black/40"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
