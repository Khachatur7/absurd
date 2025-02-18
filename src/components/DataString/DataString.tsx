import { FC } from "react";
import style from "./DataString.module.css";
import classNames from "classnames";
import { IDataString } from "../../types/interfaces";

const DataString: FC<IDataString> = ({ name, data, dashLine, gradient }) => {
  return (
    <div className={style["data-string"]}>
      <span className={style["name"]}>{name}:</span>
      {dashLine && <div className={style["dash-line"]}></div>}
      <span
        className={classNames(
          style["data"],
          gradient ? style["gradient-text"] : ""
        )}
      >
        {data}
      </span>
    </div>
  );
};

export default DataString;
