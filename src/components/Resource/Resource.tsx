import classNames from "classnames";
import FireSVG from "../SVG/FireSVG/FireSVG";
import SendSVG from "../SVG/SendSVG/SendSVG";
import style from "./Resource.module.css";
import iSVG from "../../assets/i.svg";
import { FC } from "react";
import { IResource } from "../../types/interfaces";

const Resource: FC<{  resource: IResource,sendResource: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  resource,
  sendResource
}) => {
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
        <button className={style["button"]}>
          <FireSVG active={resource.canBurnIt} />
        </button>
        <button className={style["button"]} onClick={()=>sendResource(true)}>
          <SendSVG />
        </button>
      </div>
    </div>
  );
};

export default Resource;
