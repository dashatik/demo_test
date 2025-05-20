import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User, Bell, Palette } from "lucide-react";


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
  <div className="flex justify-between items-center h-[80px] border-b border-[var(--color-border)]">
    <h1 className="text-[20px] font-semibold">{page}</h1>

    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-[8px] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
            <div className="flex flex-col text-[14px] text-left leading-tight">
            <span>Thomas Lodberg</span>
            <span className="text-[12px] text-[#888]">dewa</span>
            </div>
      </div>

      {open && (
        <div className="absolute right-0 mt-[8px] w-[230px] bg-[#1E1E1E] text-white rounded-[8px] shadow-lg ring-1 ring-[#2A2A2A] z-50">
          <div className="px-[16px] py-[8px] text-[14px] text-[#eee] font-medium border-b border-[#333]">user</div>
          <div className="flex flex-col text-[14px]">
            <Link to="/profile" className="flex items-center no-underline gap-[8px] px-[16px] py-[8px] text-[#eee] hover:bg-[#2A2A2A] transition-all">
              <User size={16} /> Profile
            </Link>
            <Link to="/profile/notifications" className="flex no-underline items-center gap-[8px] px-[16px] text-[#eee] py-[8px] hover:bg-[#2A2A2A]">
              <Bell size={16} /> Notification history
            </Link>
            <button className="appearance-none bg-transparent cursor-pointer border-none flex items-center gap-[8px] px-[16px] py-[8px]  hover:bg-[#2A2A2A] text-[#eee] text-left w-full">
              <Palette size={16} /> Change theme
            </button>
            <button
              onClick={handleLogout}
              className="appearance-none bg-transparent cursor-pointer border-none flex items-center gap-[8px] px-[16px] py-[10px] rounded-[8px] text-[#eee] hover:bg-[#2A2A2A] text-left w-full"
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