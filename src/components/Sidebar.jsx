import Link from "next/link";
import {
    BadgeDollarSign,
    LayoutDashboard,
    Package,
    PanelLeftClose,
    PanelRightClose,
    ShieldUser,
    StoreIcon,
    Truck,
    UserCog,
    UserRound,
} from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";
export default function Sidebar() {
    const { isOpen, toggle } = useSidebarStore();

    const Menus = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard />,
        },
        {
            title: "Clientes",
            icon: <UserRound />,
        },
        {
            title: "Sedes",
            icon: <StoreIcon />,
        },
        {
            title: "Inventario",
            icon: <Package />,
        },
        {
            title: "Proveedores",
            icon: <Truck />,
        },
        {
            title: "Empleados",
            icon: <ShieldUser />,
        },
        {
            title: "Usuarios",
            icon: <UserCog />,
        },
        {
            title: "Pagos",
            icon: <BadgeDollarSign />,
        },
    ];

    return (
        <div
            className={`${
                isOpen ? "w-72 p-5 " : "w-20 p-4"
            } bg-zinc-900 h-screen pt-8 relative duration-300 ease-in-out`}
        >
            {/* Toggle Button */}
            <div
                className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-100 border-2 rounded-full text-xl flex items-center justify-center ${
                    !isOpen && "rotate-360"
                } transition-transform transition-all ease-in-out duration-300 `}
                onClick={() => toggle()}
            >
                {isOpen ? <PanelLeftClose /> : <PanelRightClose />}
            </div>

            {/* Logo */}
            <div className="flex gap-x-4 items-center">
                <img
                    className={`w-6 h-6 object-contain object-center cursor-pointer ease-in-out duration-3 ${
                        !isOpen && "rotate-[360deg]"
                    }`}
                    src="/vercel.svg"
                    alt="Logo"
                ></img>
                <h1
                    className={`text-zinc-50 origin-left font-semibold text-xl duration-150 ease-in-out ${
                        !isOpen && "scale-0"
                    }`}
                >
                    PointFit GYM
                </h1>
            </div>

            {/* Menu Items */}
            <div className=" flex flex-col pt-6 space-y-0.5 ">
                {Menus.map((item, index) => (
                    <Link
                        key={index}
                        href={`/admin/${item.title.toLowerCase()}`}
                        className={`flex gap-2 items-center rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-600/50 transition-all ease-in-out duration-300`}
                    >
                        <span>{item.icon}</span>
                        <span className={`font-sans duration-150 ease-in-out ${!isOpen && "scale-0"}`}>{item.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
