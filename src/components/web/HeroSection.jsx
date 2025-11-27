import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Trophy, Users, Zap } from "lucide-react";

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            id="inicio"
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Gym Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-500 text-yellow-400 text-sm font-bold tracking-wide mb-6 backdrop-blur-sm"
                    >
                        POINTFIT GYM
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6"
                    >
                        TRANSFORMA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                            TU POTENCIAL
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Más que un gimnasio, somos tu punto de partida hacia una
                        nueva vida. Equipamiento de élite y entrenadores
                        expertos enfocados en ti.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="#planes"
                            className="group relative px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10">Ver Planes</span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-yellow-400/50" />
                        </Link>

                        <Link
                            href="#contacto"
                            className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all hover:border-white"
                        >
                            Clase de Prueba
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-16 md:mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-8"
                >
                    <div className="flex flex-col items-center">
                        <Users className="w-6 h-6 text-yellow-500 mb-2" />
                        <span className="text-3xl font-bold text-white">
                            5K+
                        </span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">
                            Miembros
                        </span>
                    </div>
                    <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
                        <Trophy className="w-6 h-6 text-yellow-500 mb-2" />
                        <span className="text-3xl font-bold text-white">
                            98%
                        </span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">
                            Resultados
                        </span>
                    </div>
                    <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
                        <Zap className="w-6 h-6 text-yellow-500 mb-2" />
                        <span className="text-3xl font-bold text-white">5</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">
                            Sedes
                        </span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer z-20"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Link href="#planes" aria-label="Scroll down">
                    <ChevronDown className="w-10 h-10 hover:text-yellow-500 transition-colors" />
                </Link>
            </motion.div>
        </section>
    );
}
