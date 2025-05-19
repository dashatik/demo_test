import Topbar from "../components/Topbar";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const COST_TRENDS = {
  Compute: [
    { region: 0, transtar: 1200, aws: 2000 },
    { region: 1, transtar: 1420, aws: 2180 },
    { region: 2, transtar: 1710, aws: 2440 },
    { region: 3, transtar: 1995, aws: 2790 },
    { region: 4, transtar: 2320, aws: 3125 },
    { region: 5, transtar: 2580, aws: 3370 },
  ],
  Bandwidth: [
    { region: 0, transtar: 300, aws: 800 },
    { region: 1, transtar: 470, aws: 940 },
    { region: 2, transtar: 720, aws: 1200 },
    { region: 3, transtar: 890, aws: 1510 },
    { region: 4, transtar: 1140, aws: 1760 },
    { region: 5, transtar: 1360, aws: 2040 },
  ],
  Logging: [
    { region: 0, transtar: 400, aws: 900 },
    { region: 1, transtar: 590, aws: 1050 },
    { region: 2, transtar: 850, aws: 1340 },
    { region: 3, transtar: 1080, aws: 1630 },
    { region: 4, transtar: 1330, aws: 1860 },
    { region: 5, transtar: 1570, aws: 2130 },
  ],
  "Disaster Recovery": [
    { region: 0, transtar: 800, aws: 900 },
    { region: 1, transtar: 1030, aws: 1080 },
    { region: 2, transtar: 1280, aws: 1375 },
    { region: 3, transtar: 1530, aws: 1620 },
    { region: 4, transtar: 1785, aws: 1925 },
    { region: 5, transtar: 2070, aws: 2185 },
  ],
};

export default function FinOps() {
  const [regions, setRegions] = useState(2);
  const projectedCost =
    1200 + 300 + 400 + 800 + regions * 275;
  const warning = projectedCost > 4000;

  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px] text-[#000]">
      {/* Top Navigation Bar */}
      <Topbar page="FinOps"/>


      {/* Cost Comparison Charts */}
      <section className="w-full max-w-[1140px] mx-auto space-y-[40px] mt-[32px]">
        <h2 className="text-[16px] font-semibold text-[#000] pb-[24px]">
          Cost Breakdown: Transtar vs AWS
        </h2>

        {Object.entries(COST_TRENDS).map(([label, chartData], i) => (
          <div
            key={i}
            className="bg-white border border-[#E0E0E0] rounded-[8px] p-[24px] space-y-4"
          >
            <h3 className="text-[14px] font-semibold text-[#000]">{label}</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="region"
                  tick={{ fontSize: 12, fill: "#999" }}
                  label={{
                    value: "Region",
                    offset: -5,
                    position: "insideBottom",
                    fontSize: 12,
                  }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#999" }}
                  tickFormatter={(v) => `€${v}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #CCCCCC",
                    borderRadius: "4px",
                    fontSize: "12px",
                    padding: "8px",
                  }}
                  formatter={(value: any, name: string) => [`€${value}`, name]}
                />
                <Line
                  type="monotone"
                  dataKey="transtar"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Transtar"
                />
                <Line
                  type="monotone"
                  dataKey="aws"
                  stroke="#BDBDBD"
                  strokeWidth={2}
                  strokeDasharray="6 3"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  name="AWS"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </section>

      {/* Forecast Slider */}
      <section className="w-full max-w-[1140px] mx-auto bg-[#F9FAFB] p-[10px] rounded-xl">
        <h2 className="text-[16px] font-semibold mb-2">
          Projected Cost for Multi-Region Scaling
        </h2>
        <div className="flex items-center justify-between text-[13px] mb-[5px]">
          <span>Add Regions: {regions}</span>
          <span>Total: €{projectedCost}</span>
        </div>
        <input
          type="range"
          min="0"
          max="5"
          value={regions}
          onChange={(e) => setRegions(Number(e.target.value))}
          className="w-full appearance-none h-[6px] bg-gray-300 rounded-full cursor-pointer"
        />
        <div
          className={`mt-[5px] text-[13px] ${
            warning
              ? "text-[var(--color-warning)] font-semibold"
              : "text-[#000]"
          }`}
        >
          Projected Monthly Cost: €{projectedCost.toLocaleString()}
        </div>
      </section>
      <section className="w-full max-w-[1140px] mx-auto">
  <h2 className="text-[16px] font-semibold mb-4 ">Monthly Cost Composition</h2>
  <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
    <div className="grid grid-cols-4 bg-[#F0F0F0] py-[5px] px-[10px] font-semibold text-[13px]">
      <div>Service</div>
      <div>Cost (€)</div>
      <div>% of Total</div>
      <div>Savings vs AWS</div>
    </div>
    {Object.entries(COST_TRENDS).map(([label, trend], i) => {
      const base = trend[regions]; // pick the row matching current region count
      const transtar = base?.transtar ?? 0;
      const aws = base?.aws ?? 0;
      const percentOfTotal = projectedCost > 0 ? Math.round((transtar / projectedCost) * 100) : 0;
      const savingsPercent = aws > 0 ? Math.round(((aws - transtar) / aws) * 100) : 0;

      return (
        <div
          key={label}
          className={`grid grid-cols-4 items-center px-[10px] py-[5px] text-[13px] ${
            i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
          }`}
        >
          <div>{label}</div>
          <div className="flex items-center gap-[5px]">
            <div
              className="h-[8px] bg-[var(--color-success)] rounded"
              style={{ width: `${percentOfTotal * 2}px` }}
            />
            €{transtar}
          </div>
          <div>{percentOfTotal}%</div>
          <div className={savingsPercent > 25 ? "text-[var(--color-success)] font-medium" : ""}>
            {savingsPercent}%
          </div>
        </div>
      );
    })}
  </div>
</section>
    </div>
  );
}
