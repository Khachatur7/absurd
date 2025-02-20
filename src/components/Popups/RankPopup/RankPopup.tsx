import { FC, useState } from "react";
import LongButton from "../../Buttons/LongButton/LongButton";
import style from "./RankPopup.module.css";
import Rank from "../../Rank/Rank";

const RankPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>
          <span>все звания</span>
        </div>
        <div className={style["rank-list"]}>
          <Rank
            gradientClass="blue"
            number="I"
            text="Неофит"
            activeRank
            setShowInfo={setShowInfo}
          />
          <div className={style["gradient-block"]}></div>
          <Rank
            gradientClass="violet"
            number="II"
            text="Холдер"
            setShowInfo={setShowInfo}
          />
          <div className={style["gradient-block"]}></div>
          <Rank
            gradientClass="white-red"
            number="III"
            text="Китяра"
            setShowInfo={setShowInfo}
          />
          <div className={style["gradient-block"]}></div>
          <Rank
            gradientClass="white-orange"
            number="IV"
            text="Опытный"
            setShowInfo={setShowInfo}
          />
        </div>
        <div className={style["ok-bttn"]}>
          <LongButton onClick={() => closePopup(false)}>Отлично!</LongButton>
        </div>
      </div>
      {showInfo && (
        <div className={style["popup-info"]}>
          <div className={style["rank-info"]}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, a.
            Tenetur, tempore ipsam magni culpa libero numquam impedit deleniti a
            consequuntur quos reiciendis dolor mollitia accusamus adipisci iste
            sit iure. Facilis nesciunt doloremque sit, architecto laudantium
            alias, rerum, suscipit reprehenderit magni accusantium autem aut.
            Minima, illo dolore vitae blanditiis tempora necessitatibus ab quasi
            exercitationem accusamus consequatur esse, eligendi vero dolorem.
          </div>
          <div className={style["ok-bttn"]}>
            <LongButton onClick={() => setShowInfo(false)}>Понятно</LongButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default RankPopup;
