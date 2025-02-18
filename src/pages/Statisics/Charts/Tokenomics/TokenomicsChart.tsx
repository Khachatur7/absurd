import style from "./TokenomicsChart.module.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Предварительная продажа", percent: 12, color: " #0062FF" },
  { name: "Командная награда", percent: 8, color: " #FA4B4B " },
  { name: "Пул ликвидности", percent: 27, color: " #3DD598" },
  { name: "Маркетинг и дропы", percent: 8, color: " #FF974A" },
  { name: "Распространение игры", percent: 47, color: " #FFC542" },
];

const TokenomicsChart = () => {
  return (
    <div className={style["pie-chart"]}>
      <PieChart width={170} height={150}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={64}
          fill="#8884d8"
          dataKey="percent"
          stroke="transparent"
          cornerRadius={15}
          paddingAngle={-10}
          startAngle={-270}
          animationDuration={1000}
        >
          {data.map((data, index) => (
            <Cell key={`cell-${index}`} fill={data.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className={style["data-list"]}>
        {[...data]
          .sort((a, b) => b.percent - a.percent)
          .map((data) => {
            return (
              <div className={style["data-item"]}>
                <div
                  className={style["circle"]}
                  style={{ background: data.color }}
                ></div>
                <div className={style["name"]}>
                  {" "}
                  <span>{data.name}</span>
                </div>
                <div className={style["percent"]}>
                  {" "}
                  <span>{data.percent}%</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TokenomicsChart;
