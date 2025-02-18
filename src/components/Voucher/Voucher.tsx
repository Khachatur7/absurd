import { FC } from "react";
import style from "./Voucher.module.css";
import { IVoucher } from "../../types/interfaces";

const Voucher: FC<IVoucher> = ({ name, type, score }) => {
  return (
    <div className={style["voucher"]}>
      <div className={style["main-info"]}>
        <div className={style["title"]}>
          <span>{name}</span>
        </div>
        <div className={style["type"]}>
          <span>{type}</span>
        </div>
      </div>
      <div className={style["score-and-go-btn"]}>
        <div className={style["score"]}>
          <span>{score}/10</span>
        </div>
        <button className={style["go-bttn"]}>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.41724 0.500031L0.375 1.55405L6.57092 8.00987L5.91028 8.69843L5.91357 8.69464L0.408325 14.4301L1.43555 15.5C2.95713 13.9148 7.20509 9.48913 8.625 8.00987C7.57042 6.91044 8.59885 7.98187 1.41724 0.500031Z"
              fill="#007AFF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Voucher;
