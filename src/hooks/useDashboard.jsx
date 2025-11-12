import { useState } from "react";

export default function useDashboard() {

    const agruparPagosPorMes = (pagos, year) => {
        const meses = Array.from({ length: 12 }, (_, i) => ({
            mes: new Date(0, i).toLocaleString("es-ES", { month: "short" }),
            total: 0,
        }));

        pagos.forEach((pago) => {
            const fecha = new Date(pago.fecha);
            if (fecha.getFullYear() === year) {
                meses[fecha.getMonth()].total += pago.monto;
            }
        });

        return meses;
    };

    return {
        agruparPagosPorMes,
    };
}
