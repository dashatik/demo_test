import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
