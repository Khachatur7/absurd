import style from "./User.module.css";
import { FC } from "react";
import classNames from "classnames";
import { IUser } from "../../types/interfaces";



const User: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className={style["user"]}>
        <div className={style['avatar']}>

        </div>
      <div className={style["nickname"]}>
        {" "}
        <span>{user.nickname}</span>
      </div>
      <div
        className={classNames(
          style["grade"],
          user.specialGrade ? style["gradient-text"] : ""
        )}
      >
        {" "}
        <span>{user.grade}</span>
      </div>
    </div>
  );
};

export default User;
