import { FC } from "react";
import Button from "../../Buttons/Button/Button";
import style from "./SendPopup.module.css";
import Input from "../../Input/Input";

const SendPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
  setUsersPopup:(value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup,setUsersPopup}) => {
  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>отправка ресурсов</div>
        <div className={style["resource-field"]}>
          <div className={style["field-label"]}>
            {" "}
            <span>Бамбуки панды</span> <span>MAX: 3.678,43</span>
          </div>
          <Input onChange={() => {}} placeholder="Введите количество..." />
        </div>
        <div className={style["user-field"]}>
          <div className={style["alliance-bttn"]}>
            <Button onClick={() => setUsersPopup(true)} customWidth>
              <span>Альянс</span>
            </Button>
          </div>
          <div className={style["field-label"]}>
            {" "}
            <span>ID пользователя:</span>
          </div>
          <Input onChange={() => {}} placeholder="Введите ID пользователя..." />
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

export default SendPopup;
