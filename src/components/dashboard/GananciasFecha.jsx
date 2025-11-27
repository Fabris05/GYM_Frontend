import { useState } from "react";
import useDashboard from "../../hooks/useDashboard";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function GananciasFecha({ pagos }) {
    const [anio, setAnio] = useState(2025);
    const { agruparPagosPorMes } = useDashboard();

    const data = agruparPagosPorMes(pagos, anio);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <span className="font-sans font-bold text-lg">
                    Ganancias por mes
                </span>
                <select
                    className="p-2 border rounded-md justify-end self-end"
                    value={anio}
                    onChange={(e) => setAnio(Number(e.target.value))}
                >
                    {[2023, 2024, 2025].map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip
                        formatter={(value) => [`S/. ${value}`, "Ganancia"]}
                        labelFormatter={(label) => `Mes: ${label}`}
                        contentStyle={{
                            backgroundColor: "#111827",
                            borderRadius: "8px",
                            color: "#fff",
                            border: "none",
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#2eb872"
                        fill="#82ca9d"
                        fillOpacity={0.4}
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}