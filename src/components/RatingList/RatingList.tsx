import { FC } from "react";
import RatingComponent from "../RatingComponent/RatingComponent";
import style from "./RatingList.module.css";
import { IRating } from "../../types/interfaces";

const RatingList: FC<{ rateList: IRating[] }> = ({ rateList }) => {
  return (
    <div className={style["rating-list"]}>
      <div className={style["rating-header"]}>
        <div className={style["index"]}>
          {" "}
          <span>№</span>
        </div>
        <div className={style["count"]}>
          {" "}
          <span>Кол-во</span>
        </div>
        <div className={style["token"]}>
          {" "}
          <span>Токен</span>
        </div>
        <div className={style["name"]}>
          {" "}
          <span>Юзер</span>
        </div>
      </div>
      <div className={style['list']}>
        {rateList.map((r, ind) => {
          return <RatingComponent user={r} index={ind + 1} key={r.count}/>;
        })}
      </div>
    </div>
  );
};

export default RatingList;
