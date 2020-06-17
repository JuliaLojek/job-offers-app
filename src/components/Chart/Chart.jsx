import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

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
  }
}

const Chart = (props) => {
  return (
    <ResponsiveContainer aspect={2} width="100%">
      <BarChart
        data={props.data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <YAxis type="number" hide={true} />
        <XAxis
          dataKey="name"
          height={80}
          axisLine={false}
          tick={<CustomizedAxisTick />}
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
