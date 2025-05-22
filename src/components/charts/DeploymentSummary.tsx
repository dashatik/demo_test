import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "May 1", passed: 0, blocked: 0 },
  { date: "May 2", passed: 0, blocked: 0 },
  { date: "May 3", passed: 1, blocked: 0 },
  { date: "May 4", passed: 2, blocked: 0 },
  { date: "May 5", passed: 2, blocked: 1 },
  { date: "May 6", passed: 1, blocked: 0 },
  { date: "May 7", passed: 1, blocked: 0 },
];

export default function DeploymentSummary() {
  return (
    <div className="h-[230px] card p-[16px] rounded-[8px] shadow bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-[#111827] mb-[6px]">Deployment Summary</h3>
        <p className="text-[22px] font-bold text-[#4B5563]">6 passed, 1 blocked</p>
        <p className="text-xs text-[#6B7280]">Last 7 days · DORA policies enforced</p>
      </div>
      <ResponsiveContainer width="100%" height={60}>
        <BarChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis hide domain={[0, 5]} />
          <Tooltip
            formatter={(value, name) => [`${value}`, name === "passed" ? "Passed" : "Blocked"]}
            contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
          />
          <Bar
            dataKey="blocked"
            stackId="a"
            fill="#DC2626"
            radius={[4, 4, 0, 0]}
            animationDuration={800}
          />
          <Bar
            dataKey="passed"
            stackId="a"
            fill="#4CAF50"
            radius={[4, 4, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}