import {
  AlertTriangle,
  CircleSlash,
  ShieldAlert,
  Clock,
} from "lucide-react";

const incidents = [
  {
    date: "May 5",
    type: "Policy Violation",
    description: "Missing DR tag in production deploy",
    affected: "Payments",
    policyRef: "DORA 11.3.b",
    severity: "Critical",
    status: "Mitigated",
    icon: <ShieldAlert className="text-[#DC2626]" size={16} />,
  },
  {
    date: "Apr 29",
    type: "SLA Breach",
    description: "VPN downtime exceeded 60s",
    affected: "dewa-vpn-eu",
    severity: "High",
    status: "Auto-recovered",
    icon: <AlertTriangle className="text-[#F59E0B]" size={16} />,
  },
  {
    date: "Apr 27",
    type: "Warning",
    description: "Logging latency anomaly >4s",
    affected: "Observability stack · EU-FI",
    severity: "Medium",
    status: "Monitoring",
    icon: <Clock className="text-[#D97706]" size={16} />,
  },
  {
    date: "Apr 22",
    type: "Policy Violation",
    description: "Unlabeled container in DR cluster",
    affected: "Region: SE",
    severity: "Critical",
    status: "Rejected",
    icon: <CircleSlash className="text-[#EF4444]" size={16} />,
  },
];

function renderTag(status: string) {
  const base = "text-[12px] px-[5px] py-[4px] rounded-[8px] font-medium";
  switch (status) {
    case "Mitigated":
      return <span className={`${base} text-[#fff] bg-[#4CAF50]`}>{status}</span>;
    case "Monitoring":
      return <span className={`${base} text-[#fff] bg-[#60A5FA]`}>{status}</span>;
    case "Rejected":
      return <span className={`${base} text-[#EF4444] border border-[#EF4444] bg-white`}>{status}</span>;
    default:
      return <span className={`${base} text-[#6B7280] bg-[#F3F4F6]`}>{status}</span>;
  }
}

export default function IncidentBlock() {
  return (
    <div className="card rounded-[8px] shadow ">
      <h2 className="font-semibold text-[18px] mb-[4px]">This Month’s Incidents & Violations</h2>
      <p className="text-[14px] text-[#DC2626] font-medium mb-[12px]">
        2 Policy Violations · 1 SLA Breach · 1 Warning
      </p>

      <div className="space-y-[2px] text-[13px] text-[#111827] p-[10px]">
        {incidents.map((incident, i) => (
          <li key={i} className="flex items-start gap-[5px]">
            <div className="pt-[3px]">{incident.icon}</div>
            <div>
              <p className="font-medium">
                {incident.date} · {incident.type} · {incident.description}
              </p>
              <p className="text-[#6B7280]">
                ↳ Affected: {incident.affected}
                {incident.policyRef && ` · Policy: ${incident.policyRef}`} ·{" "}
                Status: {renderTag(incident.status)}
              </p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}