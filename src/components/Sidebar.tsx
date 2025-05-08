import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Just-T-logo.png";

const navItems = [
  { to: "/", label: "Overview", icon: "📊" },
  { to: "/infrastructure", label: "Infrastructure", icon: "🧱" },
  { to: "/deployments", label: "Deployments", icon: "🚀" },
  { to: "/audit-logs", label: "Audit Logs", icon: "📝" },
  { to: "/finops", label: "FinOps", icon: "💰" },
  { to: "/regions", label: "Regions", icon: "🌍" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-[#1E1E1E] text-white flex flex-col justify-between px-4 py-6 z-50">
      {/* Top Branding & Nav */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-center mt-[20px] ">
          <img src={logo} alt="Transtar logo" className="w-[70px] h-auto" />
        </div>

        <nav className="sidebar-nav flex flex-col gap-3">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium ${
                location.pathname === to ? "active" : ""
              }`}
            >
              <span className="text-[16px]">{icon}</span>
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
