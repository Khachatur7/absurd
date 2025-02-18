import Input from "../Input/Input";
import Select from "../Select/Select";
import style from "./Exchange.module.css";
import exchangeIcon from "../../assets/exchange-icon.png";
import LongButton from "../Buttons/LongButton/LongButton";
const Exchange = () => {
  const resources: string[] = [
    "Ооооооооочень длинный текст",
    "Бесхребетные кубиты",
    "Бамбуки панды",
  ];

  return (
    <div className={style["exhange"]}>
      <div className={style["give"]}>
        <div className={style["title"]}>Отдать ресурс:</div>
        <div className={style["content"]}>
          <div className={style["resource-name"]}>
            <Select onClick={() => {}} options={resources} />
          </div>
          <div className={style["count"]}>
            <Input onChange={() => {}} placeholder="Кол-во" />
          </div>
        </div>
      </div>
      <div className={style["circle"]}>
        <img src={exchangeIcon} alt="" />
        <div className={style["blur"]}></div>
      </div>

      <div className={style["get"]}>
        <div className={style["title"]}>Получить ресурс:</div>
        <div className={style["content"]}>
          <div className={style["resource-name"]}>
            <Select onClick={() => {}} options={resources} />
          </div>
          <div className={style["count"]}>
            <Input onChange={() => {}} placeholder="Кол-во" />
          </div>
        </div>
        <div className={style["postscriptum"]}>
          При совершении обмена взымается комиссия в размере таком-то,
          текст-рыба, его можно заменить.
        </div>
      </div>
      <LongButton costumHeight onClick={() => {}}>Подтвердить обмен ресурсов</LongButton>
      
    </div>
  );
};

export default Exchange;
