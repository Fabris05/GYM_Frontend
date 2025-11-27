import { ResponsiveBar } from "@nivo/bar";

export default function GananciasSede({ data }) {
    const chartData = data.map((s) => ({
        sede: s.nombre,
        ganancias: s.ganancias,
    }));

    return (
        <div style={{ height: 350 }}>
            <ResponsiveBar
                data={chartData}
                keys={["ganancias"]}
                indexBy="sede"
                colorBy="indexValue"
                colors={{ scheme: "set2" }}
                margin={{ top: 30, right: 130, bottom: 60, left: 70 }}
                padding={0.3}
                label={(d) => `S/ ${d.value}`}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="#fff"
                labelPosition="middle"
                axisBottom={{
                    tickRotation: 0,
                    legend: "Sedes",
                    legendPosition: "middle",
                    legendOffset: 40,
                }}
                axisLeft={{
                    legend: "Ganancias (S/.)",
                    legendOffset: -50,
                    legendPosition: "middle",
                }}
                theme={{
                    tooltip: {
                        container: {
                            background: "#111827",
                            color: "#fff",
                            fontSize: 12,
                            borderRadius: "8px",
                            padding: "8px",
                        },
                    },
                }}
                legends={[
                    {
                        dataFrom: "indexes",
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: 80,
                        translateY: 0,
                        itemsSpacing: 10,
                        itemWidth: 60,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 16,
                        symbolShape: "circle",
                        effects: [{ on: "hover", style: { itemOpacity: 1 } }],
                    },
                ]}
                animate={true}
                motionConfig="wobbly"
            />
        </div>
    );
}
