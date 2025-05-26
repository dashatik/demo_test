
import { type Dispatch, type SetStateAction } from "react";

interface ScalingForecastProps {
  regions: number;
  setRegions: Dispatch<SetStateAction<number>>;
  projectedCost: number;
  savings: number;
  savingsPct: number;
}

export default function ScalingForecast({
  regions,
  setRegions,
  projectedCost,
  savings,
  savingsPct,
}: ScalingForecastProps) {
  const warning = projectedCost > 4000;

  return (
    <div className="bg-[#F9FAFB] rounded-xl shadow p-[24px] space-y-[16px] max-w-[1140px] mx-auto">
      <h3 className="text-[16px] font-semibold">Projected Cost for Multi-Region Scaling</h3>

      <div className="flex justify-between text-[14px] text-[#000]">
        <span>Active Regions: {regions}</span>
        <span>Total: €{projectedCost.toLocaleString()}</span>
      </div>

      <input
        type="range"
        min={0}
        max={5}
        step={1}
        value={regions}
        onChange={(e) => setRegions(Number(e.target.value))}
        className="w-full appearance-none h-[6px] bg-[#4555] rounded-full cursor-pointer"
      />

      <div
        className={`text-[14px] mt-[5px] ${
          savingsPct > 25
            ? "text-[#10B981]"
            : warning
            ? "text-[#F59E0B]"
            : "text-[#6B7280]"
        }`}
      >
        You are saving <strong>€{savings.toLocaleString()}</strong>/month compared to Hyperscaler
        when running <strong>{regions}</strong> regions.
      </div>

      <p className="text-[13px] text-[#6B7280]">
        Your cost scales linearly, while Hyperscaler pricing compounds. You maintain savings at scale.
      </p>
    </div>
  );
}