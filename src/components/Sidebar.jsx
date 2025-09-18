import Link from "next/link";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { UserRound } from "lucide-react";
export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white">
            <div>
                <ul className="list-none p-1 m-0 overflow-hidden items-center">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:bg-gray-700 transition-duration-350 transition-colors w-full">
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Dashboard</span>
                            <Ripple />
                        </a>
                        <Link
                            href={"/client"}
                            className="p-ripple flex cursor-pointer p-3 border-round text-700 hover:bg-gray-700 transition-duration-350 transition-colors w-full"
                        >
                            <UserRound size={20} className="mr-2"/>
                            Clientes
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
