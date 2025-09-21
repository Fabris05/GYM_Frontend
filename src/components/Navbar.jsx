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
                    <Button icon="pi pi-sign-out" label="Salir" size="small" severity="danger" />
                </div>
            </div>
        </header>
    );
}
