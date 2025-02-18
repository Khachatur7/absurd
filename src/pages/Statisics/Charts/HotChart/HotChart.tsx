import style from "./HotChart.module.css";
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
  { holder: '10', count: 50 },
  { holder: 2, count: 40 },
  { holder: 3, count: 45 },
  { holder: 4, count: 70 },
  { holder: 5, count: 4 },
  { holder: 6, count: 37 },
  { holder: 7, count: 45 },
  { holder: 8, count: 70 },
  { holder: 9, count: 75 },
  { holder: 10, count: 60 },
  { holder: 11, count: 10 },
  { holder: 12, count: 45 },
  { holder: 13, count: 40 },
  { holder: 14, count: 50 },
  { holder: 15, count: 40 },
  { holder: 16, count: 45 },
  { holder: 17, count: 70 },
  { holder: 18, count: 4 },
  { holder: 19, count: 37 },
  { holder: 20, count: 45 },
  { holder: 21, count: 70 },
  { holder: 22, count: 75 },
  { holder: 23, count: 60 },
  { holder: 24, count: 10 },
  { holder: 25, count: 45 },
  { holder: 26, count: 40 },
  { holder: 27, count: 72 },
  { holder: '1.00', count: 63 },
  { holder: 29, count: 75 },
  { holder: 30, count: 90 },
  { holder: 31, count: 20 },
  { holder: 32, count: 55 },
  { holder: 33, count: 82 },
  { holder: 34, count: 47 },
  { holder: 35, count: 90 },
  { holder: 36, count: 65 },
  { holder: 37, count: 50 },
  { holder: 38, count: 40 },
  { holder: 39, count: 45 },
  { holder: 40, count: 70 },
  { holder: 41, count: 4 },
  { holder: 42, count: 37 },
  { holder: 43, count: 45 },
  { holder: 44, count: 70 },
  { holder: 45, count: 90 },
  { holder: 46, count: 60 },
  { holder: 47, count: 10 },
  { holder: 48, count: 45 },
  { holder: 49, count: 110 },
  { holder: 50, count: 90 },
  { holder: 51, count: 20 },
  { holder: 52, count: 55 },
  { holder: 53, count: 12 },
  { holder: 54, count: 47 },
  { holder: 55, count: 90 },
  { holder: '1.000', count: 25 },
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
      style={{ fontSize: "12px" }}
    >
      {payload.value}
    </text>
  );
};

const CustomXTick: React.FC<{
  x: number;
  y: number;
  payload: { value: string };
}> = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y && +y + 17}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: "12px" }}
    >
      {payload.value}
    </text>
  );
};

const HotChart = () => {
  return (
    <div className={style["chart"]}>
      <div className={style["y-data"]}>
        <span>Количество пользователей</span>
      </div>
      <ResponsiveContainer width="100%" height="95%">
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
            dataKey="count"
            fill="url(#colorUv)"
            radius={[3, 3, 0, 0]}
            barSize={17}
          />
          <XAxis
            dataKey={"holder"}
            tickLine={false}
            axisLine={false}
            ticks={['10', '1.00', '1.000']}
            tick={(props) => <CustomXTick {...props} />}
            padding={{ left: 0, right: 0 }}
            tickMargin={2}
          />
          <YAxis
            dataKey={"holder"}
            tickLine={false}
            axisLine={false}
            ticks={[0, 40, 80, 120]}
            interval={0}
            tick={(props) => <CustomYTick {...props} />}
            padding={{ top: 5, bottom: -12 }}
            tickMargin={3}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className={style["x-data"]}>
        <span>Холдеры токена $ATERRA</span>
      </div>
    </div>
  );
};

export default HotChart;
