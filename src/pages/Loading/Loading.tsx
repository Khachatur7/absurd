import { useNavigate } from "react-router-dom";
import style from "./Loading.module.css";

const Loading = () => {
  const navigate = useNavigate();
  const storage = localStorage.getItem("first-time");
  const firstVisiting = storage ? JSON.parse(storage) : false;
  console.log(firstVisiting);
  const nextPage = firstVisiting ? "/absurd" : "/prequel";

  return (
    <div className={style["loading-page"]}>
      <h1 onClick={() => navigate(nextPage)} className={style["title"]}>
        территория абсурда
      </h1>
    </div>
  );
};

export default Loading;
