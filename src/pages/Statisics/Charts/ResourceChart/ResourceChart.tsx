import style from "./ResourceChart.module.css";
import { FC } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelProps,
} from "recharts";

const data = [
  { resourceCount: "9", percent: "9" },
  { resourceCount: "8", percent: "15" },
  { resourceCount: "8", percent: "21" },
  { resourceCount: "7", percent: "27" },
  { resourceCount: "10", percent: "33" },
  { resourceCount: "15", percent: "39" },
  { resourceCount: "2", percent: "45" },
  { resourceCount: "15", percent: "51" },
  { resourceCount: "13", percent: "57" },
  { resourceCount: "17", percent: "63" },
  { resourceCount: "43", percent: "69" },
  { resourceCount: "23", percent: "75" },
];

interface CustomTickProps extends LabelProps {
  payload: {
    value: string;
  };
}

const CustomYTick: FC<CustomTickProps> = ({ x, y, payload }) => {
  return (
    <text
      x={x && +x - 13}
      y={y && +y + 8}
      fill="#FFFFFF"
      dominantBaseline="middle"
      style={{ fontSize: '12px' }}
    >
      {payload.value}
    </text>
  );
};

const CustomXTick: FC<CustomTickProps> = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y && +y + 17}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: '12px' }}
    >
      {payload.value}
    </text>
  );
};

const ResourceChart = () => {
  return (
    <div className={style["chart"]}>
      <div className={style["y-data"]}>
        <span>Количество ресурсов</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 0, bottom: 0, left: -30, right: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="1">
              <stop offset="-1.21%" stopColor="#f72585" stopOpacity={1} />
              <stop offset="70.09%" stopColor="#4cc9f0" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Bar
            dataKey="resourceCount"
            fill="url(#colorUv)"
            radius={[3, 3, 0, 0]}
            barSize={17}
            
          />
          <XAxis
            dataKey={"percent"}
            tickLine={false}
            axisLine={false}
            tick={(props) => <CustomXTick {...props} />}
            padding={{ left: 0, right: 0 }}
            tickMargin={2}
          />
          <YAxis
            dataKey={"resourceCount"}
            tickLine={false}
            axisLine={false}
            ticks={[0, 10, 20, 30, 40, 50]}
            interval={0}
            tick={(props) => <CustomYTick {...props} />}
            padding={{ top: -20, bottom: -10 }}
/>
        </BarChart>
      </ResponsiveContainer>
      <div className={style["x-data"]}>
        <span>Всего получено, %</span>
      </div>
    </div>
  );
};

export default ResourceChart;
