export default function AuditLogs() {
  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center h-[80px] border-b border-[var(--color-border)]">
        <h1 className="text-[20px] font-semibold">Audit Logs</h1>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>
      </div>

      {/* Filter Panel */}
      <div className="w-[1140px] mx-auto flex justify-between items-center mt-[24px] ">
        <p className="text-[14px] font-semibold">Filter Logs:</p>
        <div className="flex gap-[10px] items-center ">
          {['User ID', 'Action Type', 'Severities', 'Date'].map((label, index) => (
            <select key={index} className="select">
              <option>{label}</option>
            </select>
          ))}
          <button className="btn btn-primary">Apply Filters</button>
        </div>
      </div>

      {/* Log Viewer */}
      <div className="w-[1140px] h-[300px] mx-auto bg-[#FAFAFA] border border-[#E0E0E0] rounded-[8px] px-[20px] p-6 font-mono text-[13px] overflow-x-auto">
        <div className="grid grid-cols-4 gap-4 font-semibold text-[#6E6E6E] pb-[20px] pt-[20px] mb-3">
          <div>Timestamp</div>
          <div>Action</div>
          <div>User</div>
          <div>Details</div>
        </div>
        <div className="grid grid-cols-4 gap-4 py-1 pb-[10px] text-[#333]">
          <div>2025-05-01T09:32:16Z</div>
          <div>DEPLOY_START</div>
          <div>user=ctojohan</div>
          <div>source=github</div>
        </div>
        <div className="grid grid-cols-4 gap-4 py-1 pb-[10px] text-[var(--color-error)]">
          <div>2025-05-01T09:32:18Z</div>
          <div>POLICY_FAIL</div>
          <div>user=ctojohan</div>
          <div>reason=DR-MISSING</div>
        </div>
        <div className="grid grid-cols-4 gap-4 py-1 pb-[10px] text-[#333]">
          <div>2025-05-01T09:33:44Z</div>
          <div>DEPLOY_ABORTED</div>
          <div>user=ctojohan</div>
          <div>—</div>
        </div>
        <div className="grid grid-cols-4 gap-4 py-1 pb-[10px] text-[#555]">
          <div>2025-05-02T12:16:11Z</div>
          <div>VPN_RESTART</div>
          <div>user=sys</div>
          <div>region=FI</div>
        </div>
        <div className="grid grid-cols-4 gap-4 py-1 pb-[10px] text-[#333]">
          <div>2025-05-02T14:01:55Z</div>
          <div>AUDIT_EXPORT</div>
          <div>user=auditor-1</div>
          <div>hash=sha256:…</div>
        </div>
      </div>

      {/* Footer Panel */}
      <div className="w-[1140px] mx-auto flex justify-between items-center mt-[24px]">
        <div className="text-[16px] font-mono text-[var(--color-text-secondary)] flex items-center gap-[20px]">
          <span>Log Hash: </span> <span> sha256:b73f9fa124c3d...1a2d</span>
          <span className="bg-[var(--color-success-light)] px-[5px] border border-[var(--color-success)] text-[var(--color-success)] text-[12px] px-2 py-1 rounded flex items-center gap-1">
            ✔ Verified
          </span>
        </div>
        <div className="flex gap-[10px]">
          <button className="btn btn-outline">Export Logs (.zip)</button>
          <button className="btn btn-outline">Share with Auditor</button>
        </div>
      </div>
    </div>
  );
}
