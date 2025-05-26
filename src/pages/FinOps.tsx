// src/pages/FinOps.tsx
import Topbar from "../components/Topbar";
import { useState } from "react";
import {
  Tab as HeadlessTab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
} from "@headlessui/react";
import SummaryBanner from "../components/finops/SummaryBanner";
import CostBreakdownChart from "../components/finops/CostBreakdownChart";
import ScalingForecast from "../components/finops/ScalingForecast";
import CostCompositionTable from "../components/finops/CostCompositionTable";
import { COST_TRENDS } from "../data/costTrends";
import { FinOpsContext } from "../components/finops/FinOpsContext";

function calculateProjectedCost(regions: number): number {
  if (regions < 1) return 0;
  return Object.values(COST_TRENDS).reduce((sum, trend) => {
    const row = trend[regions - 1];
    return sum + (row?.transtar ?? 0);
  }, 0);
}

function calculateSavings(regions: number, projectedCost: number) {
  if (regions < 1) return { savings: 0, savingsPct: 0 };
  const awsCost = Object.values(COST_TRENDS).reduce((sum, trend) => {
    const row = trend[regions - 1];
    return sum + (row?.aws ?? 0);
  }, 0);
  const savings = awsCost - projectedCost;
  const savingsPct = awsCost ? Math.round((savings / awsCost) * 100) : 0;
  return { savings, savingsPct };
}

export default function FinOps() {
  const [regions, setRegions] = useState(2);
  const projectedCost = calculateProjectedCost(regions);
  const { savings, savingsPct } = calculateSavings(regions, projectedCost);

  return (
    <FinOpsContext.Provider value={{ regions, projectedCost }}>
      <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px] text-[#000]">
        <Topbar page="FinOps" />

        {/* Summary Banner */}
        <SummaryBanner savings={savings} savingsPct={savingsPct} regions={regions} />

        {/* Tabs */}
        <div className="w-full max-w-[1140px] mx-auto">
          <TabGroup>
            <TabList className="flex gap-[5px] text-sm border-b border-[#666] mb-[24px]">
              {["Cost Comparison", "Scaling Forecast"].map((label, i) => (
                <HeadlessTab key={i} className={({ selected }) =>
                  `px-[10px] py-[5px] text-[14px] font-medium ${
                    selected ? "bg-[#354357] border-[1px] text-[#fff]" : "text-[#666]"
                  }`
                }>
                  {label}
                </HeadlessTab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel>
                <CostBreakdownChart />
              </TabPanel>
              <TabPanel>
                <ScalingForecast
                  regions={regions}
                  setRegions={setRegions}
                  projectedCost={projectedCost}
                  savings={savings}
                  savingsPct={savingsPct}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>

        {/* Table */}
        <CostCompositionTable />
      </div>
    </FinOpsContext.Provider>
  );
}
