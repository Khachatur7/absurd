import { FC, useState } from "react";
import style from "./UserRequest.module.css";
import { IUser } from "../../types/interfaces";
import classNames from "classnames";

const UserRequest: FC<{ user: IUser }> = ({ user }) => {

const [clicked,setClicked] = useState(false)

  return (
    <div className={classNames(style["request"],clicked?style["request-clicked"]:"")} >
      <div className={style["avatar"]}></div>
      <div className={style["nickname"]}>
        {" "}
        <span>{user.nickname}</span>
      </div>
      <div className={style["buttons"]}>
        <button className={style["reject"]} onClick={()=>setClicked(true)}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.733374 7.80446L7.80444 0.733397L9.40872 2.33767L2.33765 9.40874L0.733374 7.80446ZM0.733374 2.33767L2.33765 0.733397L9.40872 7.80447L7.80444 9.40874L0.733374 2.33767Z"
              fill="white"
            />
          </svg>
        </button>
        <button className={style["accept"]} onClick={()=>setClicked(true)}>
          {" "}
          <span>Принять</span>
        </button>
      </div>
    </div>
  );
};

export default UserRequest;
