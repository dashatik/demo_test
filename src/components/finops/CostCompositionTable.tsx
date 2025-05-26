// src/components/finops/CostCompositionTable.tsx
import { useContext } from "react";
import { FinOpsContext } from "./FinOpsContext";
import { COST_TRENDS } from "../../data/costTrends";

export default function CostCompositionTable() {
  const { regions, projectedCost } = useContext(FinOpsContext);
    if (regions < 1 || regions > 6) {
    return null;
  }

  return (
    <section className="w-full max-w-[1140px] mx-auto">
      <h2 className="text-[16px] font-semibold mb-[20px]">Monthly Cost Composition</h2>
      <div className="overflow-hidden rounded-xl border border-[#E0E0E0] rounded-[8px]">
        <div className="grid grid-cols-4 bg-[#F0F0F0] py-[8px] px-[10px] font-semibold text-[13px] text-[#000]">
          <div>Service</div>
          <div>Cost (€)</div>
          <div>% of Total</div>
          <div>Savings vs Hyperscaler</div>
        </div>
        {Object.entries(COST_TRENDS).map(([label, trend], i) => {
          const base = trend[regions];
          const transtar = base?.transtar ?? 0;
          const aws = base?.aws ?? 0;

          const percentOfTotal = projectedCost > 0 ? Math.round((transtar / projectedCost) * 100) : 0;
          const savingsPercent = aws > 0 ? Math.round(((aws - transtar) / aws) * 100) : 0;

          const savingsColor =
            savingsPercent > 25
              ? "text-[#10B981]"
              : savingsPercent < 0
              ? "text-[#DC2626]"
              : "text-[#6B7280]";

          return (
            <div
              key={label}
              className={`grid grid-cols-4 items-center px-[10px] py-[10px] text-[13px] ${
                i % 2 === 0 ? "bg-[#fff]" : "bg-[#FAFAFA]"
              }`}
            >
              <div>{label}</div>
              <div className="flex items-center gap-[6px]">
                <div
                  className="h-[8px] bg-[#4CAF50] rounded-[8px] transition-all"
                  style={{ width: `${percentOfTotal * 2}px` }}
                />
                <span>€{transtar.toLocaleString()}</span>
              </div>
              <div>{percentOfTotal}%</div>
              <div className={`${savingsColor} font-medium`}>
                {savingsPercent > 0 ? `+${savingsPercent}%` : `${savingsPercent}%`}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
