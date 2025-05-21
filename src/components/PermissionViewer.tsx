import { useState } from "react";

interface Permission {
  title: string;
  description: string;
}

interface PermissionViewerProps {
  permissions: Permission[];
  count: number;
  expanded?: boolean;
}

export default function PermissionViewer({ permissions, count, expanded = false }: PermissionViewerProps) {
  const [showAll, setShowAll] = useState(expanded);
  const visiblePermissions = showAll ? permissions : permissions.slice(0, 5);

  return (
    <div className="border-l-[4px] border-[#FFC107] bg-[#FFFFFF] px-[24px] py-[20px] mt-[30px] rounded-[8px] shadow-sm">
      <h3 className="text-[16px] font-semibold mb-[16px]">
        {count} sensitive permissions enabled
      </h3>

      <div className="space-y-[1px]">
        {visiblePermissions.map((perm, index) => (
          <div key={index}>
            <h4 className="text-[14px] font-semibold">{perm.title}</h4>
            <p className="text-[14px] text-[#444444]">{perm.description}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-[14px] text-[#1976D2] mt-[16px] border-none bg-transparent underline"
        >
          Show All {permissions.length}
        </button>
      )}
    </div>
  );
}
