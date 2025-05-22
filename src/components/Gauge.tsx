import { useEffect, useState } from "react";

type GaugeProps = {
  percentage: number;
  size: number;
};

export function Gauge({ percentage, size }: GaugeProps) {
  const strokeWidth = 16;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  const offset = circumference - (animatedPercentage / 100) * circumference;

  const getStrokeColor = () => {
    if (animatedPercentage >= 99.95) return "#354357";
    if (animatedPercentage >= 99.0) return "#F59E0B";
    return "#DC2626";
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center group">
      <svg height={size} width={size} className="rotate-[-90deg]">
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={getStrokeColor()}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: "stroke-dashoffset 1.4s ease-in-out",
            strokeLinecap: "round",
            filter: "drop-shadow(0 0 3px rgba(0,0,0,0.1))",
          }}
          className="group-hover:animate-pulse"
        />
      </svg>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <div className="text-[22px] font-bold text-[#111827]">
          {animatedPercentage.toFixed(2)}%
        </div>

      </div>
    </div>
  );
}