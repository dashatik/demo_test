import { useState } from "react";
import Topbar from "../components/Topbar";
import { Info } from "lucide-react";

interface Notification {
  id: number;
  message: string;
  timestamp: string;
  dismissed: boolean;
}

const initialNotifications: Notification[] = [
  { id: 1, message: "Failed to fetch", timestamp: "4 days ago", dismissed: false },
  { id: 2, message: "Unauthorized", timestamp: "4 days ago", dismissed: false },
  { id: 3, message: "Timeout during sync", timestamp: "3 days ago", dismissed: false },
  { id: 4, message: "API token expired", timestamp: "2 days ago", dismissed: false },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleDismiss = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, dismissed: !n.dismissed } : n))
    );
  };

  const dismissSelected = () => {
    setNotifications((prev) => prev.filter((n) => !n.dismissed));
  };

  const hasSelection = notifications.some((n) => n.dismissed);

  return (
    <div className="min-h-screen px-[40px] py-[32px]">
      <Topbar page="Notification history" />

      <div className="bg-[#E3F2FD] border border-[#90CAF9] text-[#0D47A1] rounded-[8px] px-[16px] py-[12px] flex items-start gap-[10px] mb-[24px] text-[14px]">
        <Info size={20} className="mt-[2px]" />
        <span>
          This page displays past errors and warnings. Once dismissed, they cannot be retrieved.
        </span>
      </div>

      <div className="flex justify-between items-center mb-[16px]">
        <div />
        <button
          onClick={dismissSelected}
          className="text-[14px] px-[12px] py-[8px] rounded-[6px] border-none bg-[var(--color-error)] text-white hover:bg-[#c62828] disabled:opacity-50"
          disabled={!hasSelection}
        >
          Dismiss notifications
        </button>
      </div>

        <ul className="space-y-[12px]">
        {notifications.map((n) => (
            <li key={n.id}>
            <div
                onClick={() => toggleDismiss(n.id)}
                className={`flex justify-between items-center border border-[#CCC] rounded-[6px] px-[16px] py-[12px] bg-white cursor-pointer transition-colors
                ${n.dismissed ? "bg-[#FDECEA] border-[var(--color-error)]" : "hover:bg-[#F9F9F9]"}`}
            >
                <div className="text-[14px] font-medium">{n.message}</div>
                <div className="flex items-center gap-[16px]">
                <input
                    type="checkbox"
                    checked={n.dismissed}
                    readOnly
                    className="accent-[var(--color-error)] pointer-events-none"
                />
                <span className="text-[12px] text-[#999]">{n.timestamp}</span>
                </div>
            </div>
            </li>
        ))}
        </ul>
    </div>
  );
}
