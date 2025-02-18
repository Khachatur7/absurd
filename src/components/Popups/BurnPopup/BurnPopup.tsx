import { FC } from "react";
import Button from "../../Buttons/Button/Button";
import LongButton from "../../Buttons/LongButton/LongButton";
import style from "./BurnPopup.module.css";
import FireSVG from "../../SVG/FireSVG/FireSVG";

const BurnPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup }) => {
  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>сжигание ресурсов</div>
        <div className={style['burn-buttons']}>
          <Button onClick={() => {}}>
            {" "}
            <div className={style["children"]}>
              <FireSVG width="25px" active />
              <div>Сжечь всё</div>
            </div>
          </Button>{" "}
          <Button onClick={() => {}}>
            {" "}
            <div className={style["children"]}>
              <FireSVG width="25px" active />
              <div>Сжечь половину</div>
            </div>
          </Button>
        </div>
        <div className={style['cancel-bttn']}>
          <LongButton onClick={() => closePopup(false)}>Отмена</LongButton>
        </div>
      </div>
    </div>
  );
};

export default BurnPopup;
