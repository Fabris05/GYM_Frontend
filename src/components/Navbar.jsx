import Link from "next/link";
import { Button } from "primereact/button";
export default function Navbar() {
    return (
        <header className="w-full h-[8ch] px-6 bg-zinc-50 shadow-md flex items-center justify-between">
            <div className="w-full flex justify-end">
                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center gap-1">
                        <i className="pi pi-user"></i>
                        <span className="font-sans">Fabricio Salazar</span>
                    </div>
                    <Link href={"/"} className="flex align-items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                        
                        <span className="font-sans">Salir</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
