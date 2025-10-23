"use client";

import {
    Dumbbell,
    Users,
    Heart,
    Smartphone,
    Droplet,
    Utensils,
} from "lucide-react";

const services = [
    {
        icon: Dumbbell,
        title: "Entrenamiento Funcional",
        description:
            "Programas diseñados para mejorar tu fuerza, resistencia y movilidad en movimientos del día a día.",
    },
    {
        icon: Users,
        title: "Clases Grupales",
        description:
            "Yoga, spinning, zumba, crossfit y más. Motívate entrenando en comunidad.",
    },
    {
        icon: Heart,
        title: "Cardio de Élite",
        description:
            "Equipamiento cardiovascular de última generación para optimizar tu entrenamiento aeróbico.",
    },
    {
        icon: Smartphone,
        title: "App PointFit",
        description:
            "Seguimiento de entrenamientos, reserva de clases y planes personalizados en tu móvil.",
    },
    {
        icon: Droplet,
        title: "Spa & Sauna",
        description:
            "Relájate y recupera tus músculos en nuestras instalaciones de spa y sauna.",
    },
    {
        icon: Utensils,
        title: "Asesoría Nutricional",
        description:
            "Nutricionistas certificados te ayudan a diseñar tu plan alimenticio ideal.",
    },
];

export function ServiciosSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-white mb-4">
                    Nuestros <span className="text-yellow-500">Servicios</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Todo lo que necesitas para alcanzar tus objetivos fitness
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800 transition-all duration-300 group hover:scale-105"
                        >
                            <div className="bg-yellow-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Icon className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
