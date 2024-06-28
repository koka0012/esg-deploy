"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export const VerticalBarChart = ({ data }: any) => {

  const getColor = (value: number) => {
    if(value <= 150_000) {
      return '#6caed6'
    } else if(value <= 250_000) {
      return '#3181bd'
    } else {
      return '#08519c'
    }
  };

  return (
    <ResponsiveContainer >
      <BarChart
        data={data}
        margin={{ bottom: 5, right: 12 }}
        barCategoryGap="0%"
      >
        <CartesianGrid stroke="#4c5263" vertical={false} />
        <YAxis
          type="number"
          tickCount={5}
          domain={["auto", "auto"]}
          stroke="#4c5263"
          fontSize={12}
          tickSize={4}
          tickMargin={6}
          tick={{fill: '#a9a9aa'}}
          tickFormatter={(tick: string) => {
            return tick.toLocaleString().replace('.', ' ');
          }}
          width={80}
        />
        {/* <Tooltip /> */}
        <Bar dataKey="uv" fill="#0284c7" >
          {data.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.uv)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
