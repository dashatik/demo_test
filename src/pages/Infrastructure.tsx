import { Gauge } from "../components/Gauge";
import Topbar from "../components/Topbar";
import Map from "../components/Map";
import P95 from "../components/P95Latency";
import {
  Boxes,
  ShieldCheck,
  ActivitySquare,
  Archive,
  HardDrive,
  Settings2,
} from "lucide-react";

export default function Infrastructure() {
  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      <Topbar page="Intrastructure" />

      {/* Region Map Panel (Interactive) */}
      <div className="flex flex-col items-center ">
        <h2 className="text-[16px] font-semibold text-[var(--color-text)] self-start">Deployment Regions</h2>
        <p className="text-[13px] text-[#666] self-start">No 3rd-country risk</p>
        <Map />
      </div>

      {/* Infrastructure Component Grid */}
      <div className="grid grid-cols-3 gap-x-[20px] gap-y-[32px]">
        {/* Card 1 */}
        <div className="card flex items-start gap-4 hover:shadow-md border-l-[4px] border-[#4CAF50]">
          <Boxes className="text-[#444]" size={20} />
          <div>
            <h3 className="card-title">Kubernetes Cluster</h3>
            <p className="text-[14px]">Running</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">3 Worker Nodes, 2 Control Planes</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card flex items-start gap-4 hover:shadow-md border-l-[4px] border-[#4CAF50]">
          <ShieldCheck className="text-[#444]" size={20} />
          <div>
            <h3 className="card-title">VPN Tunnel</h3>
            <p className="text-[14px]">Encrypted</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Site-to-Site: Active for 11 days</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card flex items-start gap-4 hover:shadow-md border-l-[4px] border-[#FFC107]">
          <ActivitySquare className="text-[#444]" size={20} />
          <div>
            <h3 className="card-title">Observability Stack</h3>
            <p className="text-[14px]">OK</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Grafana, Prometheus, Loki installed</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card flex items-start gap-4 hover:shadow-md border-l-[4px] border-[#9E9E9E]">
          <Archive className="text-[#444]" size={20} />
          <div className="w-full">
            <h3 className="card-title">Log Retention</h3>
            <p className="text-[14px]">30 days</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">1.2 GB / 10 GB used</p>
            <div className="progress-bar mt-[6px]">
              <div className="progress-bar-fill" style={{ width: "12%" }}></div>
            </div>
            <p className="text-[12px] text-[#4CAF50] mt-[6px]">Tamper-evident logs (Loki)</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card flex items-start gap-4 hover:shadow-md border-l-[4px] border-[#2196F3]">
          <HardDrive className="text-[#444]" size={20} />
          <div>
            <h3 className="card-title">Failover Config</h3>
            <p className="text-[14px]">Enabled</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Next DR test: May 12</p>
            <p className="text-[12px] text-[#4CAF50] mt-[4px]">DR Mode: Warm Standby</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card flex items-start gap-4 hover:shadow-md border-l-[4px] border-[#4CAF50]">
          <Settings2 className="text-[#444]" size={20} />
          <div>
            <h3 className="card-title">Policy Engine</h3>
            <p className="text-[14px]">Synced</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Last update: May 2, 14:40 UTC</p>
            <p className="text-[12px] text-[#4CAF50] mt-[4px]">OPA/Gatekeeper policy rules enforced</p>
          </div>
        </div>
      </div>

      {/* Latency + Uptime Section */}
      <div className="grid grid-cols-2 gap-[40px]">
        {/* Line Chart */}
        <div className="card">
          <h2 className="card-title mb-3">P95 API Latency (Global)</h2>
          <P95 />
        </div>

        {/* Gauge */}
        <div className="card flex flex-col items-center justify-center">
          <h2 className="card-title mb-3">Uptime </h2>
          <Gauge percentage={99.95} size={200} />
          <p className="text-[12px] text-[var(--color-text-secondary)] mt-2 text-center">
            30-day SLA target met
          </p>
        </div>
      </div>
    </div>
  );
}
