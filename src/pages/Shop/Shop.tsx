import { useState } from "react";
import GradientButton from "../../components/Buttons/GradientButton/GradientButton";
import Header from "../../components/Header/Header";
import style from "./Shop.module.css";
import LongButton from "../../components/Buttons/LongButton/LongButton";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import VoucherList from "../../components/VoucherList/VoucherList";
import Exchange from "../../components/Exchange/Exchange";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  
  const navigate = useNavigate();
  const buttons: string[] = ["Ваучеры", "Смена имени", "Обмен ресурсов"];
  const [activeBttn, setActiveBttn] = useState<string>(buttons[0]);
  return (
    <div className={style["shop-page"]}>
      <Header text="иван иванов"/>
      <PageTitle needIcon text="Магазин" />
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
      {activeBttn == "Ваучеры" && <VoucherList />}
      {activeBttn == "Смена имени" && (
        <div className={style["change-name"]}>
          <div className={style["field"]}>
            <span>Ваше имя:</span>
            <Input onChange={() => {}} placeholder="Иван Иванов" />
          </div>
          <LongButton costumHeight onClick={() => {}}>
            Сохранить изменения
          </LongButton>
        </div>
      )}
      {activeBttn == "Обмен ресурсов" && <Exchange />}{" "}
      <div className={style["long-button"]}>
        <LongButton costumHeight onClick={() => navigate("/absurd/wallet")}>
          Кошелёк
        </LongButton>
      </div>
    </div>
  );
};

export default Shop;
