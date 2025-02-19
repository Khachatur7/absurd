import { useState } from "react";
import Button from "../../components/Buttons/Button/Button";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import TerritoryList from "../../components/TerritoryList/TerritoryList";
import FilterSection from "./FilterSection/FilterSection";
import style from "./Territories.module.css";
import CharacterPopup from "../../components/Popups/CharacterPopup/CharacterPopup";

const Territories = () => {
  const [charactnerPopup, setCharactnerPopup] = useState(false);
  return (
    <div className={style["territories-page"]}>
      <Header text="ИВАН ИВАНОВ" />
      <PageTitle
        text="Мои территории"
        needIcon
        specialIcon
        setCharacterPopup={setCharactnerPopup}
      />
      <FilterSection />
      <TerritoryList />
      <Button onClick={() => {}}>Показать ещё</Button>
      <button className={style["plus-bttn"]}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2422 8.24219H11.7578V1.75781C11.7578 0.786992 10.9708 0 10 0C9.02918 0 8.24219 0.786992 8.24219 1.75781V8.24219H1.75781C0.786992 8.24219 0 9.02918 0 10C0 10.9708 0.786992 11.7578 1.75781 11.7578H8.24219V18.2422C8.24219 19.213 9.02918 20 10 20C10.9708 20 11.7578 19.213 11.7578 18.2422V11.7578H18.2422C19.213 11.7578 20 10.9708 20 10C20 9.02918 19.213 8.24219 18.2422 8.24219Z"
            fill="#111111"
          />
        </svg>
      </button>
      {charactnerPopup && <CharacterPopup closePopup={setCharactnerPopup}/>}
    </div>
  );
};

export default Territories;
