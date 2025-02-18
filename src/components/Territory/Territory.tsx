import style from "./Territory.module.css";
import territoryImage from "../../assets/territory.png";
import ArrowUpSVG from "../SVG/ArrowUpSVG/ArrowUpSVG";
import ManSVG from "../SVG/ManSVG/ManSVG";
import ArmSVG from "../SVG/ArmSVG/ArmSVG";
import NFTSVG from "../SVG/NFTSVG/NFTSVG";
import { FC } from "react";
import { ITerritory } from "../../types/interfaces";
import classNames from "classnames";
const Territory: FC<ITerritory> = ({
  people,
  progressbar,
  specialProgressbar,
  name,
  nft,
  strength,
  upgrade,
  takeResource,
}) => {
  const progressCount = Array.from({ length: progressbar }, (_, i) => i).slice(
    0,
    12
  );

  return (
    <div
      className={style["territory-component"]}
    >
      <div className={style["territory-image"]} 
      onClick={() => takeResource && takeResource(true)}
      >
        
        <img src={territoryImage} alt="territory" />
      </div>
      <div className={style["id"]}>
        <span>{name}</span>
      </div>
      <div className={style["territory-data"]}>
        <div className={style["data-item"]}>
          <ArrowUpSVG />
          <span>{upgrade}</span>
        </div>
        <div className={style["data-item"]}>
          <ManSVG />
          <span>{people}</span>
        </div>
        <div className={style["data-item"]}>
          <ArmSVG />
          <span>{strength}%</span>
        </div>
        <div className={style["data-item"]}>
          <NFTSVG />
          <span>{nft}</span>
        </div>
      </div>
      <div className={style["progress"]}>
        {progressCount.length < 12 && (
          <div
            className={classNames(
              style["progressbar"],
              specialProgressbar ? style["special-progressbar"] : ""
            )}
          >
            {progressCount.map((p) => {
              return <div className={style["progressbar-block"]} key={p}></div>;
            })}
          </div>
        )}
        {progressCount.length >= 12 && (
          <div
            className={classNames(
              style["progressbar"],
              specialProgressbar ? style["special-progressbar"] : ""
            )}
          >
            {progressCount.map((p) => {
              return (
                <div
                  className={classNames(
                    style["progressbar-block"],
                    style["progressbar-full"]
                  )}
                  key={p}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Territory;
