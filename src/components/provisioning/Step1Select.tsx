import { useState, useEffect, useRef } from "react";
import { Check, HelpCircle } from "lucide-react";


type ComplianceItem = {
  id: string;
  label: string;
  description: string;
  required: string[];
  tooltip?: string;
};

const apps = [
  {
    id: "postgres",
    name: "PostgreSQL",
    description: "Open-source SQL database with encryption at rest",
    category: "core",
    tooltip: "Postgres = encrypted at rest",
  },
  {
    id: "redis",
    name: "Redis",
    description: "High-performance in-memory store with HA support",
    category: "core",
    tooltip: "Redis = HA in-memory",
  },
  {
    id: "vault",
    name: "Vault by HashiCorp",
    description: "Secrets management for keys, tokens, and policies",
    category: "security",
    tooltip: "Vault = token mgmt + access control",
  },
  {
    id: "vpn",
    name: "Transtar VPN",
    description: "Fast encrypted tunnel for inter-region pod traffic",
    category: "security",
    tooltip: "VPN = Transtar encryption",
  },
  {
    id: "prometheus",
    name: "Prometheus + Grafana",
    description: "Metric collection + compliance dashboards",
    category: "observability",
    tooltip: "Prometheus + Grafana = metrics, alerts",
  },
  {
    id: "loki",
    name: "Loki",
    description: "Tamper-evident audit log collection",
    category: "observability",
    tooltip: "Loki = immutable log export",
  },
];

const categories = ["core", "security", "observability"];

