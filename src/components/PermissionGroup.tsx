// src/components/PermissionGroup.tsx
import { Check } from "lucide-react";

interface PermissionGroupProps {
  title: string;
  summary: string;
  permissions: string[];
}

export default function PermissionGroup({
  title,
  summary,
  permissions,
}: PermissionGroupProps) {
  return (
    <details className="border border-[#E0E0E0] rounded-md">
      <summary className="flex items-center justify-between px-[16px] py-[12px] bg-[#F1FAFF] cursor-pointer select-none">
        <div className="flex items-center gap-[8px] font-semibold text-[#1A1A1A]">
          <span>👥</span>
          {title}
        </div>
        <div className="text-[14px] text-[#666]">{summary}</div>
      </summary>

      <ul className="divide-y divide-[#F0F0F0]">
        {permissions.map((item) => (
          <li key={item} className="flex justify-between items-center px-[16px] py-[12px]">
            <span className="text-[#1A1A1A]">{item}</span>
            <Check className="text-[#4CAF50]" size={18} />
          </li>
        ))}
      </ul>
    </details>
  );
}
