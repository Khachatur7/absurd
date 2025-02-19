import { FC } from "react";
import LongButton from "../../Buttons/LongButton/LongButton";
import style from "./CantBurnPopup.module.css";

const CantBurnPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
  cantBurn: boolean;
}> = ({ closePopup, cantBurn }) => {
  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>
          {cantBurn ? "Добавлено в несжигаемое!" : "Добавлено в сжигаемое!"}
        </div>
        <div className={style["cancel-bttn"]}>
          <LongButton onClick={() => closePopup(false)}>OK</LongButton>
        </div>
      </div>
    </div>
  );
};

export default CantBurnPopup;
