import style from "./PageTitle.module.css";
import specialImage from "../../assets/special-icon.png";
import { FC } from "react";
import BoxSVG from "../SVG/BoxSVG/BoxSVG";

const PageTitle: FC<{
  text: string;
  needIcon?: boolean;
  specialIcon?: boolean;
  setCharacterPopup?:React.Dispatch<React.SetStateAction<boolean>>
}> = ({ text, needIcon, specialIcon,setCharacterPopup }) => {

  return (
    <div className={style["page-title-component"]}>
      <div className={style["content"]}>
        <div className={style["title"]}>
          {needIcon && <BoxSVG specialIcon={specialIcon} />}
          <span>{text}</span>
        </div>
        {specialIcon && (
          <img
            src={specialImage}
            alt=""
            className={style["special-icon"]}
            onClick={() => setCharacterPopup && setCharacterPopup(true)}
          />
        )}
      </div>
    </div>
  );
};

export default PageTitle;
