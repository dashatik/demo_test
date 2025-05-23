import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
} from "recharts";

const data = [
  { time: "May 1, 00:00", latency: 72 },
  { time: "May 1, 12:00", latency: 68 },
  { time: "May 2, 06:00", latency: 82 },
  { time: "May 3, 00:00", latency: 115 },
  { time: "May 4, 18:00", latency: 98 },
  { time: "May 5, 09:00", latency: 245 },
  { time: "May 5, 15:00", latency: 196 },
  { time: "May 6, 12:00", latency: 105 },
  { time: "May 7, 03:00", latency: 87 },
];

export default function VpnStability() {
  return (
    <div className="h-[230px] card p-[16px] rounded-[8px] shadow bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-[#111827] mb-[6px]">VPN Tunnel Latency (Transtar EU)</h3>
        <p className="text-[22px] font-bold text-[#4B5563]">99.93% stable</p>
        <p className="text-xs text-[#6B7280]">
          1 latency spike auto-mitigated · SLA target: ≤ 150ms avg
        </p>
      </div>
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={data}>
          <XAxis dataKey="time" tick={{ fontSize: 9 }} />
          <YAxis domain={[0, 300]} hide />
          <Tooltip
            formatter={(value, _, props) =>
              props.payload.latency > 200
                ? [`Latency spike: ${value}ms ⚠️`, props.payload.time]
                : [`${value}ms`, props.payload.time]
            }
            contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
          />
          {/* SLA range */}
          <ReferenceArea y1={20} y2={150} fill="rgba(76,175,80,0.1)" strokeOpacity={0} />
          {/* Threshold line */}
          <ReferenceLine
            y={200}
            stroke="#DC2626"
            strokeDasharray="4 4"
            strokeWidth={1}
            label={{ value: "Alert Threshold", position: "right", fontSize: 10, fill: "#DC2626" }}
          />
          <Line
            type="monotone"
            dataKey="latency"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={{
              r: 3,
              stroke: "#4CAF50",
              strokeWidth: 1,
              fill: "#fff",
            }}
            activeDot={{
              r: 6,
              fill: "#DC2626",
              stroke: "#DC2626",
              strokeWidth: 2,
            }}
            animationDuration={900}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}