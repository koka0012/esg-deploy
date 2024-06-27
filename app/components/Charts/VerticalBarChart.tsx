"use client";

import { useEffect, useState } from "react";
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
  Cell,
} from "recharts";

export const VerticalBarChart = ({ data }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getColor = (value: number) => {
    const minColor = [173, 216, 230];
    const maxColor = [0, 90, 180];
    const minValue = Math.min(...data.map((d: any) => d.uv));
    const maxValue = Math.max(...data.map((d: any) => d.uv));

    const normalizedValue = (value - minValue) / (maxValue - minValue);

    const r = Math.floor(minColor[0] + normalizedValue * (maxColor[0] - minColor[0]));
    const g = Math.floor(minColor[1] + normalizedValue * (maxColor[1] - minColor[1]));
    const b = Math.floor(minColor[2] + normalizedValue * (maxColor[2] - minColor[2]));

    return `rgb(${r}, ${g}, ${b})`;
  };

  if (isClient)
    return (
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
        <Bar dataKey="uv" fill="#0284c7" >
        {data.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.uv)} />
            ))}
        </Bar>
      </BarChart>
    );
};
