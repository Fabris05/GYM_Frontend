"use client";

import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">
                Point<span className="text-yellow-500">Fit</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando vidas a través del fitness desde 2011.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#sedes" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Sedes
                </Link>
              </li>
              <li>
                <Link href="#planes" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PointFit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