export default function Step1Select({ onContinue }: { onContinue: (selected: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const deployRef = useRef<HTMLDivElement>(null);

  const toggleSelection = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const isValid = () => {
    const selectedCategories = new Set(apps.filter((a) => selected.includes(a.id)).map((a) => a.category));
    return categories.every((cat) => selectedCategories.has(cat));
  };

  

  useEffect(() => {
    if (isValid() && deployRef.current) {
      deployRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selected]);

  

    const complianceSummary: ComplianceItem[] = [
    {
      id: "dora",
      label: "DORA Article 11.3.b",
      description: "Only DR-tagged services are deployable",
      required: ["vpn", "postgres", "loki", "prometheus"],
      tooltip: "VPN selected. DR tag enforcement missing. Add DR-enabled service or enable policy flag."
    },
    {
      id: "gdpr",
      label: "GDPR Article 32",
      description: "Vault & PostgreSQL encrypt data at rest",
      required: ["vault", "postgres"],
      tooltip: "Vault selected. PostgreSQL not yet enabled — missing full encryption coverage."
    },
    {
      id: "pci",
      label: "PCI DSS 10.3",
      description: "All actions logged in immutable trail",
      required: ["vault", "loki", "prometheus", "postgres"],
      tooltip: "Loki not selected. Immutable audit logs required for PCI DSS compliance."
    },
    {
      id: "nis2",
      label: "NIS2 Article 21.2.c",
      description: "Live system monitoring and immutable audit logging",
      required: ["vault", "vpn", "prometheus", "loki"],
      tooltip: "Prometheus selected. Loki missing — full NIS2 observability not satisfied."
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-[40px] py-[40px] space-y-[32px] ">
      {/* Stepper */}
      <div className="flex justify-between w-[400px] text-[14px]">
        {["Select", "Connect", "Deploy", "Manage"].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border text-[#fff] ${
              index === 0 ? "bg-[#424242] text-[#fff]" : "border-[#E0E0E0] text-[#BDBDBD]"}`}>
              {index === 0 ? 1 : <span>•</span>}
            </div>
            <span className="mt-[4px] text-[#757575]">{step}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-[40px] w-full max-w-[1140px]">
        {/* Left: Service Cards */}
        <div className="flex-1 space-y-[32px]">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-[14px] font-semibold mb-[12px]">
                {cat === "core" ? "Core Infrastructure" : cat === "security" ? "Security Stack" : "Observability Stack"}
              </h3>
              <div className="grid grid-cols-2 gap-[20px]">
                {apps.filter((a) => a.category === cat).map((app) => {
                  const selectedCard = selected.includes(app.id);
                  return (
                    <div
                      key={app.id}
                      onClick={() => toggleSelection(app.id)}
                      className={`relative cursor-pointer border rounded-[8px] p-[16px] transition-all hover:shadow-md ${
                        selectedCard ? "border-[#4CAF50] bg-[#F0FFF4]" : "border-[#E0E0E0] bg-[#FAFAFA]"}`}
                    >
                      {selectedCard && <Check className="absolute top-[8px] left-[8px] text-[#4CAF50]" size={20} />}
                      <div className="flex justify-between items-start">
                        <h3 className="text-[16px] font-bold">{app.name}</h3>
                        <div className="text-[#757575]" title={app.tooltip}><HelpCircle size={16} /></div>
                      </div>
                      <p className="text-[12px] text-[#757575] mt-[4px]">{app.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Compliance Summary */}
        <div className="w-[320px] h-[300px] bg-[#FFFFFF] border border-[#E0E0E0] p-[16px] mt-[45px] rounded-[8px] text-[13px] ">
          <h3 className="font-semibold mb-[8px]">COMPLIANCE SUMMARY</h3>
          {complianceSummary.map((item) => {
          const matched = item.required.filter((id) => selected.includes(id));
const full = matched.length === item.required.length;
const partial = matched.length > 0 && matched.length < item.required.length;

          const statusIcon = full ? "🟢" : partial ? "🟡" : "❌";

          return (
            <div
              key={item.id}
              className={`mb-[8px] ${full ? "text-[#4CAF50]" : partial ? "text-[#FFC107]" : "text-[#BDBDBD]"}`}
              title={item.tooltip || item.description}
            >
              <span className="font-semibold">
                {statusIcon} {item.label.replace(/^🟢 /, "").replace(/^🟡 /, "").replace(/^❌ /, "")}
              </span>
              <p className="text-[12px]">{item.description}</p>
            </div>
            );
          })}
        </div>
      </div>

      {/* Deploy Preview Summary */}
      {isValid() && (
        <div ref={deployRef} className="w-full max-w-[1140px] grid grid-cols-[1fr_3fr] gap-[32px] pt-[32px]">
          {/* Deploy Preview */}
          <div className="bg-[#FFFFFF] border border-[#CCC] p-[24px] rounded-[8px]">
            <h4 className="text-[12px] font-semibold mb-[10px]">DEPLOY PREVIEW</h4>
            <ul className="ml-[-20px] text-[12px] font-mono">
              <li>Services selected: {selected.length}</li>
              <li>Cluster profile: 3-node HA, VPN & DR auto-attached</li>
              <li>Expected SLA: ≥99.95% uptime, P95 latency &lt; 120ms</li>
              {/* Example: Dynamic risk alert */}
              {!selected.includes("loki") && (
                <li className="text-[#E53935] mt-2"> PCI DSS non-compliant: Loki not selected</li>
              )}
            </ul>
          </div>
          <div className="bg-[#F9F9F9] border border-[#DDD] p-[24px] rounded-[8px] font-mono text-[12px] leading-[1.6]">
            <h4 className="font-semibold mb-2">DYNAMIC ARCHITECTURE DIAGRAM</h4>
            <pre>
{`[PostgreSQL]  
     ↓ metrics                  
[Prometheus] → [Grafana] (compliance dashboards)
     ↓ logs
   [Loki] (immutable audit logs)


[Vault] ←→ [Redis] ←→ [App Layer (simulated)] 
     ↓ secure tokens
[Transtar VPN] → (inter-region encrypted routing)`}
            </pre>
            <p className="mt-2 text-[11px] text-[#555]">
            All observability flows logged in Loki. VPN enforces encrypted regional routing.
          </p>
        </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-end w-full max-w-[1140px] mt-[24px]">
        <button
          disabled={!isValid()}
          onClick={() => onContinue(selected)}
          className={`text-[14px] px-[20px] py-[10px] rounded-[6px] ${
            isValid() ? "btn btn-primary" : "btn btn-disabled cursor-not-allowed"
          }`}
        >
          Continue to Connect
        </button>
      </div>
    </div>
  );
}