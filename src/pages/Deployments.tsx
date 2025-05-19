import Topbar from "../components/Topbar";

export default function Deployments() {
  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      {/* Top Navigation Bar */}
      <Topbar page="Deployments"/>

      {/* Status Banner */}
      <div className="w-[1140px] mx-auto bg-[#FFF5F5] border-l-[4px] border-[var(--color-error)] flex items-center px-[20px] py-[16px] rounded shadow-sm">
        <div className="flex items-start gap-4 w-full">
          <div className="text-[var(--color-error)] text-[20px] leading-none">⚠️</div>
          <div className="flex-1">
            <p className="text-[16px] font-semibold text-[var(--color-error)]">Deployment Blocked</p>
            <p className="text-[14px] text-[var(--color-text-secondary)]">Policy enforcement failure — Missing disaster recovery tag (Policy ID: DORA 11.3.b)</p>
          </div>
          <div className="text-[12px] font-mono text-right">May 5, 2025 — 13:04 UTC</div>
        </div>
      </div>

{/* YAML Diff Viewer */}
<div className="w-[1140px] h-[340px] mx-auto grid grid-cols-2 gap-[20px] mt-[32px]">
        {/* Attempted Deployment */}
        <div className="bg-[#FAFAFA] border border-[#DDDDDD] rounded p-4 overflow-y-auto text-[12px] pt-[20px] font-mono leading-[1.6]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[14px] font-semibold text-black px-[10px]">Attempted Deployment Config</span>
            <span className="text-xs px-2 py-1 bg-[#FFF5F5] text-[var(--color-error)] rounded font-medium px-[20px]">⚠️ Blocked by Policy DORA-11.3.b</span>
          </div>
          <pre className="whitespace-pre-wrap text-[#333333] px-[20px]">
          {"apiVersion: apps/v1\n"}
            {"kind: Deployment\n"}
            {"metadata:\n"}
            {"  name: payment-api\n"}
            {"  namespace: prod\n"}
            {"spec:\n"}
            {"  replicas: 3\n"}
            {"  template:\n"}
            {"    metadata:\n"}
            {"      labels:\n"}
            {"        app: payment-api\n"}
          </pre>
        </div>

        {/* Compliant Configuration */}
        <div className="bg-[#FAFAFA] border border-[#DDDDDD] rounded p-4 overflow-y-auto text-[12px] pt-[20px] font-mono leading-[1.6]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[14px] font-semibold text-black px-[10px]">Compliant Configuration</span>
            <span className="text-xs px-2 py-1 bg-[var(--color-success-light)] text-[var(--color-success)] rounded font-medium px-[20px]">✅ Validated</span>
          </div>
          <pre className="whitespace-pre-wrap text-[#333333] px-[20px]">
            {"apiVersion: apps/v1\n"}
            {"kind: Deployment\n"}
            {"metadata:\n"}
            {"  name: payment-api\n"}
            {"  namespace: prod\n"}
            {"spec:\n"}
            {"  replicas: 3\n"}
            {"  template:\n"}
            {"    metadata:\n"}
            {"      labels:\n"}
            {"        app: payment-api\n"}
            <span className="inline-block bg-[var(--color-success-light)] border-l-2 border-[var(--color-success)] pl-2 font-semibold relative group">
              {"        dr-policy: enabled"}
              <div className="absolute top-full left-0 mt-[5px] hidden group-hover:block px-[10px] bg-white border border-[#CCCCCC] text-[12px] text-[#000] px-3 py-2 rounded shadow-md w-[220px] z-50">
                <p><strong>Added for DORA 11.3.b compliance</strong></p>
              </div>
            </span>
          </pre>
        </div>
      </div>

      {/* Fix and Redeploy Button */}
      <div className="flex justify-end w-[1140px] mx-auto">
        <button className="btn btn-primary flex items-center gap-2">
          <span>▶️</span> Fix and Redeploy
        </button>
      </div>

      {/* Recent Deployments Table */}
      <div className="w-[1140px] mx-auto">
      <div className="w-full flex items-center justify-between px-4 py-3 pb-[10px] border-b border-[var(--color-border)] bg-[#F9FAFB] text-[14px] font-semibold text-[#000]">
        <div className="w-1/4 text-left">Date</div>
        <div className="w-1/4 text-left">Status</div>
        <div className="w-1/4 text-left">Policy Triggered</div>
        <div className="w-1/4 text-left">Commit ID</div>
      </div>
        {[
          {
            date: "May 5, 2025",
            status: "❌ Blocked",
            policy: "DORA-11.3b",
            commit: "cf4a87d",
          },
          {
            date: "May 3, 2025",
            status: "✅ Passed",
            policy: "—",
            commit: "a92bd91",
          },
          {
            date: "May 1, 2025",
            status: "⚠️ Warning",
            policy: "GDPR-Encryption",
            commit: "b1a4d12",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center text-[13px] text-[#333] py-[12px] px-4 border-b hover:bg-[#FAFAFA]"
          >
            <div>{item.date}</div>
            <div>{item.status}</div>
            <div>{item.policy}</div>
            <div className="text-blue-600 underline cursor-pointer">{item.commit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}