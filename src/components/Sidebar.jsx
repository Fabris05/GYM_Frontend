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
import { useAuthStore } from "@/store/useAuthStore";

export default function Sidebar() {
    const { isOpen, toggle } = useSidebarStore();
    const { userLogged } = useAuthStore();

    const Menus = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard />,
            roles: ["ADMIN"]
        },
        {
            title: "Clientes",
            icon: <UserRound />,
            roles: ["ADMIN", "RECEPCIONISTA"]
        },
        {
            title: "Sedes",
            icon: <StoreIcon />,
            roles: ["ADMIN"]
        },
        {
            title: "Inventario",
            icon: <Package />,
            roles: ["ADMIN", "RECEPCIONISTA"]
        },
        {
            title: "Proveedores",
            icon: <Truck />,
            roles: ["ADMIN"]
        },
        {
            title: "Empleados",
            icon: <ShieldUser />,
            roles: ["ADMIN"]
        },
        {
            title: "Usuarios",
            icon: <UserCog />,
            roles: ["ADMIN"]
        },
        {
            title: "Pagos",
            icon: <BadgeDollarSign />,
            roles: ["ADMIN", "RECEPCIONISTA"]
        },
    ];

    return (
        <div
            className={`${
                isOpen ? "w-60 p-5 " : "w-20 p-4"
            } bg-zinc-900 h-screen pt-8 relative duration-500 ease-in-out flex-col justify-center`}
        >

            <div
                className={`absolute cursor-pointer -right-4 top-16 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-100 border-2 rounded-full text-xl flex items-center justify-center ${
                    !isOpen && "rotate-360 top-20"
                } transition-transform transition-all ease-in-out duration-900 `}
                onClick={() => toggle()}
            >
                {isOpen ? <PanelLeftClose /> : <PanelRightClose />}
            </div>

            <div className="flex gap-x-4 items-center">
                <img
                    className={`w-6 h-6 object-contain object-center cursor-pointer ease-in-out duration-900 ${
                        !isOpen && "rotate-360 duration-900 ease-in-out"
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

            <div className=" flex flex-col pt-6 space-y-0.5 ">
                {Menus
                .filter( item => item.roles.includes(userLogged?.rol))
                .map((item, index) => (
                    <Link
                        key={index}
                        href={`/admin/${item.title.toLowerCase()}`}
                        className={`flex gap-2 items-center rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-600/50 transition-all ease-in-out duration-300`}
                    >
                        <span>{item.icon}</span>
                        <span
                            className={`font-sans duration-150 ease-in-out ${
                                !isOpen && "scale-0"
                            }`}
                        >
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
