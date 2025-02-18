import { FC } from "react";
import { IUser } from "../../types/interfaces";
import User from "../User/User";
import style from "./AllianceUsersList.module.css";
import UserRequest from "../UserRequest/UserRequest";

const AllianceUsersList: FC<{ users: IUser[]; showRequests: boolean }> = ({
  users,
  showRequests,
}) => {
  return (
    <div className={style["alliance-users-list"]}>
      <div className={style["header"]}>
        <span className={style["title"]}>участники</span>
        <span className={style["users-count"]}>40/40</span>
      </div>
      <div className={style["users"]}>
        {!showRequests
          ? users.map((user) => {
              return <User user={user} />;
            })
          : users.map((user) => {
              return <UserRequest user={user}/>
            })}
      </div>
    </div>
  );
};

export default AllianceUsersList;
