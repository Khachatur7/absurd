import classNames from "classnames";
import style from "./ExtendableDataList.module.css";
import DataString from "../DataString/DataString";
import { FC, useState } from "react";
import { IDataString } from "../../types/interfaces";

const ExtendableDataList: FC<{
  datas: IDataString[];
  title: string;
  alwaysOpened?: boolean;
}> = ({ datas, title, alwaysOpened }) => {
  const [dataOpened, setDataOpened] = useState<boolean>(false);

  return (
    <div
      className={classNames(
        style["extendable-data-list"],
        alwaysOpened || dataOpened ? style["data-opened"] : ""
      )}
    >
      <div
        className={style["header"]}
        onClick={() => (!alwaysOpened ? setDataOpened(!dataOpened) : "")}
      >
        <div
          className={classNames(
            style["title"],
            alwaysOpened ? style["always"] : ""
          )}
        >
          <span>{title}</span>
        </div>
        {!alwaysOpened && (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10.2078L1.05402 11.25L7.50984 5.05408L8.1984 5.71472L8.19461 5.71143L13.9301 11.2167L15 10.1895C13.4148 8.66787 8.9891 4.41991 7.50984 3C6.41041 4.05458 7.48184 3.02615 0 10.2078Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <div className={style["data-list"]}>
        {datas.map((data) => {
          return (
            <DataString
              name={data.name}
              data={data.data}
              dashLine={data.dashLine}
              gradient={data.gradient}
              key={data.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExtendableDataList;
