import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Gauge } from "../components/Gauge";
import Topbar from "../components/Topbar";

const dataLatency = [
  { time: "May 1, 00:00", value: 105 },
  { time: "May 1, 12:00", value: 122 },
  { time: "May 2, 00:00", value: 98 },
  { time: "May 2, 12:00", value: 130 },
  { time: "May 3, 00:00", value: 115 },
  { time: "May 3, 12:00", value: 140 },
  { time: "May 4, 00:00", value: 104 },
  { time: "May 5, 12:00", value: 120 },
  { time: "May 6, 00:00", value: 116 },
  { time: "May 7, 12:00", value: 120 },
];

export default function Overview() {
  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      {/* Top Navigation Bar */}
      <Topbar page="Overview"/>
      <div className="bg-red-500 text-white p-4">Test block</div>

      {/* KPI Card Row */}
      <div className="grid grid-cols-3 gap-[20px]">
        {/* Compliance Readiness Card */}
        <div className="card">
    <h2 className="text-[16px] font-semibold">Compliance Readiness</h2>
    <p className="text-[14px] text-[var(--color-text-secondary)] mt-[6px]">
      Coverage: DORA, GDPR, eIDAS
    </p>
    <div className="w-full h-[10px] bg-[#EEE] rounded-full mt-[12px]">
      <div className="h-full bg-[var(--color-success)] rounded-full" style={{ width: "92%" }}></div>
    </div>
    <div className="text-right mt-[6px] text-[12px] text-[var(--color-text-secondary)]">
      92% Ready
    </div>
    <p className="text-[12px] text-[var(--color-success)] underline cursor-pointer mt-[8px]">
      View Full Report
    </p>
        </div>

        {/* Audit Status Card */}
        <div className="card flex flex-col justify-between">
          <div>
            <h2 className="card-title">Next Scheduled Audit</h2>
            <p className="text-[18px] font-bold mt-[6px]">May 30, 2025</p>
            <p className="text-[12px] italic text-[var(--color-text-secondary)]">in 22 days</p>
          </div>
          <button className="btn btn-primary self-start mt-3">Download Audit Pack</button>
        </div>

        {/* Incidents Card */}
        <div className="card">
          <h2 className="card-title">This Month's Incidents</h2>
          <p className="text-[14px] font-semibold text-[var(--color-error)] mt-[6px]">2 Policy Violations</p>
          <ul className="text-[12px] text-[var(--color-text-secondary)] mt-[8px] list-disc ml-4">
            <li>Missing DR tag on May 5 deploy</li>
            <li>VPN downtime &gt;1min on Apr 29</li>
          </ul>
        </div>
      </div>

      {/* Lower Charts Area */}
      <div className="grid grid-cols-2 gap-[40px]">
        {/* Chart A */}
        <div className="card">
          <h2 className="card-title mb-3">P95 API Latency (Finland ↔ Denmark)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataLatency}>
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis domain={[60, 260]} tick={{ fontSize: 10 }} />
              <Tooltip formatter={(value: number) => [`${value}ms`, '']} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#354357"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Chart B */}
        <div className="card flex flex-col items-center justify-center">
          <h2 className="card-title mb-3">Uptime and Zero-Tolerance</h2>
          <Gauge percentage={99.95} size={200} />
          <p className="text-[12px] text-[var(--color-text-secondary)] mt-2 text-center">30-day SLA target met</p>
        </div>
      </div>
    </div>
  );
}
