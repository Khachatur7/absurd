import style from "./Layout.module.css";
import mainBGImage from "../assets/main-bg.png";
import NavPanel from "./NavPanel/NavPanel";
import { Outlet, useMatch } from "react-router-dom";
import classNames from "classnames";
import { useEffect } from "react";
const Layout = () => {
  const isFromPrequel = useMatch("/absurd");
  
    useEffect(() => {
      // Убираю скролл,когда клиент на странице с приквелом
      if (location.pathname!="/prequel") {
        document.body.style.overflow = "auto";
      }
      // Возврат к предыдущему состоянию при размонтировании
      return () => {
        document.body.style.overflow = "hidden";
      };
    }, [location]);
  return (
    <div className={style["layout-page"]}>
      <div
        className={classNames(
          style["hide"],
          isFromPrequel ? style["from-prequel"] : ""
        )}
      ></div>
      <img src={mainBGImage} alt="" className={style["main-bg"]} />
      <NavPanel />
      <Outlet />
    </div>
  );
};

export default Layout;
