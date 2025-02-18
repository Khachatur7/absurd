import { FC } from "react";
import LongButton from "../../Buttons/LongButton/LongButton";
import style from "./RankPopup.module.css";
import Rank from "../../Rank/Rank";

const RankPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup }) => {
  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>
          <span>все звания</span>
        </div>
        <div className={style["rank-list"]}>
          <Rank gradientClass="blue" number="I" text="Неофит" activeRank />
          <div className={style["gradient-block"]}></div>
          <Rank gradientClass="violet" number="II" text="Холдер" />
          <div className={style["gradient-block"]}></div>
          <Rank gradientClass="white-red" number="III" text="Китяра" />
          <div className={style["gradient-block"]}></div>
          <Rank gradientClass="white-orange" number="IV" text="Опытный" />
        </div>
        <div className={style["ok-bttn"]}>
          <LongButton onClick={() => closePopup(false)}>Отлично!</LongButton>
        </div>
      </div>
    </div>
  );
};

export default RankPopup;
