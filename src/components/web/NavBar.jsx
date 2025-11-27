"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Dumbbell, ChevronRight } from "lucide-react";
import { Button } from "primereact/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ handleOpenLogin }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { href: "#inicio", label: "Inicio" },
        { href: "#sedes", label: "Sedes" },
        { href: "#planes", label: "Planes" },
        { href: "#servicios", label: "Servicios" },
        { href: "#nosotros", label: "Nosotros" },
        { href: "#contacto", label: "Contacto" },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 right-0 z-50 transition-all duration-300 border-b ${
                scrolled
                    ? "top-0 bg-black/80 backdrop-blur-md py-3 border-white/10 shadow-lg "
                    : "top-2 bg-transparent py-4 border-transparent"
            }`}
        >
            <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
    
                    <Link
                        href="/"
                        className="flex items-center space-x-2 group"
                    >
                        <div className="bg-yellow-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                            <Dumbbell className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-2xl font-black text-white tracking-tight">
                            POINT<span className="text-yellow-500">FIT</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-sm uppercase font-bold text-gray-300 hover:text-white transition-colors duration-200 group py-2"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        <Button
                            className="p-button-outlined"
                            style={{
                                backgroundColor: "#eab308",
                                color: "#000",
                                border: "none",
                                fontWeight: "800",
                                padding: "0.6rem 1.5rem",
                                borderRadius: "9999px",
                                transition: "all 0.2s",
                            }}
                           
                            pt={{
                                root: {
                                    className:
                                        "hover:bg-yellow-400 hover:scale-105 transform transition-all active:scale-95 shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_20px_rgba(234,179,8,0.6)]",
                                },
                            }}
                            onClick={handleOpenLogin}
                        >
                            INICIAR SESIÓN
                        </Button>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-yellow-500 transition-colors p-2"
                    >
                        {isOpen ? (
                            <X className="w-8 h-8" />
                        ) : (
                            <Menu className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU (Con AnimatePresence para animación de salida) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center justify-between text-lg font-medium text-gray-300 hover:text-yellow-500 hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <Button
                                    label="INICIAR SESIÓN"
                                    className="w-full font-black text-black"
                                    style={{
                                        backgroundColor: "#eab308",
                                        border: "none",
                                        padding: "1rem",
                                        borderRadius: "12px",
                                    }}
                                    onClick={() => {
                                        handleOpenLogin();
                                        setIsOpen(false);
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
