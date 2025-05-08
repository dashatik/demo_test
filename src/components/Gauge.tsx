type GaugeProps = {
    percentage: number;
    size: number;
  };
  
  export function Gauge({ percentage, size }: GaugeProps) {
    const radius = size / 2;
    const strokeWidth = 20;
    const normalizedRadius = radius - strokeWidth;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
    return (
      <svg height={size} width={size}>
        <circle
          stroke="#E0E0E0"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={percentage >= 99.5 ? "#4CAF50" : percentage >= 99 ? "#FF9800" : "#F44336"}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.3s ease" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="18"
          fontFamily="Inter"
          fill="#333"
        >
          {percentage.toFixed(2)}%
        </text>
      </svg>
    );
  }
  