import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { date: "May 1", count: 242 },
  { date: "May 2", count: 216 },
  { date: "May 3", count: 171 },
  { date: "May 4", count: 190 },
  { date: "May 5", count: 248, highlight: true },
  { date: "May 6", count: 169 },
  { date: "May 7", count: 126 },
];

export default function AuditEvents() {
  return (
    <div className="h-[230px] card p-[16px] rounded-[8px] shadow bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-[#111827] mb-[6px]">Audit Log Events</h3>
        <p className="text-[22px] font-bold text-[#4B5563]">1,362</p>
        <p className="text-xs text-[#6B7280]">Total: 1,362 events · Logs signed SHA256</p>
      </div>
      <ResponsiveContainer width="100%" height={60}>
        <BarChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis hide domain={[0, 500]} />
          <Tooltip
            formatter={(value, _, props) =>
              props.payload.date === "May 5"
                ? ["248 events · 1 policy fail · 1 audit export", "May 5"]
                : [`${value} events`, props.payload.date]
            }
            contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
          />
          <Bar
            dataKey="count"
            radius={[4, 4, 0, 0]}
            animationDuration={700}
            fill="#111827"
          >
            {data.map((entry, index) => (
              <Cell
                key={`bar-${index}`}
                fill={entry.highlight ? "#DC2626" : "#111827"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}