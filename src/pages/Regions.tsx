

export default function Regions() {
  return (
    <div className="w-[1220px] h-[960px] bg-[#F9F9F9] font-[Inter] text-[#000]">
      {/* Top Navigation Bar */}
      <div className="h-[80px] bg-white flex justify-between items-center px-[40px]">
        <h1 className="text-[20px] font-semibold">Regions</h1>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>
      </div>

      {/* Region Summary Table */}
      <div className="mt-[24px] w-[1140px] mx-auto">
        <h2 className="text-[16px] font-semibold mb-4">Deployment Regions Summary</h2>
        <div className="grid grid-cols-6 font-semibold bg-[#F0F0F0] py-2 px-4 text-[13px]">
          <div>Region</div>
          <div>Status</div>
          <div>Latency</div>
          <div>Data Center</div>
          <div>Failover Ready</div>
          <div>DR Test Date</div>
        </div>
        {[
          ["Finland", "✅ Active", "45ms", "Equinix HEL1", "Yes", "2025-05-12"],
          ["Sweden", "🟠 DR-Standby", "78ms", "Interxion STO2", "Yes", "2025-05-20"],
          ["Germany", "⚫ Disabled", "—", "—", "No", "—"]
        ].map((row, i) => (
          <div key={i} className={`grid grid-cols-6 px-4 py-2 text-[13px] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
            {row.map((cell, j) => <div key={j}>{cell}</div>)}
          </div>
        ))}
      </div>

      {/* Interactive Region Map */}
      <div className="mt-[40px] w-[1140px] h-[280px] mx-auto bg-gray-100 rounded relative">
        <div className="absolute top-[60px] left-[120px] text-[#4CAF50]">● Helsinki</div>
        <div className="absolute top-[120px] left-[240px] text-[#FF9800]">● Stockholm</div>
        <div className="absolute top-[180px] left-[360px] text-[#BDBDBD]">● Frankfurt</div>
      </div>

      {/* Region Action Panel */}
      <div className="mt-[40px] w-[1140px] mx-auto">
        <h2 className="text-[16px] font-semibold mb-4">Region Actions</h2>
        <div className="flex gap-4">
          <button className="border border-[#4CAF50] text-[#4CAF50] bg-white hover:bg-[#4CAF50] hover:text-white text-[13px] py-[8px] px-[16px] rounded-[6px]">
            Enable Region
          </button>
          <button className="border border-[#4CAF50] text-[#4CAF50] bg-white hover:bg-[#4CAF50] hover:text-white text-[13px] py-[8px] px-[16px] rounded-[6px]">
            Run DR Test
          </button>
          <button className="border border-[#4CAF50] text-[#4CAF50] bg-white hover:bg-[#4CAF50] hover:text-white text-[13px] py-[8px] px-[16px] rounded-[6px]">
            Sync Config
          </button>
        </div>
      </div>
    </div>
  );
}