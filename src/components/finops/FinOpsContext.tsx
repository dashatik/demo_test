import { createContext } from "react";

export const FinOpsContext = createContext<{
  regions: number;
  projectedCost: number;
}>({
  regions: 2,
  projectedCost: 0,
});