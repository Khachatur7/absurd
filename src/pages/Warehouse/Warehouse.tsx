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

const Warehouse = () => {
  const resources: IResource[] = [
    {
      title: "Алфавитный Порядок",
      special: false,
      count: "8 087.83",
      canBurnIt: false,
    },
    {
      title: "Арбузные Семечки",
      special: true,
      count: "7 601.28",
      canBurnIt: true,
    },
    {
      title: "Бамбуки Панды",
      special: false,
      count: "14 478.41",
      canBurnIt: true,
    },
    {
      title: "Батоны Хомяка",
      special: true,
      count: "6 652.73",
      canBurnIt: false,
    },
    {
      title: "Белоснежная Улыбка",
      special: false,
      count: "7 949.42",
      canBurnIt: false,
    },
    {
      title: "Бесхребетные Кубиты",
      special: false,
      count: "11 771.87",
      canBurnIt: true,
    },
  ];
  const [sendPopup, setSendPopup] = useState<boolean>(false);
  const [burnPopup, setBurnPopup] = useState<boolean>(false);
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
      {burnPopup && <BurnPopup closePopup={setBurnPopup} />}
      {usersPopup && <ChooseUserPopup closePopup={setUsersPopup}/>}
    </div>
  );
};

export default Warehouse;
