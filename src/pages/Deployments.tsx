import { useState } from "react";
import Topbar from "../components/Topbar";
import {
  AlertTriangle,
  BadgeCheck,
  Ban,
  TriangleAlert,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Deployments() {
  const [redeployed, setRedeployed] = useState(false);

  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]">
      <Topbar page="Deployments" />

      {/* Alert or Success Banner */}
      {!redeployed ? (
        <div className="w-[1140px] mx-auto bg-[#FFF5F5] border-l-[4px] rounded-[8px] border-[var(--color-error)] px-[20px] py-[16px] shadow-sm relative">
          <div className="flex items-start gap-[10px] w-full">
            <AlertTriangle className="text-[var(--color-error)]" size={20} />
            <div className="flex-1">
              <div className="flex items-center gap-[10px]">
                <p className="text-[16px] font-semibold text-[var(--color-error)]">Deployment Blocked</p>
                <span className="text-xs px-[10px] py-[2px] rounded-[8px] bg-[#FFCDD2] text-[#B71C1C] font-medium">
                  Critical · Policy Compliance
                </span>
              </div>
              <p className="text-[14px] text-[var(--color-text-secondary)]">
                Policy enforcement failure - Missing disaster recovery tag (
                <span className="underline cursor-pointer group relative text-[#C62828]">
                  DORA 11.3.b
                  <div className="absolute left-[100px] top-[-12px] z-50 hidden group-hover:block bg-[#fff]  px-[10px] py-[5px] rounded-[8px] text-[12px] text-[#111] mt-2 w-[240px] shadow">
                    Requires all production deployments to include a disaster recovery label.
                  </div>
                </span>
                )
              </p>
            </div>
            <div className="absolute right-[20px] top-[12px] text-[12px] font-mono text-[#999]">
              May 5, 2025 — 13:04 UTC
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[1140px] mx-auto bg-[#E5FBE5] border-l-[4px] border-[#4CAF50] px-[20px] py-[16px] rounded-[8px] shadow-sm flex items-start gap-[10px]">
          <CheckCircle className="text-[#4CAF50]" size={20} />
          <div>
            <p className="text-[15px] font-semibold text-[#2E7D32]">Deployment validated. Policy checks passed.</p>
            <p className="text-[13px] text-[#444]">Active in cluster within 2 minutes.</p>
          </div>
        </div>
      )}

      {/* YAML Viewer */}
      <div className="w-[1140px] mx-auto ">
        {!redeployed ? (
          <div className="grid grid-cols-2 gap-[20px]">
            {/* Attempted.yaml */}
            <div className="relative bg-[#FAFAFA] border border-[#DDDDDD] rounded-[8px] overflow-y-auto text-[12px] font-mono leading-[1.6]">
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#F44336] rounded-l " />
              <div className="flex items-center justify-between mb-[5px] px-[20px] mt-[20px] ">
                <span className="text-[14px] font-semibold text-black ">Attempted.yaml</span>
                <span className="text-xs px-[5px] py-[2px] bg-[#FFF5F5] text-[var(--color-error)] rounded-[8px] font-medium">
                  <Ban size={12} className="inline mr-[4px]" /> Blocked by DORA-11.3.b
                </span>
              </div>
              <pre className="whitespace-pre-wrap text-[#333333] px-[20px] mb-[20px]">
  {`apiVersion: apps/v1
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
  -       # dr-policy: missing`}
              </pre>
            </div>

            {/* Validated.yaml */}
            <div className="relative bg-[#FAFAFA] border border-[#DDDDDD] rounded-[8px] overflow-y-auto text-[12px] font-mono leading-[1.6]">
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#4CAF50] rounded-l" />
              <div className="flex items-center justify-between mb-[5px] px-[20px] mt-[20px]"> 
                <span className="text-[14px] font-semibold text-black">Validated.yaml</span>
                <span className="text-xs px-[5px] py-[2px] bg-[#E5FBE5] text-[#2E7D32] rounded-[8px] font-medium">
                  <CheckCircle size={12} className="inline mr-[4px]" /> Validated
                </span>
              </div>
              <pre className="whitespace-pre-wrap text-[#333333] px-[20px] mb-[20px]">
  {`apiVersion: apps/v1
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
          dr-policy: enabled`}
              </pre>
            </div>
          </div>
        ) : (
          <div className="relative bg-[#FAFAFA] border border-[#DDDDDD] rounded-[8px] overflow-y-auto text-[12px] font-mono leading-[1.6]">
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#4CAF50] rounded-l" />
            <div className="flex items-center justify-between mb-[5px] px-[20px] mt-[20px]">
              <span className="text-[14px] font-semibold text-black">Final.yaml</span>
              <span className="text-xs px-[5px] py-[2px] bg-[#E5FBE5] text-[#2E7D32] rounded-[8px] font-medium">
                <BadgeCheck size={12} className="inline mr-[4px]" /> Live in Cluster
              </span>
            </div>
            <pre className="whitespace-pre-wrap text-[#333333] px-[20px] mb-[20px]">
  {`apiVersion: apps/v1
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
          dr-policy: enabled`}
            </pre>
          </div>
        )}
      </div>

      {/* Button Area */}
      <div className="w-[1140px] mx-auto flex justify-between mt-[24px]">
        <div className="text-[13px] text-[#444] font-medium">
          Cluster: <span className="font-semibold text-[#000]">prod-dewa-01 (EU-DK)</span> · OPA Gatekeeper
        </div>
        {!redeployed && (
          <button
            onClick={() => setRedeployed(true)}
            className="btn btn-primary flex items-center gap-[5px]"
          >
            <ArrowRight size={16} />
            Fix and Redeploy
          </button>
        )}
      </div>

      {/* Recent Deployments Table */}
      <div className="w-[1140px] mx-auto mt-[40px]">
        <div className="w-full flex items-center justify-between py-[5px] pb-[10px] border-b border-[var(--color-border)] bg-[#F9FAFB] text-[14px] font-semibold text-[#000]">
          <div className="w-1/4 text-left">Date</div>
          <div className="w-1/4 text-left">Status</div>
          <div className="w-1/4 text-left">Policy Triggered</div>
          <div className="w-1/4 text-left">Commit ID</div>
        </div>
        {[
          {
            date: "May 5, 2025",
            time: "13:04 UTC",
            status: "blocked",
            policy: "DORA-11.3b",
            commit: "cf4a87d",
          },
          {
            date: "May 3, 2025",
            time: "11:12 UTC",
            status: "passed",
            policy: "—",
            commit: "a92bd91",
          },
          {
            date: "May 1, 2025",
            time: "09:33 UTC",
            status: "warning",
            policy: "GDPR-Encryption",
            commit: "b1a4d12",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center text-[13px] text-[#333] py-[12px] border-b hover:bg-[#FAFAFA]"
          >
            <div>
              <div>{item.date}</div>
              <div className="text-[11px] text-[#777]">{item.time}</div>
            </div>
            <div className="flex items-center gap-[5px]">
              {item.status === "passed" && <CheckCircle size={14} className="text-[#4CAF50]" />}
              {item.status === "blocked" && <Ban size={14} className="text-[#F44336]" />}
              {item.status === "warning" && <TriangleAlert size={14} className="text-[#FF9800]" />}
              <span className="capitalize">{item.status}</span>
            </div>
            <div className="text-[#444] group relative cursor-pointer">
              {item.policy}
              {item.policy === "DORA-11.3b" && (
                <div className="absolute hidden group-hover:block bg-[#fff]  px-[5px] py-[5px] text-[12px] rounded-[8px] shadow w-[220px] mt-[8px] z-10">
                  All production deployments must contain a DR tag (dr-policy: enabled)
                </div>
              )}
            </div>
            <div
              className="text-blue-600 underline cursor-pointer"
              title="Click to view commit"
            >
              {item.commit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
