"use client";
import Navbar from "@/components/web//Navbar";
import { ArrowRight, Trophy, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="inicio" className="min-h-screen pt-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-7xl font-black text-black mb-6 leading-tight">
              Transforma Tu Cuerpo, Eleva Tu Mente
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-8 max-w-2xl">
              Únete a PointFit y descubre el gimnasio que cambiará tu vida. Entrenamientos personalizados, equipamiento de última generación.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white border-2 border-black text-black hover:bg-black hover:text-yellow-500 font-bold text-lg px-8 rounded-full flex items-center py-2">
                Ver Planes
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-rows-3 gap-6">
            <div className="bg-gray-900 rounded-3xl p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
              <div className="bg-yellow-500 rounded-2xl p-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">15K+</div>
                <div className="text-gray-400">Miembros Activos</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
              <div className="bg-yellow-500 rounded-2xl p-4">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">98%</div>
                <div className="text-gray-400">Satisfacción</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
              <div className="bg-yellow-500 rounded-2xl p-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">6 Sedes</div>
                <div className="text-gray-400">Acceso Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>
        
   
  );
}
