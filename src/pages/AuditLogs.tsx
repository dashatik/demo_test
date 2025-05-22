import { useState } from "react";
import Topbar from "../components/Topbar";
import {
  RotateCw,
  CheckCircle,
  Ban,
  AlertTriangle,
  FileDown,
  Share2,
  LockKeyhole,
} from "lucide-react";

export default function AuditLogs() {
  const [filters, setFilters] = useState({
    user: "All Users",
    action: "All Actions",
    severity: "All Severities",
    date: "All Dates",
  });

  const allLogs = [
    {
      timestamp: "2025-05-01T09:32:16Z",
      action: "DEPLOY_START",
      user: "thomas",
      details: "source=github",
      severity: "info",
    },
    {
      timestamp: "2025-05-01T09:32:18Z",
      action: "POLICY_FAIL",
      user: "thomas",
      details: "Disaster Recovery tag not found (DORA 11.3.b)",
      severity: "critical",
    },
    {
      timestamp: "2025-05-01T09:33:44Z",
      action: "DEPLOY_ABORTED",
      user: "lorenz",
      details: "—",
      severity: "warning",
    },
    {
      timestamp: "2025-05-02T12:16:11Z",
      action: "VPN_RESTART",
      user: "daniel",
      details: "region=FI",
      severity: "info",
    },
    {
      timestamp: "2025-05-02T14:01:55Z",
      action: "AUDIT_EXPORT",
      user: "auditor-1",
      details: "hash=sha256:b73f9fa124c3db26f8100c123eaa987e0fa3a1a2d",
      severity: "info",
    },
  ];

  const filteredLogs = allLogs.filter((log) => {
    const matchUser = filters.user === "All Users" || log.user === filters.user;
    const matchAction = filters.action === "All Actions" || log.action === filters.action;
    const matchSeverity =
      filters.severity === "All Severities" || log.severity.toLowerCase() === filters.severity.toLowerCase();
    const matchDate =
      filters.date === "All Dates" || log.timestamp.includes(`2025-05-0${filters.date.slice(-1)}`);
    return matchUser && matchAction && matchSeverity && matchDate;
  });

  return (
    <div className="min-h-screen bg-[#fff] px-[40px] py-[32px] space-y-[40px]">
      <Topbar page="Audit Logs" />

      {/* Filter Panel */}
      <div className="w-[1140px] mx-auto mt-[12px]">
        <p className="text-[14px] font-semibold mb-[8px]">Filter Logs:</p>
        <div className="flex gap-[10px] items-center">
          <select
            value={filters.user}
            onChange={(e) => setFilters({ ...filters, user: e.target.value })}
            className="select"
          >
            <option>All Users</option>
            <option>thomas</option>
            <option>lorenz</option>
            <option>daniel</option>
            <option>auditor-1</option>
          </select>
          <select
            value={filters.action}
            onChange={(e) => setFilters({ ...filters, action: e.target.value })}
            className="select"
          >
            <option>All Actions</option>
            <option>DEPLOY_START</option>
            <option>POLICY_FAIL</option>
            <option>DEPLOY_ABORTED</option>
            <option>VPN_RESTART</option>
            <option>AUDIT_EXPORT</option>
          </select>
          <select
            value={filters.severity}
            onChange={(e) => setFilters({ ...filters, severity: e.target.value })}
            className="select"
          >
            <option>All Severities</option>
            <option>Critical</option>
            <option>Info</option>
            <option>Warning</option>
          </select>
          <select
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="select"
          >
            <option>All Dates</option>
            <option>May 1</option>
            <option>May 2</option>
          </select>
          <button
            className="btn btn-primary rounded-full p-[10px]"
            title="Apply filters to log stream"
          >
            Apply Filters 
          </button>
        </div>
      </div>

      {/* Log Viewer */}
      <div className="w-[1140px] h-[300px] mx-auto bg-[#FAFAFA] border border-[#E0E0E0] rounded-[8px] px-[20px] font-mono text-[13px] overflow-x-auto">
        <div className="grid grid-cols-4 gap-4 font-semibold text-[#6E6E6E] pb-[20px] pt-[20px] mb-3">
          <div className="sticky left-0 bg-[#FAFAFA] z-10">Timestamp</div>
          <div>Action</div>
          <div>User</div>
          <div>Details</div>
        </div>

        {filteredLogs.map((log, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 gap-4 py-[5px] pb-[10px] ${
              log.severity === "critical"
                ? "text-[#F44336]"
                : log.severity === "warning"
                ? "text-[#FF9800]"
                : "text-[#333]"
            }`}
          >
            <div>{log.timestamp}</div>
            <div className="flex items-center gap-[10px]">
              {log.action === "POLICY_FAIL" && <Ban size={14} />}
              {log.action === "DEPLOY_ABORTED" && <AlertTriangle size={14} />}
              {log.action === "DEPLOY_START" && <RotateCw size={14} />}
              {log.action === "VPN_RESTART" && <RotateCw size={14} />}
              {log.action === "AUDIT_EXPORT" && <CheckCircle size={14} />}
              {log.action}
            </div>
            <div>{log.user}</div>
            <div title={log.details} className="truncate">{log.details}</div>
          </div>
        ))}
      </div>

      {/* Footer Panel */}
      <div className="w-[1140px] mx-auto flex justify-between items-center mt-[24px]">
        <div className="text-[14px] font-mono text-[var(--color-text-secondary)] flex items-center gap-[20px]">
          <span className="flex items-center gap-[5px]">
            <LockKeyhole size={14} className="text-[#4CAF50]" />
            <span className="text-[#4CAF50]">Logs cryptographically signed (SHA-256)</span>
          </span>
          <span className="ml-[5px] text-[#555]">Log Hash: <span className="font-semibold">sha256:b73f9fa124c3d...1a2d</span></span>
          <span className="bg-[#E5FBE5] px-[5px] py-[3px] border border-[#4CAF50] rounded-[8px] text-[#2E7D32] text-[12px] flex items-center gap-[5px]">
            <CheckCircle size={12} /> Verified
          </span>
        </div>
        <div className="flex gap-[10px]">
          <button
            className="btn btn-primary "
            title="Includes logs + hash + JSON manifest"
          >
            <FileDown size={16} className="mr-[5px]" />
            Export Logs (.zip)
          </button>
          <button
            className="btn btn-primary"
            title="Send audit logs to external auditor"
          >
            <Share2 size={16} className="mr-[5px]" />
            Share with Auditor
          </button>
        </div>
      </div>
    </div>
  );
}
