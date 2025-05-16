import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Gauge } from "../components/Gauge"; // Assume donut chart is a custom Gauge component
import mapImage from '../assets/MapChart_Map.png';
import Topbar from "../components/Topbar";


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
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      {/* Top Navigation Bar */}
      <Topbar page="Overview" />
      

      {/* Region Map Panel (Interactive) */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[16px] font-semibold text-[var(--color-text)] self-start">Deployment Regions</h2>
        <div className="w-[660px] h-[280px] bg-[#F9FAFB] border border-[#E0E0E0] rounded-[8px] px-[24px] py-[16px] relative overflow-hidden">
          <img
            src={mapImage}
            alt="Map Background"
            className="absolute top-[0px] left-[-400px] w-[1330PX] h-full object-cover opacity-90 pointer-events-none"
          />
          {/* Finland */}
          <div className="absolute left-[450px] top-[165px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-success)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2">🇫🇮 Finland (Primary)</span>
            <div className="absolute right-[100%] top-[-150px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md p-3 w-[220px] text-[12px] z-10">
              <p className="font-semibold mb-1">🇫🇮 Finland</p>
              <p><span className="text-[#6E6E6E]">Status:</span> <span className="text-[#000]">Active</span></p>
              <p><span className="text-[#6E6E6E]">Location:</span> <span className="text-[#000]">Helsinki</span></p>
              <p><span className="text-[#6E6E6E]">Last Sync:</span> <span className="text-[#000]">May 7, 09:14 UTC</span></p>
              <p><span className="text-[#6E6E6E]">Avg Latency:</span> <span className="text-[#000]">45ms</span></p>
            </div>
          </div>

          {/* Sweden */}
          <div className="absolute left-[335px] top-[230px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-warning)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2">🇸🇪 Sweden (Failover)</span>
            <div className="absolute right-[100%] top-[-150px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md p-3 w-[220px] text-[12px] z-10">
              <p className="font-semibold mb-1">🇸🇪 Sweden</p>
              <p><span className="text-[#6E6E6E]">Status:</span> <span className="text-[#000]">Failover Ready</span></p>
              <p><span className="text-[#6E6E6E]">Location:</span> <span className="text-[#000]">Stockholm</span></p>
              <p><span className="text-[#6E6E6E]">Last Sync:</span> <span className="text-[#000]">May 6, 18:12 UTC</span></p>
              <p><span className="text-[#6E6E6E]">Avg Latency:</span> <span className="text-[#000]">78ms</span></p>
            </div>
          </div>

          {/* Denmark */}
          <div className="absolute left-[310px] top-[250px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-disabled)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2 ">🇩🇰 Denmark (Disabled)</span>
            <div className="absolute right-[100%] top-[-150px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md p-3 w-[220px] text-[12px] z-10">
              <p className="font-semibold mb-1">🇩🇰 Denmak</p>
              <p><span className="text-[#6E6E6E]">Status:</span> <span className="text-[#000]">Disabled</span></p>
              <p><span className="text-[#6E6E6E]">Location:</span> <span className="text-[#000]">Copenhagen</span></p>
              <p><span className="text-[#6E6E6E]">Last Sync:</span> <span className="text-[#000]">—</span></p>
              <p><span className="text-[#6E6E6E]">Avg Latency:</span> <span className="text-[#000]">—</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Component Grid */}
      <div className="grid grid-cols-3 gap-x-[20px] gap-y-[32px]">
        {/* Card 1 */}
        <div className="card flex items-start gap-4 hover:shadow-md">
          <div className="text-[#326CE5] text-[20px]">🧱</div>
          <div>
            <h3 className="card-title">Kubernetes Cluster</h3>
            <p className="text-[14px]">Running</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">3 Worker Nodes, 2 Control Planes</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card flex items-start gap-4 hover:shadow-md">
          <div className="text-green-800 text-[20px]">🔐</div>
          <div>
            <h3 className="card-title">VPN Tunnel</h3>
            <p className="text-[14px]">Encrypted</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Site-to-Site: Active for 11 days</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card flex items-start gap-4 hover:shadow-md">
          <div className="text-[var(--color-warning)] text-[20px]">📊</div>
          <div>
            <h3 className="card-title">Observability Stack</h3>
            <p className="text-[14px]">OK</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Grafana, Prometheus, Loki installed</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card flex items-start gap-4 hover:shadow-md">
          <div className="text-gray-700 text-[20px]">🗃️</div>
          <div className="w-full">
            <h3 className="card-title">Log Retention</h3>
            <p className="text-[14px]">30 days</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">1.2 GB / 10 GB used</p>
            <div className="progress-bar mt-[6px]">
              <div className="progress-bar-fill" style={{ width: "12%" }}></div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card flex items-start gap-4 hover:shadow-md">
          <div className="text-blue-600 text-[20px]">💾</div>
          <div>
            <h3 className="card-title">Failover Config</h3>
            <p className="text-[14px]">Enabled</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Next DR test: May 12</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card flex items-start gap-4 hover:shadow-md">
          <div className="text-[var(--color-success)] text-[20px]">🧰</div>
          <div>
            <h3 className="card-title">Policy Engine</h3>
            <p className="text-[14px]">Synced</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Last update: May 2, 14:40 UTC</p>
          </div>
        </div>
      </div>

      {/* Latency + Uptime Section */}
      <div className="grid grid-cols-2 gap-[40px]">
        {/* Line Chart */}
        <div className="card">
          <h2 className="card-title mb-3">P95 API Latency (Global)</h2>
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

        {/* Gauge */}
        <div className="card flex flex-col items-center justify-center">
          <h2 className="card-title mb-3">Uptime Gauge</h2>
          <Gauge percentage={99.95} size={200} />
          <p className="text-[12px] text-[var(--color-text-secondary)] mt-2 text-center">
            30-day SLA target met
          </p>
        </div>
      </div>
    </div>
  );
}