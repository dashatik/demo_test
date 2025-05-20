import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const dataLatency = [
  { time: "May 1, 00:00", value: 105 },
  { time: "May 1, 12:00", value: 122 },
  { time: "May 2, 00:00", value: 98 },
  { time: "May 2, 12:00", value: 130 },
  { time: "May 3, 00:00", value: 115 },
  { time: "May 3, 12:00", value: 140 },
  { time: "May 4, 00:00", value: 104 },
  { time: "May 5, 12:00", value: 120 },
  { time: "May 6, 00:00", value: 116 },
  { time: "May 7, 12:00", value: 120 },
];

export default function P95() {
  return (
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={dataLatency}>
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                  <YAxis domain={[60, 260]} tick={{ fontSize: 10 }} />
                  <Tooltip formatter={(value: number) => [`${value}ms`, '']} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#354357"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
  );
}