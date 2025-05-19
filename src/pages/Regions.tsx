import mapImage from '../assets/MapChart_Map.png';
import Topbar from '../components/Topbar';

export default function Regions() {
  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px]  text-[#000]">
      {/* Top Navigation Bar */}
      <Topbar page="Regions"/>


      {/* Region Summary Table */}
      <section className="w-full max-w-[1140px] mx-auto">
        <h2 className="text-[16px] font-semibold mb-[20px]">Deployment Regions Summary</h2>
        <div className="grid grid-cols-6 bg-[#F0F0F0] py-[6px] px-[10px] font-semibold text-[13px]">
          <div>Region</div>
          <div>Status</div>
          <div>Latency</div>
          <div>Data Center</div>
          <div>Failover Ready</div>
          <div>DR Test Date</div>
        </div>
        {[
          ["Finland", "🟢 Active", "45ms", "Equinix HEL1", "Yes", "2025-05-12"],
          ["Sweden", "🟠 DR-Standby", "78ms", "Interxion STO2", "Yes", "2025-05-20"],
          ["Denmark", "⚫ Disabled", "—", "—", "No", "—"],
        ].map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-6 items-center px-[10px] py-[6px] text-[13px] ${
              i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
            } hover:bg-[#F5F5F5]`}
          >
            {row.map((cell, j) => (
              <div key={j} className="text-[#333]">{cell}</div>
            ))}
          </div>
        ))}
      </section>

      {/* Region Map Panel (Interactive) */}
      <div className="flex flex-col items-center gap-[10px]">
        <h2 className="text-[16px] font-semibold text-[var(--color-text)] self-start">Deployment Regions</h2>
        <div className="w-[800px] h-[280px] bg-[#F9FAFB] border border-[#E0E0E0] rounded-[8px] px-[24px] py-[16px] relative overflow-hidden">
          <img
            src={mapImage}
            alt="Map Background"
            className="absolute top-[0px] left-[-400px] w-[1330PX] h-full object-cover opacity-90 pointer-events-none"
          />
          {/* Finland */}
          <div className="absolute left-[450px] top-[165px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-success)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2">🇫🇮 Finland (Primary)</span>
            <div className="absolute right-[100%] top-[-150px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md p-3 w-[220px] text-[12px] z-10">
              <p className="font-semibold mb-1">🇫🇮 Finland</p>
              <p><span className="text-[#6E6E6E]">Status:</span> <span className="text-[#000]">Active</span></p>
              <p><span className="text-[#6E6E6E]">Location:</span> <span className="text-[#000]">Helsinki</span></p>
              <p><span className="text-[#6E6E6E]">Last Sync:</span> <span className="text-[#000]">May 7, 09:14 UTC</span></p>
              <p><span className="text-[#6E6E6E]">Avg Latency:</span> <span className="text-[#000]">45ms</span></p>
            </div>
          </div>

          {/* Sweden */}
          <div className="absolute left-[335px] top-[230px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-warning)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2">🇸🇪 Sweden (Failover)</span>
            <div className="absolute right-[100%] top-[-150px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md p-3 w-[220px] text-[12px] z-10">
              <p className="font-semibold mb-1">🇸🇪 Sweden</p>
              <p><span className="text-[#6E6E6E]">Status:</span> <span className="text-[#000]">Failover Ready</span></p>
              <p><span className="text-[#6E6E6E]">Location:</span> <span className="text-[#000]">Stockholm</span></p>
              <p><span className="text-[#6E6E6E]">Last Sync:</span> <span className="text-[#000]">May 6, 18:12 UTC</span></p>
              <p><span className="text-[#6E6E6E]">Avg Latency:</span> <span className="text-[#000]">78ms</span></p>
            </div>
          </div>

          {/* Denmark */}
          <div className="absolute left-[310px] top-[250px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-disabled)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2 ">🇩🇰 Denmark (Disabled)</span>
            <div className="absolute right-[100%] top-[-150px] px-[10px] ml-[5px] hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md p-3 w-[220px] text-[12px] z-10">
              <p className="font-semibold mb-1">🇩🇰 Denmak</p>
              <p><span className="text-[#6E6E6E]">Status:</span> <span className="text-[#000]">Disabled</span></p>
              <p><span className="text-[#6E6E6E]">Location:</span> <span className="text-[#000]">Copenhagen</span></p>
              <p><span className="text-[#6E6E6E]">Last Sync:</span> <span className="text-[#000]">—</span></p>
              <p><span className="text-[#6E6E6E]">Avg Latency:</span> <span className="text-[#000]">—</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Region Actions */}
      <section className="w-full max-w-[1140px] mx-auto">
        <h2 className="text-[16px] font-semibold mt-[40px] mb-[10px] ">Region Actions</h2>
        <div className="flex gap-[10px] ">
          <button className="btn-outline">Enable Region</button>
          <button className="btn-outline">Run DR Test</button>
          <button className="btn-outline">Sync Config</button>
        </div>
      </section>
    </div>
  );
}
