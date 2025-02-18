import { FC } from "react";
import LongButton from "../../Buttons/LongButton/LongButton";
import style from "./ResourcePopup.module.css";

const ResourcePopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup }) => {
  return (
    <div className={style["modale"]}>
      <div className={style["popup"]}>
        <div className={style["title"]}>Ресурсы собраны</div>
        <div className={style["done-bttn"]}>
          <LongButton onClick={() => closePopup(false)}>Отлично!</LongButton>
        </div>
      </div>
    </div>
  );
};

export default ResourcePopup;
