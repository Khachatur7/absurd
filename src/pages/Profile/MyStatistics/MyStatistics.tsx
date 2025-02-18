import style from "./MyStatistics.module.css";
import statisticsImage from "../../../assets/statistics.svg";
import languageImage from "../../../assets/language.svg";
import plusImage from "../../../assets/pluse.svg";
import handSnakeImage from "../../../assets/hand-snake.svg";
import { IDataString } from "../../../types/interfaces";
import DataList from "../../../components/DataList/DataList";
import LongButton from "../../../components/Buttons/LongButton/LongButton";
import Button from "../../../components/Buttons/Button/Button";
import ExtendableDataList from "../../../components/ExtendableDataList/ExtendableDataList";
import { useNavigate } from "react-router-dom";

const MyStatistics = () => {
  const navigate = useNavigate()
  const firstData: IDataString[] = [
    {
      name: "Баланс",
      data: "6 903.04 $ATERRA",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Всего ресурсов",
      data: "632 048.29",
      gradient: false,
      dashLine: true,
    },
    {
      name: "Стоимость сбора",
      data: "21.45 $ATERRA",
      gradient: false,
      dashLine: true,
    },
  ];
  const secondData: IDataString[] = [
    {
      name: "Альянс",
      data: "@ton_taxibot",
      gradient: true,
      dashLine: true,
    },
  ];
  const extendableData: IDataString[] = [
    {
      name: "Количество территорий",
      data: "408",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Готовы к сбору",
      data: "0",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Совместные",
      data: "399",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Среднее влияние",
      data: "45.62%",
      dashLine: true,
      gradient: false,
    },
  ];
  return (
    <div className="my-statistics">
      <div className={style["datas"]}>
        <DataList datas={firstData} />
        <DataList datas={secondData} />
        <ExtendableDataList title="статистика территорий" datas={extendableData}/>
      </div>
      <div className={style["buttons"]}>
        <LongButton onClick={() => navigate("/absurd/statistics")} costumHeight>
          <div className={style["children"]}>
            <img src={statisticsImage} alt="" />
            <span>Статистика</span>
          </div>
        </LongButton>
        <div className={style["def-buttons"]}>
          <Button onClick={() => {}}>
            <div className={style["def-children"]}>
              <img src={plusImage} alt="" />
              <span>Пригласить друга</span>
            </div>
          </Button>
          <Button onClick={() => navigate("/absurd/alliance")}>
            <div className={style["def-children"]}>
              <img src={handSnakeImage} alt="" />
              <span>Альянс</span>
            </div>
          </Button>
        </div>
        <LongButton onClick={() => {}} costumHeight>
          <div className={style["children"]}>
            <img src={languageImage} alt="" />
            <span>Изменить язык</span>
          </div>
        </LongButton>
      </div>
    </div>
  );
};

export default MyStatistics;
