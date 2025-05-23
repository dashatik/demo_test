import mapImage from '../assets/MapChart_Map.png';

export default function Map() {
  return (

      <div className="flex flex-col items-center gap-4">
        <div className="w-[660px] h-[280px] bg-[#F9FAFB] border border-[#E0E0E0] rounded-[8px] px-[24px] py-[16px] relative overflow-hidden ">
          <img
            src={mapImage}
            alt="Map Background"
            loading="eager"
            className="absolute top-[0px] left-[-400px] w-[1330PX] h-full object-cover opacity-90 pointer-events-none"
          />
          {/* Finland */}
          <div className="absolute left-[450px] top-[165px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-warning)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2">🇫🇮 Finland (Primary)</span>
            <div className="absolute right-[100%] top-[-150px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md pb-[10px] w-[220px] text-[12px] z-10">
            <p className="font-semibold mb-2">🇫🇮 Equinix HEL1</p>
            <div className="grid grid-cols-2 gap-y-[4px]">
              <span className="text-[#6E6E6E]">Status:</span>
              <span className="text-[#000]">Active</span>

              <span className="text-[#6E6E6E]">Location:</span>
              <span className="text-[#000]">Helsinki</span>

              <span className="text-[#6E6E6E]">Last Sync:</span>
              <span className="text-[#000]">May 7, 09:14 UTC</span>

              <span className="text-[#6E6E6E]">Avg Latency:</span>
              <span className="text-[#000]">45ms</span>

              <span className="text-[#6E6E6E]">Uptime %:</span>
              <span className="text-[#000]">99.97%</span>

              <span className="text-[#6E6E6E]">P95 Latency:</span>
              <span className="text-[#000]">45ms</span>

              <span className="text-[#6E6E6E]">DR Test:</span>
              <span className="text-[#000]">May 25</span>
            </div>
          </div>
          </div>

          {/* Sweden */}
          <div className="absolute left-[335px] top-[230px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-warning)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2">🇸🇪 Sweden (Failover)</span>
              <div className="absolute right-[100%] top-[-210px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md pb-[10px] w-[220px] text-[12px] z-10">
                <p className="font-semibold mb-2">🇸🇪 Interxion STO2</p>
                <div className="grid grid-cols-2 gap-y-[4px]">
                  <span className="text-[#6E6E6E]">Status:</span>
                  <span className="text-[#000]">Failover Ready</span>

                  <span className="text-[#6E6E6E]">Location:</span>
                  <span className="text-[#000]">Stockholm</span>

                  <span className="text-[#6E6E6E]">Last Sync:</span>
                  <span className="text-[#000]">May 6, 18:12 UTC</span>
                  <span className="text-[#6E6E6E]">Avg Latency:</span>
                  <span className="text-[#000]">78ms</span>

                  <span className="text-[#6E6E6E]">Uptime %:</span>
                  <span className="text-[#000]">99.97%</span>

                  <span className="text-[#6E6E6E]">P95 Latency:</span>
                  <span className="text-[#000]">78ms</span>

                  <span className="text-[#6E6E6E]">DR Test:</span>
                  <span className="text-[#000]">May 25</span>
                </div>
              </div>
              </div>

          {/* Denmark */}
          <div className="absolute left-[310px] top-[250px] flex items-center group gap-[5px]">
            <div className="w-[14px] h-[14px] bg-[var(--color-disabled)] rounded-full" />
            <span className="text-[13px] font-bold text-[#eee] bg-[#212121] px-[5px] pl-2 ">🇩🇰 Denmark (Disabled)</span>
              <div className="absolute right-[100%] top-[-200px] px-[10px] ml-3 hidden group-hover:block bg-[#eee] border border-[#CCC] rounded shadow-md pb-[10px] w-[220px] text-[12px] z-10">
                <p className="font-semibold mb-2">🇩🇰 Denmark</p>
                <div className="grid grid-cols-2 gap-y-[4px]">
                  <span className="text-[#6E6E6E]">Status:</span>
                  <span className="text-[#000]">Disabled</span>

                  <span className="text-[#6E6E6E]">Location:</span>
                  <span className="text-[#000]">Copenhagen</span>

                  <span className="text-[#6E6E6E]">Last Sync:</span>
                  <span className="text-[#000]">—</span>

                  <span className="text-[#6E6E6E]">Avg Latency:</span>
                  <span className="text-[#000]">—</span>

                  <span className="text-[#6E6E6E]">Uptime %:</span>
                  <span className="text-[#000]">—</span>

                  <span className="text-[#6E6E6E]">P95 Latency:</span>
                  <span className="text-[#000]">—</span>

                  <span className="text-[#6E6E6E]">DR Test:</span>
                  <span className="text-[#000]">—</span>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}