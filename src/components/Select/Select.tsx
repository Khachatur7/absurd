import { FC, useState } from "react";
import style from "./Select.module.css";
import classNames from "classnames";

const Select: FC<{ onClick: () => void; options: string[] }> = ({
  options,
}) => {
  const [chooseOption, setChooseOption] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(options[0]);

  const ChooseNewOption = (text: string) => {
    setActiveOption(text);
    setChooseOption(false);
  };

  return (
    <div className={style["parent"]}>
      <div
        className={style["parent-for-blur"]}
        onClick={() => setChooseOption(!chooseOption)}
      >
        <div className={style["select"]}>
          <span>{activeOption}</span>
        </div>
        <div className={style["blur-bg"]}></div>
        <div
          className={classNames(
            style["arrow"],
            chooseOption ? style["active-arrow"] : ""
          )}
        >
          <svg
            width="11px"
            height="10px"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.69719 8.51923C6.31132 9.18074 5.35551 9.18074 4.96964 8.51924L0.87734 1.50387C0.488458 0.837215 0.969327 -9.53674e-07 1.74112 -9.53674e-07L9.92571 -9.53674e-07C10.6975 -9.53674e-07 11.1784 0.837214 10.7895 1.50387L6.69719 8.51923Z"
              fill="url(#paint0_linear_228_4268)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_228_4268"
                x1="11.8242"
                y1="10.1"
                x2="3.08767"
                y2="3.52629"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F72585" />
                <stop offset="1" stopColor="#4CC9F0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
  );
};

export default Select;
