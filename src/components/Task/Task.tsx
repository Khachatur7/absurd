import style from "./Task.module.css";
import taskIcon from "../../assets/task.png";
import LongButton from "../Buttons/LongButton/LongButton";
import { FC } from "react";
import { ITask } from "../../types/interfaces";
const Task: FC<ITask> = ({ title, subtitle, award }) => {
  return (
    <div className={style["task-component"]}>
      <div className={style["main-info"]}>
        <div className="icon">
          <img src={taskIcon} alt="taskIcon" />
        </div>
        <div className={style["description"]}>
          <div className={style["title"]}>
            {" "}
            <span>{title}</span>
          </div>
          <div className={style["award"]}>
            {" "}
            <span>Награда: {award} $ATERRA</span>
          </div>
        </div>
      </div>
      <div className={style["subtitle"]}>
        {" "}
        <span>{subtitle}</span>
      </div>
      <div className={style["buttons"]}>
        <LongButton borderRadius="6px" costumHeight onClick={() => {}}>
          Канал
        </LongButton>
        <LongButton borderRadius="6px" costumHeight onClick={() => {}}>
          Чат
        </LongButton>
      </div>
      <div className={style["line"]}></div>
    </div>
  );
};

export default Task;
