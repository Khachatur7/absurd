import { FC, useEffect, useState } from "react";
import style from "./ProgressBar.module.css";
import classNames from "classnames";

const ProgressBar: FC<{ progressbar: number }> = ({ progressbar }) => {
  const [progressbarCount, setProgressbarCount] = useState(progressbar);
  const [progressBlocks, setProgressBlocks] = useState(
    Array.from({ length: progressbarCount }, (_, i) => i).slice(0, 12)
  );
  useEffect(() => {
    setProgressBlocks(
      Array.from({ length: progressbarCount }, (_, i) => i).slice(0, 12)
    );
  }, [progressbarCount]);

  return (
    <div
      className={classNames(
        style["progressbar"],
        progressBlocks.length > 9
          ? style["birch-progressbar"]
          : progressBlocks.length > 5
          ? style["violet-progressbar"]
          : ""
      )}
      onClick={() => {
        progressbarCount < 12 ? setProgressbarCount(progressbarCount + 1) : "";
      }}
    >
      {progressBlocks.map((p) => {
        return <div className={style["progressbar-block"]} key={p}></div>;
      })}
    </div>
  );
};

export default ProgressBar;
