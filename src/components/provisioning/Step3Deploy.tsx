import { useEffect, useState, useRef } from "react";
import { CheckCircle, AlertCircle, Loader2, Clipboard } from "lucide-react";
import { useWizard } from "./WizardContext"; // ✅ NEW

const timelineSteps = [
  { title: "Cluster Provisioning", status: "pending", desc: "3 nodes created in Finland region" },
  { title: "Network Tunnel (VPN)", status: "pending", desc: "Encrypted Transtar VPN tunnel established" },
  { title: "Helm Chart Setup", status: "pending", desc: "PostgreSQL, Redis deployed via Helm v3.13" },
  { title: "GitOps Pipeline", status: "pending", desc: "ArgoCD linked to repo: github.com/nordledger/platform" },
  { title: "Policy Enforcement", status: "pending", desc: "Blocked 1 deployment (missing DR tag)" },
  { title: "Observability Stack", status: "pending", desc: "Prometheus + Grafana installed" },
  { title: "Logging Layer", status: "pending", desc: "Loki enabled for immutable audit logs" },
  { title: "DR Region Standby", status: "pending", desc: "DR configuration missing healthcheck config" },
  { title: "Monitoring Alerts", status: "pending", desc: "SLAs enabled: P95 latency < 120ms, uptime ≥ 99.95%" },
  { title: "Final Validation", status: "pending", desc: "All critical systems online" }
];

export default function Step3Deploy({
  onContinue,
  onBack,
}: {
  onContinue: () => void;
  onBack: () => void;
}) {
  const { region, drRegion, selectedApps } = useWizard(); // ✅ NEW
  const [timeline, setTimeline] = useState(timelineSteps);
  const [currentStep, setCurrentStep] = useState(0);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const clusterId = "transtar-" + Math.random().toString(16).substring(2, 8);

  useEffect(() => {
    if (currentStep < timeline.length) {
      const timer = setTimeout(() => {
        setTimeline((prev) =>
          prev.map((step, index) => {
            if (index < currentStep) return { ...step, status: "done" };
            if (index === currentStep)
              return {
                ...step,
                status:
                  step.title === "Policy Enforcement" || step.title === "DR Region Standby"
                    ? "warning"
                    : "done"
              };
            return step;
          })
        );
        setCurrentStep((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setReady(true);
    }
  }, [currentStep]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [timeline]);

  const renderIcon = (status: string) => {
    if (status === "done") return <CheckCircle size={18} className="text-[#4CAF50]" />;
    if (status === "warning") return <AlertCircle size={18} className="text-[#FF9800]" />;
    return <Loader2 size={18} className="animate-spin text-[#BDBDBD]" />;
  };

  const logContent = `deployment_id: ${clusterId}
cluster_region: ${region.toLowerCase()}
components:
${selectedApps.map((app) => `  - ${app}`).join("\n")}
status:
  uptime: "00:05:32"
  p95_latency: 96ms
  vpn: "active"
  dr_region: "${drRegion ? drRegion.toLowerCase() : "none"}"
compliance:
  dora: "article-15-ready"
  gdpr: "32/44 coverage"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(logContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center px-[40px] py-[40px]">
      {/* Progress bar */}
      <div className="flex justify-between w-[400px] mb-[32px] text-[14px]">
        {["Select", "Connect", "Deploy", "Manage"].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border text-white ${
                index < 2
                  ? "bg-[#BDBDBD]"
                  : index === 2
                  ? "bg-[#424242] text-[#fff]"
                  : "border-[#E0E0E0] text-[#BDBDBD]"
              }`}
            >
              {index < 2 ? "✓" : index === 2 ? "3" : "•"}
            </div>
            <span className="mt-[4px] text-[#757575]">{step}</span>
          </div>
        ))}
      </div>

      {/* Deployment box */}
      <div className="bg-[#F9FAFB] w-[880px] min-h-full rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-[32px] flex gap-[32px]">
        {/* Timeline */}
        <div className="flex-1">
          <h2 className="text-[18px] font-semibold mb-[24px]">One-Click Launch</h2>
          <ol className="space-y-[5px] text-[14px]">
            {timeline.map((step, idx) => (
              <li key={idx} className="flex items-start gap-[12px]">
                {renderIcon(step.status)}
                <div>
                  <p className="font-medium">{step.title}</p>
                  <p className="text-[#555]">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {ready && (
            <div className="mt-[24px] p-[12px] bg-[#E8F5E9] text-[#2E7D32] rounded-[6px] text-[14px]">
               Environment ready for audit.
            </div>
          )}
        </div>

        {/* Logs */}
        <div className="w-[320px] bg-[#FFFFFF] rounded-[8px] border border-[#E0E0E0] p-[16px] text-[12px] max-h-[360px] font-mono relative">
          <div className="flex justify-between items-center mb-[12px] font-semibold text-[#333]">
            Cluster ID: {clusterId}
            <button onClick={handleCopy} title="Copy to clipboard">
              <Clipboard size={16} className="text-[#555] hover:text-black" />
            </button>
          </div>
          <div ref={logRef} className="overflow-y-auto max-h-[360px] pr-[4px]">
            <pre>{logContent}</pre>
          </div>
          {copied && (
            <div className="absolute bottom-[12px] right-[16px] text-[11px] text-green-600">
              Copied!
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-[40px] w-[880px]">
        <button onClick={onBack} className="btn text-[14px]">Back</button>
        <button
          disabled={!ready}
          onClick={onContinue}
          className={`text-[14px] px-[20px] py-[10px] rounded-[6px] transition-all ${
            ready ? "btn btn-primary" : "btn btn-disabled cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
