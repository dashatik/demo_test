import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        className={`transition-all duration-300 ${
          collapsed ? "ml-[60px] w-[calc(100%-60px)]" : "ml-[220px] w-[calc(100%-220px)]"
        } bg-[#F9F9F9]`}
      >
        <Outlet />
      </div>
    </div>
  );
}
