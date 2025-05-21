import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Just-T-logo.png";
import {
  LayoutDashboard,
  Server,
  Rocket,
  ScrollText,
  Wallet,
  Globe,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Overview", icon: <LayoutDashboard size={18} /> },
  { to: "/infrastructure", label: "Infrastructure", icon: <Server size={18} /> },
  { to: "/deployments", label: "Deployments", icon: <Rocket size={18} /> },
  { to: "/audit-logs", label: "Audit Logs", icon: <ScrollText size={18} /> },
  { to: "/finops", label: "FinOps", icon: <Wallet size={18} /> },
  { to: "/regions", label: "Regions", icon: <Globe size={18} /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-[#1E1E1E] text-white flex flex-col justify-between px-4 py-6 z-50">
      {/* Top Branding & Nav */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex pl-[15px] mt-[20px]">
          <img src={logo} alt="Transtar logo" className="w-[70px] h-auto" />
        </div>

        <nav className="sidebar-nav flex flex-col gap-[5px]">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-[16px] px-[5px] py-[5px] rounded-md text-[14px] font-medium ${
                location.pathname === to ? "active" : ""
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* VPN Status */}
      <div className=" rounded-lg px-[60px] py-3 text-white text-[13px] flex flex-col gap-2 mb-[20px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
          <span className="font-semibold text-[#fff]">VPN Connected</span>
        </div>
        <div className="text-[12px] text-[#B0B0B0]">IP: 192.168.0.1</div>
        <div className="text-[12px] text-[#B0B0B0]">Location: Helsinki</div>
      </div>
    </aside>
  );
}