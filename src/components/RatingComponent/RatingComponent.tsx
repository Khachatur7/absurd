import { FC } from "react";
import style from "./RatingComponent.module.css";
import { IRating } from "../../types/interfaces";

const RatingComponent: FC<{ user: IRating; index: number }> = ({
  user,
  index,
}) => {
  return (
    <div className={style["rating-component"]}>
      <div className={style['index']}> <span>#{index}</span></div>
      <div className={style['count']}> <span>{user.count}</span></div>
      <div className={style['token']}> <span>{user.token}</span></div>
      <div className={style['name']}> <span>{user.name}</span></div>
    </div>
  );
};

export default RatingComponent;
