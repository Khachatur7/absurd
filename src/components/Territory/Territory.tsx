import style from "./Territory.module.css";
import territoryImage from "../../assets/territory.png";
import ArrowUpSVG from "../SVG/ArrowUpSVG/ArrowUpSVG";
import ManSVG from "../SVG/ManSVG/ManSVG";
import ArmSVG from "../SVG/ArmSVG/ArmSVG";
import NFTSVG from "../SVG/NFTSVG/NFTSVG";
import { FC } from "react";
import { ITerritory } from "../../types/interfaces";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
const Territory: FC<ITerritory> = ({
  people,
  progressbar,
  name,
  nft,
  strength,
  upgrade,
}) => {
  const navigate = useNavigate();
  const GoToAllStaistics = () => {
    localStorage.setItem("what-statistics", "general");
    navigate("/absurd/profile");
  };

  return (
    <div className={style["territory-component"]}>
      <div className={style["territory-image"]} onClick={GoToAllStaistics}>
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
        <ProgressBar progressbar={progressbar} />
      </div>
    </div>
  );
};

export default Territory;
