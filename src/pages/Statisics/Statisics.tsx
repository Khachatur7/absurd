import { useState } from "react";
import Header from "../../components/Header/Header";
import style from "./Statisics.module.css";
import GradientButton from "../../components/Buttons/GradientButton/GradientButton";
import { IDataString } from "../../types/interfaces";
import DataList from "../../components/DataList/DataList";
import ResourceChart from "./Charts/ResourceChart/ResourceChart";
import TerritoryChart from "./Charts/TerritoryChart/TerritoryChart";
import HotChart from "./Charts/HotChart/HotChart";
import ColdChart from "./Charts/ColdChart/ColdChart";
import TokenomicsChart from "./Charts/Tokenomics/TokenomicsChart";

const Statisics = () => {
  const buttons = ["Ресурсы", "Территории", "HOT", "COLD", "Токеномика"];
  const [activeBttn, setActiveBttn] = useState<string>(buttons[0]);
  const progressCount = Array.from({ length: 11 }, (_, i) => i);
  const firstData: IDataString[] = [
    {
      name: "Всего токенов заработано",
      data: "729.821",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Всего токенов сожжено",
      data: "379.386",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Токены на руках",
      data: "112.379",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Токены в ресурсах",
      data: "238.056",
      dashLine: true,
      gradient: false,
    },
  ];
  const secondData: IDataString[] = [
    { name: "Всего игроков", data: "3.815", dashLine: true, gradient: false },
    {
      name: "Всего территорий",
      data: "5.294",
      dashLine: true,
      gradient: false,
    },
    { name: "Средний уровень", data: "5.73", dashLine: true, gradient: false },
  ];
  return (
    <div className={style["statisics-page"]}>
      <Header text="ИВАН ИВАНОВ" />
      <div className={style["bttns-list"]}>
        {buttons.map((b) => {
          return (
            <GradientButton
              onClick={() => setActiveBttn(b)}
              key={b}
              active={activeBttn == b}
            >
              {b}
            </GradientButton>
          );
        })}
      </div>
      <div className={style['grafic']}>
      { activeBttn =="Ресурсы" && <ResourceChart /> }
        { activeBttn =="Территории" &&  <TerritoryChart /> }
        { activeBttn =="HOT" &&  <HotChart /> }
        { activeBttn =="COLD" &&  <ColdChart/> }
        { activeBttn =="Токеномика" &&  <TokenomicsChart /> }
        
      </div>
      <div className={style["progress"]}>
        <span>Общий прогресс: 62,23%</span>
        <div className={style["progressbar"]}>
          {progressCount.map((p) => {
            return <div className={style["progressbar-block"]} key={p}></div>;
          })}
        </div>
      </div>
      <div className={style["datas"]}>
        <DataList datas={firstData} />
        <DataList datas={secondData}/>
      </div>
    </div>
  );
};

export default Statisics;
