import { CircleCheck, FileClock, HandCoins } from "lucide-react";
import CountUp from "react-countup";

export default function CardPagos({ pagos = [] }) {
    let totalPagos = pagos.length;
    let PagosCompletos = pagos.filter( (pago) => pago.estado === "Pagado" ).length;
    let PagosPendientes = totalPagos - PagosCompletos;

    return (
        <>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Pagos Totales
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={totalPagos || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <HandCoins size={60} className="text-blue-500" />
                </div>
            </div>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Pagos Completos
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={PagosCompletos || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <CircleCheck size={60} className="text-green-500" />
                </div>
            </div>
            <div className="flex h-30 border border-gray-300 mt-4 rounded-lg shadow-md p-8 justify-between items-center bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-lg">
                        Pagos Pendientes
                    </h3>
                    <span className="font-sans text-gray-900 text-4xl">
                        <CountUp end={PagosPendientes || 0} duration={2} />
                    </span>
                </div>
                <div className="flex items-center">
                    <FileClock size={60} className="text-red-500" />
                </div>
            </div>
        </>
    );
}
