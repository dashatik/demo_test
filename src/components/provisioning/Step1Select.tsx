import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { useWizard } from "./WizardContext"; 

const apps = [
  {
    id: "postgres",
    name: "PostgreSQL",
    description: "Open-source SQL database with encryption at rest",
    category: "core",
    tooltip: "Fintechs use PostgreSQL to store transactional data securely.",
  },
  {
    id: "redis",
    name: "Redis",
    description: "High-performance in-memory store with HA support",
    category: "core",
    tooltip: "Fintechs use Redis for session caching and rate limiting.",
  },
  {
    id: "vault",
    name: "Vault by HashiCorp",
    description: "Secrets management for keys, tokens, and policies",
    category: "security",
    tooltip: "Vault ensures secure handling of access credentials.",
  },
  {
    id: "vpn",
    name: "Transtar VPN",
    description: "Fast encrypted tunnel for inter-region pod traffic",
    category: "security",
    tooltip: "Transtar VPN secures pod-to-pod traffic across regions.",
  },
  {
    id: "prometheus",
    name: "Prometheus + Grafana",
    description: "Metric collection + compliance dashboards",
    category: "observability",
    tooltip: "SLAs and monitoring powered by Prometheus + Grafana.",
  },
  {
    id: "loki",
    name: "Loki",
    description: "Tamper-evident audit log collection",
    category: "observability",
    tooltip: "Loki logs everything to comply with GDPR, PCI, DORA.",
  },
];

const categories = ["core", "security", "observability"];

export default function Step1Select({ onContinue }: { onContinue: () => void }) {
  const { selectedApps, setSelectedApps } = useWizard(); // NEW
  const [localSelected, setLocalSelected] = useState<string[]>(selectedApps); // for intermediate selection

  const toggleSelection = (id: string) => {
    setLocalSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isValid = () => {
    const cats = new Set(apps.filter((a) => localSelected.includes(a.id)).map((a) => a.category));
    return categories.every((c) => cats.has(c));
  };

  const handleContinue = () => {
    setSelectedApps(localSelected); // Save to global state
    onContinue(); // Move to next step
  };

  return (
    <div className="flex flex-col items-center justify-center px-[40px] py-[40px]">
      {/* Progress bar */}
      <div className="flex justify-between w-[400px] mb-[32px] text-[14px]">
        {["Select", "Connect", "Deploy", "Manage"].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border text-white ${
                index === 0
                  ? "bg-[#424242] text-[#fff]"
                  : "border-[#E0E0E0] text-[#BDBDBD]"
              }`}
            >
              {index === 0 ? 1 : <span>•</span>}
            </div>
            <span className="mt-[4px] text-[#757575]">{step}</span>
          </div>
        ))}
      </div>

      {/* Main card container */}
      <div className="bg-[#FFFFFF] w-[880px] min-h-full rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-[32px]">
        <h2 className="text-[18px] font-semibold mb-[4px]">Select Pre-Built Applications</h2>
        <p className="text-[13px] text-[#555] mb-[24px]">
          Pick at least one service from each group to proceed.
        </p>

        {categories.map((cat) => (
          <div key={cat} className="mb-[32px]">
            <h3 className="text-[14px] font-semibold mb-[12px]">
              {cat === "core" ? "Core Infrastructure" : cat === "security" ? "Security Stack" : "Observability Stack"}
            </h3>
            <div className="grid grid-cols-2 gap-[24px]">
              {apps
                .filter((a) => a.category === cat)
                .map((app) => {
                  const selectedCard = localSelected.includes(app.id);
                  return (
                    <div
                      key={app.id}
                      onClick={() => toggleSelection(app.id)}
                      className={`relative cursor-pointer border rounded-[8px] p-[16px] transition-all hover:shadow-md hover:scale-[1.02] ${
                        selectedCard
                          ? "border-[#4CAF50] bg-[#F0FFF4]"
                          : "border-[#E0E0E0] bg-[#FAFAFA]"
                      }`}
                    >
                      {selectedCard && (
                        <Check className="absolute top-[8px] left-[8px] text-[#4CAF50]" size={20} />
                      )}
                      <div className="flex justify-between items-start">
                        <h3 className="text-[16px] font-bold">{app.name}</h3>
                        <div className="text-[#757575]" title={app.tooltip}>
                          <HelpCircle size={16} />
                        </div>
                      </div>
                      <p className="text-[12px] text-[#757575] mt-[4px]">{app.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mt-[40px]">
          <button className="text-[#757575] text-[14px] bg-transparent border-none"></button>
          <button
            disabled={!isValid()}
            onClick={handleContinue}
            className={`text-[14px] px-[20px] py-[10px] rounded-[6px] transition-all ${
              isValid()
                ? "btn btn-primary"
                : "btn btn-disabled cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
