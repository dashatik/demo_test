import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Gauge } from "../components/Gauge"; // Assume donut chart is a custom Gauge component

const dataLatency = [
  { time: "May 1, 00:00", value: 105 },
  { time: "May 1, 12:00", value: 122 },
  { time: "May 2, 00:00", value: 98 },
  { time: "May 2, 12:00", value: 130 },
  { time: "May 3, 00:00", value: 115 },
  { time: "May 3, 12:00", value: 140 },
  { time: "May 4, 00:00", value: 104 },
];

export default function Infrastructure() {
  return (
    <div className="w-[1220px] h-[960px] bg-[#F9F9F9] font-[Inter] text-[#000]">
      {/* Top Navigation Bar */}
      <div className="h-[80px] bg-white flex justify-between items-center px-[40px]">
        <h1 className="text-[20px] font-semibold">Infrastructure</h1>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>
      </div>

      {/* Region Map Panel */}
      <div className="mt-[24px] flex flex-col items-center">
        <h2 className="text-[16px] font-semibold mb-[12px]">Deployment Regions</h2>
        <div className="w-[660px] h-[280px] bg-[#F9FAFB] border border-[#E0E0E0] rounded-[8px] relative">
          {/* Region Pins (Static placeholders for now) */}
          <div className="absolute top-[40px] left-[80px] text-[#4CAF50]">🇫🇮 Finland (Primary)</div>
          <div className="absolute top-[100px] left-[180px] text-[#FF9800]">🇸🇪 Sweden (Failover)</div>
          <div className="absolute top-[160px] left-[280px] text-[#BDBDBD]">🇩🇪 Germany (Disabled)</div>
        </div>
      </div>

      {/* Infrastructure Component Grid */}
      <div className="mt-[40px] px-[40px] grid grid-cols-3 gap-x-[20px] gap-y-[32px]">
        {/* Card 1 */}
        <div className="bg-white rounded-[8px] shadow-sm p-[20px] flex items-start gap-4 hover:shadow-md">
          <div className="text-[#326CE5]">🧱</div>
          <div>
            <h3 className="text-[16px] font-semibold">Kubernetes Cluster</h3>
            <p className="text-[14px]">Running</p>
            <p className="text-[12px] text-[#6E6E6E]">3 Worker Nodes, 2 Control Planes</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-[8px] shadow-sm p-[20px] flex items-start gap-4 hover:shadow-md">
          <div className="text-green-800">🔐</div>
          <div>
            <h3 className="text-[16px] font-semibold">VPN Tunnel</h3>
            <p className="text-[14px]">Encrypted</p>
            <p className="text-[12px] text-[#6E6E6E]">Site-to-Site: Active for 11 days</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-[8px] shadow-sm p-[20px] flex items-start gap-4 hover:shadow-md">
          <div className="text-[#FF9800]">📊</div>
          <div>
            <h3 className="text-[16px] font-semibold">Observability Stack</h3>
            <p className="text-[14px]">OK</p>
            <p className="text-[12px] text-[#6E6E6E]">Grafana, Prometheus, Loki installed</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-[8px] shadow-sm p-[20px] flex items-start gap-4 hover:shadow-md">
          <div className="text-gray-700">🗃️</div>
          <div className="w-full">
            <h3 className="text-[16px] font-semibold">Log Retention</h3>
            <p className="text-[14px]">30 days</p>
            <p className="text-[12px] text-[#6E6E6E]">1.2 GB / 10 GB used</p>
            <div className="w-full h-[10px] bg-[#EEE] rounded-full mt-[6px]">
              <div className="h-full bg-[#4CAF50] rounded-full" style={{ width: "12%" }}></div>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-[8px] shadow-sm p-[20px] flex items-start gap-4 hover:shadow-md">
          <div className="text-blue-600">💾</div>
          <div>
            <h3 className="text-[16px] font-semibold">Failover Config</h3>
            <p className="text-[14px]">Enabled</p>
            <p className="text-[12px] text-[#6E6E6E]">Next DR test: May 12</p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="bg-white rounded-[8px] shadow-sm p-[20px] flex items-start gap-4 hover:shadow-md">
          <div className="text-[#4CAF50]">🧰</div>
          <div>
            <h3 className="text-[16px] font-semibold">Policy Engine</h3>
            <p className="text-[14px]">Synced</p>
            <p className="text-[12px] text-[#6E6E6E]">Last update: May 2, 14:40 UTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
