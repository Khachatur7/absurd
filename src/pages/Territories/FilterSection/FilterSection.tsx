import { useState } from "react";
import style from "./FilterSection.module.css";
import ArrowUpSVG from "../../../components/SVG/ArrowUpSVG/ArrowUpSVG";
import ManSVG from "../../../components/SVG/ManSVG/ManSVG";
import ArmSVG from "../../../components/SVG/ArmSVG/ArmSVG";
import NFTSVG from "../../../components/SVG/NFTSVG/NFTSVG";

const FilterSection = () => {
  const options = [
    "По уровню",
    "По количеству друзей",
    "По влиянию",
    "По количеству NFT",
  ];
  const [activeOption, setActiveOption] = useState<string>(options[0]);

  return (
    <div className={style["filter-section"]}>
      <div className={style["sort-text"]}>
        {" "}
        <span>Сортировать по:</span>
      </div>
      <div className={style["filter-by-parameter"]}>
        <div
          className={style["icon"]}
          onClick={() => setActiveOption(options[0])}
        >
          <ArrowUpSVG gradient={activeOption == options[0]} />
        </div>
        <div
          className={style["icon"]}
          onClick={() => setActiveOption(options[1])}
        >
          <ManSVG gradient={activeOption == options[1]} />
        </div>
        <div
          className={style["icon"]}
          onClick={() => setActiveOption(options[2])}
        >
          <ArmSVG gradient={activeOption == options[2]} />
        </div>
        <div
          className={style["icon"]}
          onClick={() => setActiveOption(options[3])}
        >
          <NFTSVG gradient={activeOption == options[3]} />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
