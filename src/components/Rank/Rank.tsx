import style from "./Rank.module.css";
import iSVG from "../../assets/i.svg";
import { FC } from "react";
import classNames from "classnames";

const Rank: FC<{
  gradientClass: string;
  number: string;
  text: string;
  activeRank?: boolean;
}> = ({ number, text, activeRank, gradientClass }) => {
  return (
    <div className={style["rank-component"]}>
      <div className={classNames(style["symbol"], style[gradientClass])}>
        <div className={style["white-circle"]}>
          <span>{number}</span>
        </div>
      </div>
      <div className={style["info"]}>
        <span className={style["title"]}>{text}</span>
        {activeRank && (
          <span className={style["your-rank"]}> Текущий ранг</span>
        )}
      </div>
      <img src={iSVG} alt="" />
    </div>
  );
};

export default Rank;
