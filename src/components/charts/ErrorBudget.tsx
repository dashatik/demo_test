import { useEffect, useState } from "react";

export default function ErrorBudget() {
  const [fill, setFill] = useState(0);
  const percentage = 12;

  useEffect(() => {
    const timeout = setTimeout(() => setFill(percentage), 300);
    return () => clearTimeout(timeout);
  }, []);

  let barColor = "#4CAF50"; // Green
  if (percentage > 20) barColor = "#F44336"; // Red
  else if (percentage > 10) barColor = "#F59E0B"; // Orange

  return (
    <div className="h-[200px] card p-[16px] rounded-[8px] shadow bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-[#111827] mb-[6px]">Error Budget</h3>
        <p className="text-[22px] font-bold" style={{ color: barColor }}>{percentage}% spent</p>
        <p className="text-xs text-[#6B7280]">12% SLO budget spent due to API latency spikes</p>
      </div>
      <div className="relative w-full h-[10px] bg-[#E5E7EB] rounded-full mt-2">
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
          style={{ width: `${fill}%`, backgroundColor: barColor }}
        />
      </div>
      <div className="text-right text-[11px] text-[#6B7280] mt-1">Budget resets: May 15</div>
    </div>
  );
}