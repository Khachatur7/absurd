import { useEffect, useState } from "react";
import Button from "../../../components/Buttons/Button/Button";
import LongButton from "../../../components/Buttons/LongButton/LongButton";
import DataList from "../../../components/DataList/DataList";
import ExtendableDataList from "../../../components/ExtendableDataList/ExtendableDataList";
import { IDataString } from "../../../types/interfaces";
import style from "./TerritoryStatistics.module.css";
import classNames from "classnames";

const TerritoryStatistics = () => {
  const firstData: IDataString[] = [
    {
      name: "Твоё влияние",
      data: "7",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Стоимость сбора",
      data: "62%",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Уровень территории",
      data: "0.07",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Игроки",
      data: "2",
      gradient: false,
      dashLine: true,
    },
    {
      name: "NFT",
      data: "0",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Строения",
      data: "0",
      gradient: false,
      dashLine: true,
    },
  ];
  const extendableDataFirst: IDataString[] = [
    {
      name: "Какой то текст",
      data: "0",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Какой то текст 2",
      data: "0",
      gradient: false,
      dashLine: true,
    },
  ];
  const extendableDataSecond: IDataString[] = [
    {
      name: "Плохой Сон",
      data: "1.45",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Ведёное Следствие",
      data: "1.67",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Годные Ахлисы",
      data: "1.67",
      gradient: false,
      dashLine: true,
    },
  ];
  const [progressbarCount, setProgressbarCount] = useState(5);
  const [progressBlocks, setProgressBlocks] = useState(
    Array.from({ length: progressbarCount }, (_, i) => i).slice(0, 12)
  );
  useEffect(() => {
    setProgressBlocks(
      Array.from({ length: progressbarCount }, (_, i) => i).slice(0, 12)
    );
  }, [progressbarCount]);

  return (
    <div className={style["all-statistic"]}>
      <DataList datas={firstData} />
      <ExtendableDataList title="Строения" datas={extendableDataFirst} />
      <ExtendableDataList title="nft" datas={extendableDataFirst} />
      <ExtendableDataList title="добывается" datas={extendableDataSecond} />
      <div className={style["progress"]}>
        <div
          className={classNames(
            style["progressbar"],
            progressBlocks.length > 9
              ? style["birch-progressbar"]
              : progressBlocks.length > 5
              ? style["violet-progressbar"]
              : ""
          )}
          onClick={() =>
            progressbarCount < 12
              ? setProgressbarCount(progressbarCount + 1)
              : ""
          }
        >
          {progressBlocks.map((p) => {
            return <div className={style["progressbar-block"]} key={p}></div>;
          })}
        </div>
        <LongButton onClick={() => {}} costumHeight>
          <span>Буст территории</span>
        </LongButton>
      </div>
      <div className={style["def-buttons"]}>
        <Button onClick={() => {}}>
          <div className={style["def-children"]}>
            <svg
              width="19"
              height="26"
              viewBox="0 0 19 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.375 13H0.125V9.875L9.5 0.5L18.875 9.875V13H12.625V25.5H6.375V13Z"
                fill="white"
              />
            </svg>

            <span>Повысить уровень</span>
          </div>
        </Button>
        <Button onClick={() => {}}>
          <div className={style["def-children"]}>
            <svg
              width="25px"
              height="26px"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M23.7417 15.2108C23.7521 14.913 23.486 14.6841 23.2953 14.4602C22.9604 13.1063 22.2965 11.5551 21.333 10.0159C19.7878 7.54971 15.6986 3.57353 14.1455 2.96021C14.0673 2.9295 13.9974 2.91216 13.933 2.89779C13.7779 2.39594 13.6957 2.05163 13.0918 1.64885C11.4302 0.541113 9.57485 0.229003 8.34672 0.73581C7.1176 1.24262 6.43493 4.04863 7.75718 5.00874C9.0185 5.92872 11.5139 4.0734 12.3125 5.26091C13.1096 6.44792 13.99 10.4003 15.4524 12.9264C15.0828 12.8759 14.7024 12.8491 14.3095 12.8491C12.6221 12.8491 11.1057 13.3436 10.0341 14.1337C9.11759 12.7035 7.5174 11.7528 5.6923 11.7528C3.79983 11.7528 2.15456 12.7753 1.25836 14.2943V25.5H3.67548L4.1917 24.584C5.85331 23.9464 7.81812 22.3016 9.18348 20.5478C14.6399 22.689 23.6193 18.7257 23.7417 15.2108Z"
                  fill="white"
                />
              </g>
            </svg>
            <span>Повысить влияние</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TerritoryStatistics;
