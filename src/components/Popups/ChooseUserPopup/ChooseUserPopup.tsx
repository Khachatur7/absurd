import { FC } from "react";
import Button from "../../Buttons/Button/Button";
import style from "./ChooseUserPopup.module.css";
import { IUser } from "../../../types/interfaces";
import User from "../../User/User";

const ChooseUserPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup }) => {
  const users: IUser[] = [
    { nickname: "BAZOOM", grade: "Владелец", specialGrade: true },
    { nickname: "TIMA1305", grade: "Админ", specialGrade: true },
    { nickname: "MASLENA92", grade: "Админ", specialGrade: true },
    { nickname: "CONNYCOX", grade: "Участник", specialGrade: false },
    { nickname: "DENANT1985", grade: "Участник", specialGrade: false },
    { nickname: "BARONDEXTON", grade: "Участник", specialGrade: false },
    { nickname: "EVGENIYALESNYAK", grade: "Участник", specialGrade: false },
    { nickname: "CONNYCOX", grade: "Участник", specialGrade: false },
    { nickname: "DENANT1985", grade: "Участник", specialGrade: false },
    { nickname: "BARONDEXTON", grade: "Участник", specialGrade: false },
    { nickname: "DeLaFame", grade: "Участник", specialGrade: false },
    { nickname: "John Garik", grade: "Участник", specialGrade: false },
    { nickname: "MSHN", grade: "Участник", specialGrade: false },
  ];

  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>
          <span>Выберите получателя</span>
        </div>
        <div className={style["users-list"]}>
          {users.map((user) => {
            return <User user={user} />;
          })}
        </div>
        <div className={style["buttons"]}>
          <Button onClick={() => closePopup(false)}>
            <span className={style["bttn"]}>Подтвердить перевод</span>
          </Button>{" "}
          <Button onClick={() => closePopup(false)}>
            {" "}
            <span className={style["bttn"]}>Отмена</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUserPopup;
