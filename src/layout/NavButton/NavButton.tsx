import { FC, ReactNode } from "react";
import style from "./NavButton.module.css";
import classNames from "classnames";

const NavButton: FC<{
  text: string;
  children: ReactNode;
  onClick: () => void;
  active: boolean;
}> = ({ text, children, onClick, active }) => {
  return (
    <div
      className={classNames(
        style["nav-bttn"],
        active ? style["active-nav-bttn"] : ""
      )}
      onClick={onClick}
    >
      {children}
      <span className={style["nav-bttn-title"]}>{text}</span>
    </div>
  );
};

export default NavButton;
