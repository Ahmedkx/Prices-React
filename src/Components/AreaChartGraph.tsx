import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "الجمعة",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "السبت",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "الأحد",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "الاثنين",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "الثلاثاء",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "الأربعاء",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "الخميس",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const CustomTooltip = () => {
    return (
        <div
            style={{
                color: "white",
                background: "#637EB4",
                margin: "5",
                padding: "5px",
                borderRadius: "8px 8px 8px 0px",
            }}
        >
            943 جنيه
        </div>
    );
};

export default function AreaChartGraph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#0561FC"
                            stopOpacity={0.17}
                        />
                        <stop
                            offset="95%"
                            stopColor="#0561FC"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis tickSize={15} tickLine={false} />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                        stroke: "#0561FC",
                        strokeWidth: 2,
                        strokeDasharray: 5,
                    }}
                />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#9FC1FB"
                    strokeWidth="3"
                    fill="url(#colorUv)"
                    dot={true}
                    activeDot={{ stroke: "#0561FC", strokeWidth: 6, r: 8 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
