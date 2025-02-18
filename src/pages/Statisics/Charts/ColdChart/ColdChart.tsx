import style from "./ColdChart.module.css";
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
  { holder: '0,01', count: 50 },
  { holder: 2, count: 170 },
  { holder: 3, count: 50 },
  { holder: 4, count: 170 },
  { holder: 5, count: 210 },
  { holder: 6, count: 120 },
  { holder: 7, count: 180 },
  { holder: '0,10', count: 170 },
  { holder: 9, count: 45 },
  { holder: 10, count: 160 },
  { holder: 11, count: 130 },
  { holder: 12, count: 145 },
  { holder: 13, count: 100 },
  { holder: 14, count: 250 },
  { holder: 15, count: 180 },
  { holder:'1,00', count: 145 },
  { holder: 17, count: 70 },
  { holder: 18, count: 74 },
  { holder: 19, count: 117 },
  { holder: 20, count: 125 },
  { holder: 21, count: 240 },
  { holder: 22, count: 250 },
  { holder: 23, count: 150 },
  { holder:  '10,00', count: 210 },
  { holder: 25, count: 45 },
  { holder: 26, count: 140 },
  { holder: 27, count: 72 },
  { holder: 28, count: 163 },
  { holder:29, count: 275 },
  { holder: 30, count: 290 },
  { holder: 31, count: 120 },
  { holder: '100,00', count: 155 },
  { holder: 33, count: 82 },
  { holder: 34, count: 147 },
  { holder: 35, count: 90 },
  { holder: 36, count: 165 },
  { holder: 37, count: 250 },
  { holder: 38, count: 340 },
  { holder: 39, count: 245 },
  { holder: '1.000,00', count: 70 },
  { holder: 41, count: 174 },
  { holder: 42, count: 37 },
  { holder: 43, count: 45 },
  { holder: 44, count: 70 },
  { holder: 45, count: 90 },
  { holder: 46, count: 60 },
  { holder: 47, count: 10 },
  { holder: 48, count: 145 },
  { holder:'10.000,00', count: 110 },
  { holder:52, count: 90 },
  { holder: 51, count: 20 },
  { holder: 52, count: 155 },
  { holder: 53, count: 112 },
  { holder: 54, count: 47 },

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
      style={{ fontSize: "8px"}}
      transform={`rotate(-30, ${x}, ${y})`}
    >
      {payload.value}
    </text>
  );
};

const ColdChart = () => {
  return (
    <div className={style["chart"]}>
      <div className={style["y-data"]}>
        <span>Количество пользователей</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 0, bottom: 14, left: -30, right: 0 }}
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
            interval={0}
            ticks={['0,01','0,10','1,00','10,00', '100,00', '1.000,00','10.000,00']}
            tick={(props) => <CustomXTick {...props} />}
            padding={{ left: 0, right: 0 }}
            tickMargin={10}
          />
          <YAxis
            dataKey={"holder"}
            tickLine={false}
            axisLine={false}
            ticks={[0, 100, 200, 300,400]}
            interval={0}
            tick={(props) => <CustomYTick {...props} />}
            padding={{ top: 5, bottom: -20 }}
            tickMargin={3}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className={style["x-data"]}>
        <span>Уровень территорий</span>
      </div>
    </div>
  );
};

export default ColdChart;
