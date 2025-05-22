import {Gauge} from "../components/Gauge";
import Topbar from "../components/Topbar";
import P95 from "../components/P95Latency";
import CpuUtilization from "../components/charts/CpuUtilization";
import MemoryUtilization from "../components/charts/MemoryUtilization";
import ErrorBudget from "../components/charts/ErrorBudget";
import AuditEvents from "../components/charts/AuditEvents";
import DeploymentSummary from "../components/charts/DeploymentSummary";
import VpnStability from "../components/charts/VpnStability";
import IncidentBlock from "../components/IncidentBlock";
import { LockKeyhole } from "lucide-react";


export default function Overview({
  selectedApps,
  cloudConfig,
}: {
  selectedApps?: string[];
  cloudConfig?: any;
}) {
  const showLoki = selectedApps?.includes("loki");
  const showVault = selectedApps?.includes("vault");
  const region = cloudConfig?.region || "Finland";

  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      <Topbar page="Overview" />

      {/* Time Context */}
      <div className="text-left text-sm text-[#6B7280]">Status as of May 8, 14:35 UTC</div>

      {/* KPI Card Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {/* Compliance Readiness Card */}
        <div className="card p-[20px] rounded-[8px] shadow bg-white">
          <h2 className="font-semibold text-[15px] mb-[4px]">Compliance Readiness</h2>
          <p className="text-sm text-[#6B7280] mb-[8px]">Coverage: DORA, GDPR, eIDAS</p>
          <div className="w-full h-[10px] bg-[#E5E7EB] rounded-full mb-2">
            <div className="h-full bg-[#374151] rounded-full" style={{ width: "92%" }}></div>
          </div>
          <div className="text-right text-xs text-[#6B7280]">92% Ready</div>
          <button className="btn ">
            View Full Report
          </button>
        </div>

        {/* Next Scheduled Audit */}
        <div className="card p-[20px] rounded-[8px] shadow bg-white flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-[15px]">Next Scheduled Audit</h2>
            <p className="text-lg font-bold mt-2">May 30, 2025</p>
            <p className="text-sm italic text-[#6B7280]">in 22 days</p>
          </div>
          <button className="btn btn-primary w-[200px]">
            Download Audit Pack
          </button>
        </div>

        {/* Policy Violations */}
        <div >
          <IncidentBlock />
        </div>
        {/* P95 Latency Chart */}
        <div className="card p-[20px] rounded-[8px] shadow ">
          <h2 className="font-semibold text-[15px] mb-3 ">
            P95 API Latency ({region} ↔ Denmark)
          </h2>
          <P95 />
        </div>
      </div>

      {/* Observability Metrics Grid (2 rows × 3 columns) */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        <CpuUtilization />
        <MemoryUtilization />
        <ErrorBudget />
        <AuditEvents />
        <DeploymentSummary />
        <VpnStability />
      </div>

      {/* Latency Chart Section */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-[40px] mt-[32px]">
        {/* SLA Uptime Gauge */}
        <div className="card p-[20px] rounded-[8px] shadow bg-white flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[15px] mb-2">Uptime and Zero-Tolerance</h2>
          <Gauge percentage={99.95} size={160} />
          <p className="text-xs text-[#6B7280] mt-2">30-day SLA target met</p>
        </div>

        {/* Placeholder (optional SLA distribution chart) */}
        <div className="card p-[20px] rounded-[8px] shadow bg-white flex items-center justify-center">
          <p className="text-[#6B7280] text-sm">SLA Distribution Chart (Coming Soon)</p>
        </div>
      </div>

      {/* Optional Audit Log Section */}
      {showLoki && (
        <div className="card p-[20px] mt-[20px] rounded-[8px] bg-white shadow">
          <h2 className="font-semibold text-[15px] mb-1">Audit Log Streaming Enabled</h2>
          <p className="text-sm text-[#555]">
            Loki has been configured for tamper-evident logs. You can export raw event streams in the Audit Logs tab.
          </p>
        </div>
      )}

      {/* Vault Optional Block */}
      {showVault && (
        <div className="card p-[20px] mt-[20px] rounded-[8px] bg-white shadow">
          <h2 className="font-semibold text-[15px] mb-1">Secrets Management</h2>
          <p className="text-sm text-[#555]">
            Vault is configured. Token issuance and policy restrictions are now managed at cluster level.
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-[32px] text-xs text-[#10B981]">
        <div className="flex items-center gap-[5px]">
          <LockKeyhole size={14} />
          Logs verified via sha256 integrity chain.
        </div>
        <a
          href="/audit-pack/NordLedger_May_2025.json"
          className="text-[#111] underline hover:text-[#5196e1]"
          target="_blank"
          rel="noreferrer"
        >
          Open log manifest
        </a>
      </div>
    </div>
  );
}
