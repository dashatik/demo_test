
export default function AuditLogs() {
  return (
    <div className="w-[1220px] h-[960px] bg-[#F9F9F9] font-[Inter] text-[#000]">
      {/* Top Navigation Bar */}
      <div className="h-[80px] bg-white flex justify-between items-center px-[40px]">
        <h1 className="text-[20px] font-semibold">Audit Logs</h1>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>
      </div>

      {/* Filter Panel */}
      <div className="mt-[24px] w-[1140px] mx-auto flex justify-between items-center">
        <p className="text-[14px] font-semibold">Filter Logs:</p>
        <div className="flex gap-4 items-center">
          {['All Users', 'All Actions', 'All Severities'].map((placeholder, index) => (
            <select
              key={index}
              className="w-[180px] p-[8px] text-[13px] border border-[#CCCCCC] rounded-[6px]"
            >
              <option>{placeholder}</option>
            </select>
          ))}
          <button className="bg-[#4CAF50] hover:bg-[#45A045] text-white text-[13px] font-semibold py-[8px] px-[16px] rounded-[6px]">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Log Viewer */}
      <div className="mt-[32px] w-[1140px] mx-auto bg-[#FAFAFA] border border-[#E0E0E0] rounded-[8px] p-[24px] overflow-y-scroll h-[420px]">
        <pre className="text-[13px] font-mono leading-[1.6]">
<span className="text-[#333]">2025-05-01T09:32:16Z | DEPLOY_START      | user=ctojohan    | source=github</span>
<span className="text-[#F44336]">2025-05-01T09:32:18Z | POLICY_FAIL       | user=ctojohan    | reason=DR-MISSING</span>
<span className="text-[#333]">2025-05-01T09:33:44Z | DEPLOY_ABORTED    | user=ctojohan</span>
<span className="italic text-[#333]">2025-05-02T12:16:11Z | VPN_RESTART       | user=sys         | region=FI</span>
<span className="text-[#333]">2025-05-02T14:01:55Z | AUDIT_EXPORT      | user=auditor-1   | hash=sha256:…</span>
        </pre>
      </div>

      {/* Footer Panel */}
      <div className="mt-[24px] w-[1140px] mx-auto flex justify-between items-center">
        <div className="text-[12px] font-mono text-[#6E6E6E] flex items-center gap-3">
          <span>Log Hash: sha256:b73f9fa124c3d...1a2d</span>
          <span className="bg-[#E5FBE5] border border-[#4CAF50] text-[#4CAF50] text-[12px] px-2 py-1 rounded flex items-center gap-1">
            ✔ Verified
          </span>
        </div>
        <div className="flex gap-4">
          <button className="border border-[#4CAF50] text-[#4CAF50] bg-white hover:bg-[#F0FFF0] hover:underline text-[13px] py-[8px] px-[16px] rounded-[6px]">
            Export Logs (.zip)
          </button>
          <button className="border border-[#4CAF50] text-[#4CAF50] bg-white hover:bg-[#F0FFF0] hover:underline text-[13px] py-[8px] px-[16px] rounded-[6px]">
            Share with Auditor
          </button>
        </div>
      </div>
    </div>
  );
}

