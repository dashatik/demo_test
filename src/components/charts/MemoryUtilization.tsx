import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "May 1", value: 58 },
  { date: "May 2", value: 64 },
  { date: "May 3", value: 66 },
  { date: "May 4", value: 69 },
  { date: "May 5", value: 71 },
  { date: "May 6", value: 65 },
  { date: "May 7", value: 68 },
];

export default function MemoryUtilization() {
  return (
    <div className="h-[200px] card p-[16px] rounded-[8px] shadow bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-[#111827] mb-[6px]">Memory Utilization</h3>
        <p className="text-[22px] font-bold text-[#4B5563]">68%</p>
        <p className="text-xs text-[#6B7280]">Kubernetes Node Pool Utilization · Normal Range</p>
      </div>
      <ResponsiveContainer width="100%" height={50}>
        <AreaChart data={data}>
          <XAxis dataKey="date" hide />
          <YAxis domain={[0, 100]} hide />
          <Tooltip
            contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
            formatter={(value) => [`${value}%`, ""]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4CAF50"
            strokeWidth={2}
            fill="rgba(76, 175, 80, 0.2)"
            animationDuration={800}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}