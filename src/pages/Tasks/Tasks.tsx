import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import { ITask } from "../../types/interfaces";
import style from "./Tasks.module.css";

const Tasks = () => {
  const tasks: ITask[] = [
    {
      title: "Absurd territory community",
      award: 5,
      subtitle: "Subscribe to be a good boy",
    },
    {
      title: "Герои Среднеземья",
      award: 5,
      subtitle:
        "Увлекательный игровой мир, где ты обретёшь славу и найдёшь настоящих друзей",
    },
    {
      title: "Деньги на крипте",
      award: 5,
      subtitle: "Общение о заработке на WEB3",
    },
  ];
  return (
    <div className={style["tasks-page"]}>
      <Header text="задания" />
      <div className={style["tasks-list"]}>
        {tasks.map((task) => {
          return (
            <Task
              title={task.title}
              award={task.award}
              subtitle={task.subtitle}
              key={task.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
