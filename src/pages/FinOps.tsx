import React, { useState } from "react";

export default function FinOps() {
  const [regions, setRegions] = useState(2);
  const projectedCost = 1200 + 300 + 400 + 800 + regions * 275;
  const warning = projectedCost > 4000;

  return (
    <div className="w-[1220px] h-[960px] bg-[#F9F9F9] font-[Inter] text-[#000]">
      {/* Top Navigation Bar */}
      <div className="h-[80px] bg-white flex justify-between items-center px-[40px]">
        <h1 className="text-[20px] font-semibold">FinOps</h1>
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300" />
          <span className="text-[14px]">NordLedger (Admin)</span>
        </div>
      </div>

      {/* Cost Comparison Chart */}
      <div className="mt-[32px] w-[1140px] mx-auto">
        <h2 className="text-[16px] font-semibold mb-4">Cost Breakdown: Transtar vs AWS</h2>
        {[
          { label: "Compute", transtar: 1200, aws: 2000 },
          { label: "Bandwidth", transtar: 300, aws: 800 },
          { label: "Logging", transtar: 400, aws: 900 },
          { label: "Disaster Recovery", transtar: 800, aws: 900 },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <div className="text-[13px] mb-1">{item.label}</div>
            <div className="flex items-center gap-2">
              <div className="bg-[#4CAF50] h-[36px]" style={{ width: `${item.transtar / 20}px` }}></div>
              <div className="bg-[#BDBDBD] h-[36px]" style={{ width: `${item.aws / 20}px` }}></div>
              <div className="text-[13px] ml-2">Transtar €{item.transtar} / AWS €{item.aws}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Forecast Slider */}
      <div className="mt-[40px] w-[1140px] mx-auto">
        <h2 className="text-[16px] font-semibold mb-2">Projected Cost for Multi-Region Scaling</h2>
        <input
          type="range"
          min="0"
          max="5"
          value={regions}
          onChange={(e) => setRegions(Number(e.target.value))}
          className="w-full appearance-none h-2 bg-gray-300 rounded outline-none"
        />
        <div className="text-[13px] mt-2">
          Additional Regions: {regions} — <span className={warning ? "text-orange-500 font-semibold" : ""}>
            Projected Monthly Cost: €{projectedCost.toLocaleString()}</span>
        </div>
      </div>

      {/* Detailed Cost Table */}
      <div className="mt-[40px] w-[1140px] mx-auto">
        <h2 className="text-[16px] font-semibold mb-4">Monthly Cost Composition</h2>
        <div className="grid grid-cols-4 font-semibold bg-[#F0F0F0] py-2 px-4 text-[13px]">
          <div>Service</div>
          <div>Cost (€)</div>
          <div>% of Total</div>
          <div>Savings vs AWS (%)</div>
        </div>
        {[
          { service: "Compute", cost: 1200, percent: 37, savings: 40 },
          { service: "Bandwidth", cost: 300, percent: 9, savings: 62 },
          { service: "Logging", cost: 400, percent: 11, savings: 56 },
          { service: "Disaster Recovery", cost: 800, percent: 23, savings: 11 },
        ].map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-4 items-center text-[13px] px-4 py-2 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}
          >
            <div>{item.service}</div>
            <div className="flex items-center gap-2">
              <div
                className="h-[10px] bg-[#4CAF50]"
                style={{ width: `${item.percent * 2}px` }}
              ></div>
              €{item.cost}
            </div>
            <div>{item.percent}%</div>
            <div className={item.savings > 25 ? "text-[#4CAF50]" : ""}>{item.savings}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}