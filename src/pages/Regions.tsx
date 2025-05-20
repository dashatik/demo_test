import Topbar from '../components/Topbar';
import Map from '../components/Map';

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
        <Map/>
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
