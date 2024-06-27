"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  ResponsiveContainer,
  Area,
} from "recharts";

export const VerticalBarChart = ({ data }: any) => (
  <BarChart
    width={200}
    height={200}
    data={data}
    margin={{ bottom: 5, right: 12 }}
    barCategoryGap="0%"
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="" interval={0} />
    <YAxis tickCount={50} domain={[0, "dataMax + 200"]} />
    <Tooltip />
    <Legend />
    <Bar dataKey="uv" fill="#8884d8" />
  </BarChart>
);
