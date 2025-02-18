import style from "./TerritoryChart.module.css";
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
{level:1,count:720},
{level:2,count:630},
{level:3,count:750},
{level:4,count:900},
{level:5,count:200},
{level:6,count:550},
{level:7,count:820},
{level:8,count:470},
{level:9,count:900},
{level:10,count:650},
{level:11,count:930},
{level:12,count:870},
{level:13,count:400},

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

const TerritoryChart = () => {
  return (
    <div className={style["chart"]}>
      <div className={style["y-data"]}>
        <span>Количество территорий</span>
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
            dataKey={"level"}
            tickLine={false}
            axisLine={false}
            tick={(props) => <CustomXTick {...props} />}
            padding={{ left: 0, right: 0 }}
            tickMargin={2}
          />
          <YAxis
            dataKey={"level"}
            tickLine={false}
            axisLine={false}
            ticks={[0,500,1000,1500]}
            interval={0}
            tick={(props) => <CustomYTick {...props} />}
            padding={{ top: 0, bottom: -10 }}
            tickMargin={5}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className={style["x-data"]}>
        <span>Уровень территорий</span>
      </div>
    </div>
  );
};

export default TerritoryChart;
