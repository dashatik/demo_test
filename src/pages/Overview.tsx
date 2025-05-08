import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Gauge } from "../components/Gauge";

const dataLatency = [
  { time: "May 1, 00:00", value: 105 },
  { time: "May 1, 12:00", value: 122 },
  { time: "May 2, 00:00", value: 98 },
  { time: "May 2, 12:00", value: 130 },
  { time: "May 3, 00:00", value: 115 },
  { time: "May 3, 12:00", value: 140 },
  { time: "May 4, 00:00", value: 104 },
];

export default function Overview() {
  return (
    <div className="w-[1220px] h-[960px] bg-[#F9F9F9] font-[Inter] text-[#000]">
      {/* Top Navigation Bar */}
      <div className="h-[80px] bg-white flex justify-between items-center px-[40px]">
        <h1 className="text-[20px] font-semibold">Overview</h1>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>
      </div>

      {/* KPI Card Row */}
      <div className="flex gap-[20px] mt-[24px] ml-[40px]">
        {/* Compliance Readiness Card */}
        <div className="w-[380px] h-[140px] bg-white rounded-[8px] shadow-sm p-[20px]">
          <h2 className="text-[16px] font-semibold">Compliance Readiness</h2>
          <p className="text-[14px] text-[#6E6E6E] mt-[6px]">Coverage: DORA, GDPR, eIDAS</p>
          <div className="w-full h-[10px] bg-[#EEE] rounded-full mt-[12px] relative">
            <div className="h-full bg-[#4CAF50] rounded-full" style={{ width: "92%" }}></div>
          </div>
          <div className="flex justify-between mt-[8px] text-[12px] text-gray-600">
            <span></span>
            <span>92% Ready</span>
          </div>
          <p className="mt-[8px] text-[12px] text-[#4CAF50] underline cursor-pointer">View Full Report</p>
        </div>

        {/* Audit Status Card */}
        <div className="w-[380px] h-[140px] bg-white rounded-[8px] shadow-sm p-[20px] flex flex-col justify-between">
          <div>
            <h2 className="text-[16px] font-semibold">Next Scheduled Audit</h2>
            <p className="text-[18px] font-bold mt-[6px]">May 30, 2025</p>
            <p className="text-[12px] italic text-[#6E6E6E]">in 22 days</p>
          </div>
          <button className="self-end bg-[#4CAF50] hover:bg-[#45A045] text-white text-[14px] font-semibold py-[8px] px-[12px] rounded-[6px]">
            Download Audit Pack
          </button>
        </div>

        {/* Incidents Card */}
        <div className="w-[380px] h-[140px] bg-white rounded-[8px] shadow-sm p-[20px]">
          <h2 className="text-[16px] font-semibold">This Month's Incidents</h2>
          <p className="text-[16px] font-bold text-[#F44336] mt-[6px]">2 Policy Violations</p>
          <ul className="text-[12px] text-[#6E6E6E] mt-[8px] list-disc ml-4">
            <li>Missing DR tag on May 5 deploy</li>
            <li>VPN downtime &gt;1min on Apr 29</li>
          </ul>
        </div>
      </div>

      {/* Lower Charts Area */}
      <div className="flex gap-[60px] mt-[40px] ml-[40px]">
        {/* Chart A */}
        <div className="w-[580px]">
          <h2 className="text-[16px] font-semibold mb-2">P95 API Latency (Finland ↔ Denmark)</h2>
          <div className="border border-gray-300 rounded-[6px] p-2 bg-white">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataLatency}>
                <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                <YAxis domain={[60, 260]} tick={{ fontSize: 10 }} />
                <Tooltip formatter={(value: number) => [`${value}ms`, '']} />
                <Line
                type="monotone"
                dataKey="value"
                stroke="#007BFF"
                strokeWidth={2}
                dot={false}
                />
            </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart B */}
        <div className="w-[580px] flex flex-col items-center">
          <h2 className="text-[16px] font-semibold mb-2">Uptime Gauge</h2>
          <Gauge percentage={99.95} size={200} />
          <p className="text-[12px] text-[#6E6E6E] mt-2 text-center">30-day SLA target met</p>
        </div>
      </div>
    </div>
  );
}
