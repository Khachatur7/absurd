import { useState } from "react";
import Button from "../../components/Buttons/Button/Button";
import Header from "../../components/Header/Header";
import Resource from "../../components/Resource/Resource";
import BoxSVG from "../../components/SVG/BoxSVG/BoxSVG";
import FireSVG from "../../components/SVG/FireSVG/FireSVG";
import { IResource } from "../../types/interfaces";
import SearchSection from "./SearchSection/SearchSection";
import style from "./Warehouse.module.css";
import BurnPopup from "../../components/Popups/BurnPopup/BurnPopup";
import SendPopup from "../../components/Popups/SendPopup/SendPopup";
import ChooseUserPopup from "../../components/Popups/ChooseUserPopup/ChooseUserPopup";
import BurnedPopup from "../../components/Popups/BurnedPopup/BurnedPopup";

const Warehouse = () => {
  const resources: IResource[] = [
    {
      title: "Алфавитный Порядок",
      special: false,
      count: "8 087.83",
      cantBurnIt: false,
    },
    {
      title: "Арбузные Семечки",
      special: true,
      count: "7 601.28",
      cantBurnIt: true,
    },
    {
      title: "Бамбуки Панды",
      special: false,
      count: "14 478.41",
      cantBurnIt: true,
    },
    {
      title: "Батоны Хомяка",
      special: true,
      count: "6 652.73",
      cantBurnIt: false,
    },
    {
      title: "Белоснежная Улыбка",
      special: false,
      count: "7 949.42",
      cantBurnIt: false,
    },
    {
      title: "Бесхребетные Кубиты",
      special: false,
      count: "11 771.87",
      cantBurnIt: true,
    },
  ];
  const [sendPopup, setSendPopup] = useState<boolean>(false);
  const [burnPopup, setBurnPopup] = useState<boolean>(false);
  const [burnedPopup, setBurnedPopup] = useState<boolean>(false);
  const [usersPopup, setUsersPopup] = useState<boolean>(false);
  return (
    <div className={style["warehouse-page"]}>
      <Header text="склад ресурсов" />
      <SearchSection />
      <div className={style["resource-list"]}>
        {resources.map((res) => {
          return (
            <Resource
              resource={res}
              sendResource={setSendPopup}
              key={res.title}
            />
          );
        })}
      </div>
      <div className={style["buttons"]}>
        <Button onClick={() => setBurnPopup(true)}>
          {" "}
          <div className={style["children"]}>
            <FireSVG width="25px" active />
            <span>Сжечь</span>
          </div>
        </Button>
        <Button onClick={() => {}}>
          {" "}
          <div className={style["children"]}>
            <BoxSVG />
            <div>Копировать список</div>
          </div>
        </Button>
      </div>
      {sendPopup && <SendPopup closePopup={setSendPopup} setUsersPopup={setUsersPopup}/>}
      {burnPopup && <BurnPopup closePopup={setBurnPopup} setBurned={setBurnedPopup}/>}
      {usersPopup && <ChooseUserPopup closePopup={setUsersPopup}/>}
      {burnedPopup && <BurnedPopup closePopup={setBurnedPopup}/>}
    </div>
  );
};

export default Warehouse;
