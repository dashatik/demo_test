import PermissionGroup from "../components/PermissionGroup";
import Topbar from "../components/Topbar";
import { Pencil } from "lucide-react";
import PermissionViewer from "../components/PermissionViewer";


export default function Profile() {
  return (
<div className="min-h-screen px-[40px] py-[32px]">
      <Topbar page="Profile" />
      <div>
        <p className="text-[14px] text-[#666]">
          This section contains account information and current role access.
        </p>
      </div>
      <div
        className="relative h-[160px] flex items-end justify-between rounded-[8px] px-[40px] pb-[24px] text-white"
        style={{
            backgroundImage: "url('/bgh1-LQ.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
        <div> 
          <h1 className="text-[24px] text-[#fff] font-semibold">Thomas Lodberg</h1>
          <p className="text-[14px] text-[#fff]">thomas@dewa-id.com</p>
        </div>
        <div className="absolute right-[40px] bottom-[-40px]">
          <div className="w-[80px] h-[80px] rounded-full bg-[#7C1D1D] flex items-center justify-center text-[32px] text-white border-4 border-white">
            {/* Placeholder avatar */}
            <span>🧩</span>
          </div>
        </div>
      </div>
      {/* Floating Edit Button */}
      <div className=" mt-[10px] flex items-center gap-[10px]">
        <button className="btn btn-primary flex items-center gap-[5px] text-[14px] font-medium px-[5px] py-[2px] transition">
          <Pencil size={14} /> Edit
        </button>
        <span className="text-[12px] px-[5px] py-[2px] rounded-[3px] bg-[#4CAF50] text-[#fff] font-semibold">ACTIVE</span>
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
        <PermissionViewer
        count={18}
        permissions={[
            {
            title: "User Access Manage",
            description: "Disable users, manage user roles, manage SAML-to-role mappings, and configure logs restriction queries."
            },
            {
            title: "Org Management",
            description: "Edit org configurations, including authentication and certain security preferences such as configuring SAML, renaming an org, configuring allowed login methods, creating child orgs, subscribing & unsubscribing from apps in the marketplace, and enabling & disabling Remote Configuration for the entire organization."
            },
            {
            title: "User Access Invite",
            description: "Invite other users to your organization."
            },
            {
            title: "User App Keys",
            description: "View and manage Application Keys owned by the user."
            },
            {
            title: "Org App Keys Write",
            description: "Manage Application Keys owned by all users in the organization."
            },
            // add 13 more permissions here or just duplicate
        ]}
        />
      {/* Permissions */}
    <div className="pt-[30px]">
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