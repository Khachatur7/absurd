import style from "./BurnedPopup.module.css";
import video from "../../../assets/was-burned-bg.mp4";
import { FC } from "react";
import LongButton from "../../Buttons/LongButton/LongButton";
const BurnedPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({closePopup}) => {
  return (
    <div className={style["burned-modale"]}>
      <div className={style["video"]}>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <div className={style["popup"]}>
        <div className={style["title"]}> <span>Сожжено ресурсов:</span>
          <span> 10</span>
        </div>
        <div className={style["cancel-bttn"]}>
          <LongButton onClick={() => closePopup(false)}>OK</LongButton>
        </div>
      </div>
    </div>
  );
};

export default BurnedPopup;
