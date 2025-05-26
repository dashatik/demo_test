import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { FinOpsContext } from "./FinOpsContext";
import { COST_TRENDS } from "../../data/costTrends";

const CATEGORIES = ["Compute", "Bandwidth", "Logging", "Disaster Recovery"];

const COLORS = {
  transtar: "#354357", // green
  aws: "#BDBDBD",      // gray dashed pattern
};

export default function CostBreakdownChart() {
  const context = useContext(FinOpsContext);

  // Handle fallback for context in isolation (e.g., testing outside of wrapper)
  const regions = context?.regions ?? 2;

  const data = CATEGORIES.map((category) => {
    const datapoint = COST_TRENDS[category as keyof typeof COST_TRENDS][regions] || { transtar: 0, aws: 0 };
    const savingsPct = Math.round(
      ((datapoint.aws - datapoint.transtar) / datapoint.aws) * 100
    );
    return {
      category,
      transtar: datapoint.transtar,
      aws: datapoint.aws,
      savingsPct,
    };
  });

  return (
    <div className="bg-[#fff] rounded-xl border border-[#E0E0E0] rounded-[8px] p-[24px] shadow-md">
      <h3 className="text-[15px] font-semibold mb-[16px] text-[#111827]">
        Cost Breakdown per Category (Region {regions})
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
          <XAxis
            dataKey="category"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6B7280" }}
            tickFormatter={(v) => `€${v}`}
            axisLine={false}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              `€${value}`,
              name === "transtar" ? "Transtar" : "Hyperscaler",
            ]}
            labelFormatter={(label) => `Service: ${label}`}
            contentStyle={{ fontSize: 12 }}
          />
          <Legend
            verticalAlign="top"
            iconType="square"
            formatter={(value) =>
              value === "transtar" ? "Transtar" : "Hyperscaler"
            }
          />
          <defs>
            <pattern
              id="aws-pattern"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
            >
              <path d="M0 0L6 6M6 0L0 6" stroke={COLORS.aws} strokeWidth="1" />
            </pattern>
          </defs>
          <Bar dataKey="transtar" fill={COLORS.transtar} barSize={36} />
          <Bar dataKey="aws" fill="url(#aws-pattern)" barSize={36} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
