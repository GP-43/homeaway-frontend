import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

function DailyTransactions() {
  const data = [];
  for (let num = 30; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substring(0, 10),
      value: 1 + Math.random(),
    });
  }

  return (
    <ResponsiveContainer className="bar-chart-container">
      <AreaChart data={data}>
        <text
          x={350 / 2}
          y={5}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan className="chart-title" fontSize="14">Transactions</tspan>
        </text>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `Rs.${number.toFixed(2)}`}
        />
        <Tooltip />
        <CartesianGrid opacity={0.1} vertical="false" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default DailyTransactions;
