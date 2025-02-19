import classNames from "classnames";
import FireSVG from "../SVG/FireSVG/FireSVG";
import SendSVG from "../SVG/SendSVG/SendSVG";
import style from "./Resource.module.css";
import iSVG from "../../assets/i.svg";
import { FC, useState } from "react";
import { IResource } from "../../types/interfaces";
import CantBurnPopup from "../Popups/CantBurnPopup/CantBurnPopup";

const Resource: FC<{
  resource: IResource;
  sendResource: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ resource, sendResource }) => {
  const [cantBurnIt, setCantBurnIt] = useState(resource.cantBurnIt);
  const [cantBurnItPopup, setCantBurnItPopup] = useState(false);

  return (
    <div className={style["resource"]}>
      <div className={style["resource-info"]}>
        <div
          className={classNames(
            style["title"],
            resource.special ? style["gradient-title"] : ""
          )}
        >
          {" "}
          <span>{resource.title}</span>
          {resource.special && <img src={iSVG} alt="" />}
        </div>
        <div className={style["count"]}>
          {" "}
          <span>{resource.count}</span>
        </div>
      </div>
      <div className={style["buttons"]}>
        <button className={style["button"]} onClick={() => {
          setCantBurnItPopup(true)
          setCantBurnIt(!cantBurnIt)
        }
        }>
          <FireSVG active={cantBurnIt} />
        </button>
        <button className={style["button"]} onClick={() => sendResource(true)}>
          <SendSVG />
        </button>
      </div>
      {cantBurnItPopup && <CantBurnPopup cantBurn={cantBurnIt} closePopup={setCantBurnItPopup}/>}
    </div>
  );
};

export default Resource;
