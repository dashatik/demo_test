import PermissionGroup from "../components/PermissionGroup";
import Topbar from "../components/Topbar";

export default function Profile() {
  return (
<div className="min-h-screen px-[40px] py-[32px]">
      <Topbar page="Profile" />
      <div>
        <p className="text-[14px] text-[#666]">
          This section contains account information and current role access.
        </p>
      </div>

      {/* Meta Info */}
      <div className="grid grid-cols-3 gap-y-[24px] gap-x-[16px]">
        <div>
          <h4 className="text-[14px] font-semibold mb-[4px]">Status</h4>
          <span className="text-green-600 text-[14px] font-medium">Active</span>
        </div>
        <div>
          <h4 className="text-[14px] font-semibold mb-[4px]">Created</h4>
          <span className="text-[14px] text-[#333]">May 05 2025 22:37</span>
        </div>
        <div>
          <h4 className="text-[14px] font-semibold mb-[4px]">Last Modified</h4>
          <span className="text-[14px] text-[#333]">May 05 2025 22:45</span>
        </div>
        <div>
          <h4 className="text-[14px] font-semibold mb-[4px]">Teams</h4>
          <span className="text-[14px] text-[#333]">Member: <span className="text-[#888]">None</span></span>
        </div>
        <div>
          <h4 className="text-[14px] font-semibold mb-[4px]">Roles</h4>
          <span className="inline-block bg-[#E5F4FF] text-[#005FAD] text-[13px] px-[8px] py-[4px] rounded">
            Transtar User Role
          </span>
        </div>
        <div>
          <h4 className="text-[14px] font-semibold mb-[4px]">Login Methods</h4>
          <span className="text-[14px] text-[#333]">Default / <span className="text-green-600">Verified</span></span>
        </div>
      </div>

      {/* Permissions */}
    <div className="p-[32px]">
        <h1 className="text-[20px] font-semibold mb-[16px]">Permissions</h1>
        <PermissionGroup
            title="Access Management"
            summary="1 Read - 5 Write"
            permissions={[
            "User Access Manage",
            "Org Management",
            "User Access Invite",
            "Service Account Write",
            "Org Connections Write",
            "Org Connections Read",
            ]}
        />
              <PermissionGroup
        title="Log Management"
        summary="6 Read - 12 Write"
        permissions={[
          "Logs Read Index Data",
          "Logs Read Data",
          "Logs Live Tail",
          "Logs Write Facets",
          "Logs Modify Indexes",
          "Logs Write Exclusion Filters",
          "Logs Write Pipelines",
          "Logs Write Processors",
          "Logs Read Archives",
          "Logs Write Archives",
          "Logs Generate Metrics",
          "Logs Write Historical Views",
          "Logs Delete Data",
          "Logs Write Forwarding Rules",
        ]}
      />
        </div>
    </div>
  );
}