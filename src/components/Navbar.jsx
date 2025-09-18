import { Button } from "primereact/button";
export default function Navbar() {
    return (
        <header className="w-full h-20 bg-gray-900 text-white flex items-center justify-between px-4">
            <div className="flex justify-between w-full items-center">
                <div>
                    <h1 className="text-3xl font-bold">PointFit GYM</h1>
                </div>
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
