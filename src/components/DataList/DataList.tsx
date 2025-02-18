import { FC } from "react";
import style from "./DataList.module.css";
import { IDataString } from "../../types/interfaces";
import DataString from "../DataString/DataString";

const DataList: FC<{ datas: IDataString[] }> = ({ datas }) => {
  return (
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
  );
};

export default DataList;
