import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";

interface CustomizedAxisTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
}

const CustomizedAxisTick: React.FC<CustomizedAxisTickProps> = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={8}
        textAnchor="end"
        fill="#666"
        transform="rotate(-75)"
      >
        {payload.value}
      </text>
    </g>
  );
};

interface ChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const Chart: React.FC<ChartProps> = (props) => {
  return (
    <ResponsiveContainer aspect={1.2} width="100%">
      <BarChart
        data={props.data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <YAxis type="number" hide={true} />
        <XAxis
          dataKey="name"
          height={80}
          axisLine={true}
          tick={<CustomizedAxisTick x={1} y={1} payload={{ value: "..." }} />}
          tickLine={false}
          interval={0}
        />
        <Bar dataKey="value" fill="var(--third-color)" barSize={24}>
          <LabelList dataKey="value" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
