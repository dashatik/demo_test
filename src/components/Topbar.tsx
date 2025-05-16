import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User, Bell, Key, Palette, Monitor, Rss } from "lucide-react";

interface TopbarProps {
  page: string;
}

export default function Topbar({ page }: TopbarProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-[80px] border-b border-[var(--color-border)] px-[40px]">
      <h1 className="text-[20px] font-semibold">{page}</h1>
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>

            {open && (
            <div className="absolute right-0 mt-2 w-[260px] bg-[#1E1E1E] text-white rounded-lg shadow-lg ring-1 ring-[#2A2A2A] z-50">
                <div className="px-4 py-2 text-[14px] font-medium border-b border-[#333]">admin</div>
                <div className="flex flex-col text-[14px]">
                <Link to="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] transition-all">
                    <User size={16} /> Profile
                </Link>
                <Link to="/profile/notifications" className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A]">
                    <Bell size={16} /> Notification history
                </Link>
                <Link to="/profile/password" className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A]">
                    <Key size={16} /> Change password
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] text-left w-full">
                    <Palette size={16} /> Change theme
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] text-left w-full">
                    <Monitor size={16} /> Enable kiosk mode
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] text-left w-full">
                    <Rss size={16} /> Latest from the blog
                </button>
                <div className="border-t border-[#333] my-1" />
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] text-left w-full"
                >
                    <LogOut size={16} /> Sign out
                </button>
                </div>
            </div>
            )}
      </div>
    </div>
  );
}