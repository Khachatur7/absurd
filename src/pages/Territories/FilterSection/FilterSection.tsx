import { useState } from "react";
import style from "./FilterSection.module.css";
import ArrowUpSVG from "../../../components/SVG/ArrowUpSVG/ArrowUpSVG";
import ManSVG from "../../../components/SVG/ManSVG/ManSVG";
import ArmSVG from "../../../components/SVG/ArmSVG/ArmSVG";
import NFTSVG from "../../../components/SVG/NFTSVG/NFTSVG";
import classNames from "classnames";

const FilterSection = () => {
  const options = ["Сортировать", "Сортировать"];
  const [chooseOption, setChooseOption] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(options[0]);

  const ChooseNewOption = (text: string) => {
    setActiveOption(text);
    setChooseOption(false);
  };
  return (
    <div className={style["filter-section"]}>
      <div
        className={style["sort-select"]}
        onClick={() => setChooseOption(!chooseOption)}
      >
        <div className={style["sort-icon"]}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_228_911"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="12"
              height="12"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.62822 1.03754C2.86661 0.820821 3.23067 0.820821 3.46906 1.03754L5.66906 3.03754C5.92447 3.26973 5.94329 3.66501 5.7111 3.92042C5.47891 4.17583 5.08363 4.19465 4.82822 3.96246L3.67364 2.91284V10.5C3.67364 10.8452 3.39382 11.125 3.04864 11.125C2.70346 11.125 2.42364 10.8452 2.42364 10.5V2.91284L1.26906 3.96246C1.01365 4.19465 0.618366 4.17583 0.386175 3.92042C0.153983 3.66501 0.172806 3.26973 0.428217 3.03754L2.62822 1.03754ZM8.95137 0.875C9.29655 0.875 9.57637 1.15482 9.57637 1.5V9.08715L10.731 8.03754C10.9864 7.80535 11.3816 7.82417 11.6138 8.07958C11.846 8.33499 11.8272 8.73027 11.5718 8.96246L9.37179 10.9625C9.1334 11.1792 8.76934 11.1792 8.53095 10.9625L6.33095 8.96246C6.07554 8.73027 6.05672 8.33499 6.28891 8.07958C6.5211 7.82417 6.91638 7.80535 7.17179 8.03754L8.32637 9.08716V1.5C8.32637 1.15482 8.60619 0.875 8.95137 0.875Z"
                fill="#006FFD"
              />
            </mask>
            <g mask="url(#mask0_228_911)">
              <rect
                x="0.00195312"
                y="-6.10352e-05"
                width="12"
                height="12"
                fill="#8F9098"
              />
            </g>
          </svg>
        </div>
        <div className={style["text"]}>
          <span>{activeOption}</span>
        </div>
        <div
          className={classNames(
            style["arrow-down"],
            chooseOption ? style["active-arrow"] : ""
          )}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_228_913"
              maskUnits="userSpaceOnUse"
              x="0"
              y="2"
              width="10"
              height="6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.60845 2.27154C9.36438 2.02068 8.96867 2.02068 8.7246 2.27154L5.00002 6.09973L1.27545 2.27154C1.03138 2.02068 0.635665 2.02068 0.391597 2.27154C0.147529 2.5224 0.147529 2.92912 0.391597 3.17998L5.00002 7.9166L9.60845 3.17998C9.85252 2.92912 9.85252 2.5224 9.60845 2.27154Z"
                fill="#006FFD"
              />
            </mask>
            <g mask="url(#mask0_228_913)">
              <rect
                x="0.000244141"
                y="-0.000671387"
                width="9.99961"
                height="9.99977"
                fill="#C5C6CC"
              />
            </g>
          </svg>
        </div>
        {chooseOption && (
          <div className={style["options"]}>
            {options.map((opt) => {
              return (
                <div
                  className={style["option"]}
                  onClick={() => ChooseNewOption(opt)}
                >
                  <span>{opt}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={style["filter-by-parameter"]}>
        <div className={style["icon"]}>
          <ArrowUpSVG gradient />
        </div>
        <div className={style["icon"]}>
          <ManSVG />
        </div>
        <div className={style["icon"]}>
          <ArmSVG />
        </div>
        <div className={style["icon"]}>
          <NFTSVG />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
