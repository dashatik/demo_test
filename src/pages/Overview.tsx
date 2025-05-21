import { Gauge } from "../components/Gauge";
import Topbar from "../components/Topbar";
import P95 from "../components/P95Latency";

export default function Overview({
  selectedApps,
  cloudConfig,
}: {
  selectedApps?: string[];
  cloudConfig?: any;
}) {
  const showLoki = selectedApps?.includes("loki");
  const showVault = selectedApps?.includes("vault");
  const drRegion = cloudConfig?.drRegion;
  const region = cloudConfig?.region;

  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      <Topbar page="Overview" />

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
          <p className="text-[14px] font-semibold text-[var(--color-error)] mt-[6px]">
            {drRegion ? "2 Policy Violations" : "1 Policy Violation"}
          </p>
          <ul className="text-[12px] text-[var(--color-text-secondary)] mt-[8px] list-disc ml-4">
            {!drRegion && <li>Missing DR tag on May 5 deploy</li>}
            <li>VPN downtime &gt;1min on Apr 29</li>
          </ul>
        </div>
      </div>

      {/* Lower Charts Area */}
      <div className="grid grid-cols-2 gap-[40px]">
        {/* Chart A */}
        <div className="card">
          <h2 className="card-title mb-3">
            P95 API Latency ({region || "Finland"} ↔ Denmark)
          </h2>
          <P95 />
        </div>

        {/* Chart B */}
        <div className="card flex flex-col items-center justify-center">
          <h2 className="card-title mb-3">Uptime and Zero-Tolerance</h2>
          <Gauge percentage={99.95} size={200} />
          <p className="text-[12px] text-[var(--color-text-secondary)] mt-2 text-center">
            30-day SLA target met
          </p>
        </div>
      </div>

      {/* Optional sections */}
      {showLoki && (
        <div className="card p-[20px] mt-[20px]">
          <h2 className="text-[16px] font-semibold mb-[8px]">Audit Log Streaming Enabled</h2>
          <p className="text-[14px] text-[#555]">Loki has been configured for tamper-evident logs. You can export raw event streams in the Audit Logs tab.</p>
        </div>
      )}

      {showVault && (
        <div className="card p-[20px] mt-[20px]">
          <h2 className="text-[16px] font-semibold mb-[8px]">Secrets Management</h2>
          <p className="text-[14px] text-[#555]">Vault is configured. Token issuance and policy restrictions are now managed at cluster level.</p>
        </div>
      )}
    </div>
  );
}
