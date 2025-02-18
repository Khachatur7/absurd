import style from "./Layout.module.css";
import mainBGImage from "../assets/main-bg.png";
import NavPanel from "./NavPanel/NavPanel";
import { Outlet, useMatch } from "react-router-dom";
import classNames from "classnames";
const Layout = () => {
  const isFromPrequel = useMatch("/absurd");

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
