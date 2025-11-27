"use client";

import {
    Dumbbell,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Mail,
    ArrowRight,
    Send,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/PointFit.fitnessclub/?locale=es_LA" },
        { icon: Instagram, href: "https://www.instagram.com/pointfit.fitnessclub/?hl=es" },
        { icon: Twitter, href: "#" },
        { icon: Youtube, href: "#" },
    ];

    const quickLinks = [
        { name: "Inicio", href: "#inicio" },
        { name: "Sedes", href: "#sedes" },
        { name: "Planes", href: "#planes" },
        { name: "Servicios", href: "#servicios" },
    ];

    const infoLinks = [
        { name: "Nosotros", href: "#nosotros" },
        { name: "Contacto", href: "#contacto" },
        { name: "Términos y Condiciones", href: "#" },
        { name: "Política de Privacidad", href: "#" },
    ];

    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-yellow-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-4 space-y-6">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group w-fit"
                        >
                            <div className="bg-yellow-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                                <Dumbbell className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-3xl font-black text-white tracking-tighter">
                                POINT
                                <span className="text-yellow-500">FIT</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Más que un gimnasio, somos una comunidad
                            comprometida con tu mejor versión. Entrena
                            diferente, vive mejor.
                        </p>

                        <div className="flex space-x-4 pt-2">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            Explorar
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-gray-400 hover:text-yellow-500 transition-colors"
                                    >
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-yellow-500" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold text-white mb-6">
                            Ayuda
                        </h4>
                        <ul className="space-y-4">
                            {infoLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-yellow-500 transition-colors text-sm hover:underline decoration-yellow-500/50 underline-offset-4"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} PointFit Gym. Todos
                        los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
