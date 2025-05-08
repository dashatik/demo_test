import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Infrastructure from './pages/Infrastructure';
import Deployments from './pages/Deployments';
import AuditLogs from './pages/AuditLogs';
import FinOps from './pages/FinOps';
import Regions from './pages/Regions';
import Sidebar from './components/Sidebar';
import './App.css';

export default function App() {
  return (
    <>
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
    </>
  );
}