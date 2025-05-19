import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#F9F9F9]">
        <Outlet />
      </div>
    </div>
  );
}