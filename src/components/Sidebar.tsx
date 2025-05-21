import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Just-T-logo.png";
import {
  LayoutDashboard,
  Server,
  Rocket,
  ScrollText,
  Wallet,
  Globe,
  X,
  Menu,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/infrastructure", label: "Infrastructure", icon: Server },
  { to: "/deployments", label: "Deployments", icon: Rocket },
  { to: "/audit-logs", label: "Audit Logs", icon: ScrollText },
  { to: "/finops", label: "FinOps", icon: Wallet },
  { to: "/regions", label: "Regions", icon: Globe },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen ${
        collapsed ? "w-[60px]" : "w-[220px]"
      } bg-[#1E1E1E] text-white flex flex-col justify-between px-4 py-6 z-50 transition-all duration-300`}
    >
      {/* Top: Logo + Toggle */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between items-center px-[8px] mt-[20px] mb-[10px]">
          {!collapsed && (
            <img
              src={logo}
              alt="Transtar logo"
              className="w-[70px] h-auto ml-[5px]"
            />
          )}
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="text-[#fff] ml-auto p-1 bg-transparent hover:text-[#aaa] border-none"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="sidebar-nav flex flex-col gap-[5px]">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center ${
                collapsed ? "justify-center" : "gap-[16px]"
              } px-[5px] py-[5px] rounded-md text-[14px] font-medium ${
                location.pathname === to ? "active bg-[#333]" : ""
              }`}
              title={collapsed ? label : ""}
            >
              <Icon size={18} />
              {!collapsed && <span>{label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom: VPN Status */}
      {!collapsed && (
        <div className="rounded-lg px-[60px] py-[5px] text-white text-[13px] flex flex-col gap-2 mb-[20px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
            <span className="font-semibold text-[#fff]">VPN Connected</span>
          </div>
          <div className="text-[12px] text-[#B0B0B0]">IP: 192.168.0.1</div>
          <div className="text-[12px] text-[#B0B0B0]">Location: Helsinki</div>
        </div>
      )}
    </aside>
  );
}
