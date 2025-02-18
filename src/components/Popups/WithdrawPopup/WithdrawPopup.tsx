import { FC } from "react";
import Button from "../../Buttons/Button/Button";
import Input from "../../Input/Input";
import style from "./WithdrawPopup.module.css";

const WithdrawPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup }) => {
  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>ВЫВЕСТИ ТОКЕН</div>
        <div className={style["resource-field"]}>
          <div className={style["field-label"]}>
            {" "}
            <span>Количество:</span> <span>MAX: 7017</span>
          </div>
          <Input onChange={() => {}} placeholder="Введите количество..." />
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

export default WithdrawPopup;
