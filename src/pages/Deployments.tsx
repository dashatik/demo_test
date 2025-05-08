

export default function Deployments() {
  return (
    <div className="w-[1220px] h-[960px] bg-[#F9F9F9] font-[Inter] text-[#000]">
      {/* Top Navigation Bar */}
      <div className="h-[80px] bg-white flex justify-between items-center px-[40px]">
        <h1 className="text-[20px] font-semibold">Deployments</h1>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>
      </div>

      {/* Status Banner */}
      <div className="mt-[24px] w-[1140px] h-[80px] bg-[#FFF5F5] border-l-[4px] border-[#F44336] flex items-center px-[20px] mx-auto">
        <div className="flex items-start gap-4 w-full">
          <div className="text-[#F44336] text-[24px] leading-none">⚠️</div>
          <div className="flex-1">
            <p className="text-[16px] font-semibold text-[#F44336]">Deployment Blocked</p>
            <p className="text-[14px] text-[#6E6E6E]">Policy enforcement failure — Missing disaster recovery tag (Policy ID: DORA 11.3.b)</p>
          </div>
          <div className="text-[12px] font-mono text-right">May 5, 2025 — 13:04 UTC</div>
        </div>
      </div>

      {/* YAML Diff Viewer */}
      <div className="mt-[32px] w-[1140px] h-[240px] mx-auto grid grid-cols-2 gap-[20px]">
        {/* Attempted Deployment */}
        <div className="bg-[#FAFAFA] border border-[#DDD] p-4 overflow-auto">
          <p className="text-[14px] font-semibold mb-2">Attempted Deployment Config</p>
          <pre className="text-[12px] font-mono whitespace-pre-wrap">
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-api
  namespace: prod
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: payment-api
          </pre>
        </div>

        {/* Compliant Configuration */}
        <div className="bg-[#FAFAFA] border border-[#DDD] p-4 overflow-auto">
          <p className="text-[14px] font-semibold mb-2">Compliant Configuration</p>
          <pre className="text-[12px] font-mono whitespace-pre-wrap">
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-api
  namespace: prod
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: payment-api
<span className="bg-[#E5FBE5]">        dr-policy: enabled</span>
          </pre>
        </div>
      </div>

      {/* Fix and Redeploy Button */}
      <div className="flex justify-end mt-[16px] w-[1140px] mx-auto">
        <button className="bg-[#4CAF50] hover:bg-[#43A047] text-white text-[14px] font-semibold py-[10px] px-[16px] rounded-[6px] flex items-center gap-2">
          <span>▶️</span> Fix and Redeploy
        </button>
      </div>

      {/* Recent Deployments Table */}
      <div className="mt-[40px] w-[1140px] mx-auto">
        <div className="bg-[#F0F0F0] text-[14px] font-semibold grid grid-cols-4 py-2 px-4">
          <div>Date</div>
          <div>Status</div>
          <div>Policy Triggered</div>
          <div>Commit ID</div>
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