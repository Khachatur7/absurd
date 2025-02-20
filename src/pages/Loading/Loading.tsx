import { useNavigate } from "react-router-dom";
import style from "./Loading.module.css";
import { useEffect } from "react";

const Loading = () => {
  const navigate = useNavigate();
  const storage = localStorage.getItem("first-time");
  const firstVisiting = storage ? JSON.parse(storage) : false;
  const nextPage = firstVisiting ? "/absurd" : "/prequel";

  useEffect(() => {
    const navigateTimer = setTimeout(() => {
      navigate(nextPage);
    }, 4000);
    return () => {
      clearTimeout(navigateTimer);
    };
  }, []);

  return (
    <div className={style["loading-page"]}>
      <h1 onClick={() => navigate(nextPage)} className={style["title"]}>
        территория абсурда
      </h1>
      {[...Array(12)].map((_) => {
        return <div className={style["bg-pre-loading"]} key={Math.floor(Math.random() * 100)}></div>;
      })}
    </div>
  );
};

export default Loading;
