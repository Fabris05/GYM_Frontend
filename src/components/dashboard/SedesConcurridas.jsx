import { Pie, ResponsivePie } from "@nivo/pie";

export default function SedesConcurridas({ data }) {
    const chartData = data.map((s) => ({
        id: s.nombre,
        label: s.nombre,
        value: s.totalClientes,
    }));

    return (
        <div style={{ height: 350 }}>
            <ResponsivePie
                data={chartData}
                margin={{ top: 30, right: 100, bottom: 60, left: 100 }}
                innerRadius={0.5}
                padAngle={1.5}
                cornerRadius={4}
                colors={{ scheme: "set2" }}
                borderWidth={1}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.3]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                motionConfig="wobbly"
                transitionMode="middleAngle"
                activeOuterRadiusOffset={8}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
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
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: 80,
                        translateY: 0,
                        itemsSpacing: 10,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 16,
                        symbolShape: "square",
                        effects: [
                            {
                                on: "hover",
                                style: { itemOpacity: 1 },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}