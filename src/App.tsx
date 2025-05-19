import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Infrastructure from './pages/Infrastructure';
import Deployments from './pages/Deployments';
import AuditLogs from './pages/AuditLogs';
import FinOps from './pages/FinOps';
import Regions from './pages/Regions';
import Sidebar from './components/Sidebar';
import Login from "./pages/Login";
import AuthWrapper from "./components/AuthWrapper";
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <AuthWrapper>
            <div className="flex">
              <Sidebar />
              <main className="ml-[220px] w-[calc(100%-220px)] h-screen overflow-y-auto bg-[#F9FAFC]">
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/infrastructure" element={<Infrastructure />} />
                  <Route path="/deployments" element={<Deployments />} />
                  <Route path="/audit-logs" element={<AuditLogs />} />
                  <Route path="/finops" element={<FinOps />} />
                  <Route path="/regions" element={<Regions />} />
                </Routes>
              </main>
            </div>
          </AuthWrapper>
        }
      />
    </Routes>
  );
}