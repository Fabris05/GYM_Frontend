"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#inicio", label: "Inicio" },
        { href: "#sedes", label: "Sedes" },
        { href: "#planes", label: "Planes" },
        { href: "#servicios", label: "Servicios" },
        { href: "#nosotros", label: "Nosotros" },
        { href: "#contacto", label: "Contacto" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-2">
                        <Dumbbell className="w-8 h-8 text-yellow-500" />
                        <span className="text-2xl font-bold text-white">
                            Point<span className="text-yellow-500">Fit</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/admin/clientes"
                            className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold rounded-md px-4 py-2"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-yellow-500 transition-colors"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black border-t border-yellow-500/20">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md px-4 py-2"
                            href="/admin/clientes"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
