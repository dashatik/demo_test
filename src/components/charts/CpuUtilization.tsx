import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "May 1", value: 38 },
  { date: "May 2", value: 42 },
  { date: "May 3", value: 51 },
  { date: "May 4", value: 44 },
  { date: "May 5", value: 61 },
  { date: "May 6", value: 49 },
  { date: "May 7", value: 41 },
];

export default function CpuUtilization() {
  return (
    <div className="h-[200px] card p-[16px] rounded-[8px] shadow bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-[#111827] mb-[6px]">CPU Utilization</h3>
        <p className="text-[22px] font-bold text-[#4B5563]">47.7%</p>
        <p className="text-xs text-[#6B7280]">Last 7-day avg · SLA ≤ 75%</p>
      </div>
      <ResponsiveContainer width="100%" height={50}>
        <LineChart data={data}>
          <XAxis dataKey="date" hide />
          <YAxis domain={[0, 100]} hide />
          <Tooltip
            contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
            formatter={(value) => [`${value}% avg CPU load`, ""]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}