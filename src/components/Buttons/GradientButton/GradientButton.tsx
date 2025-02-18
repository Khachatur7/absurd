import { FC, ReactNode } from "react";
import style from "./GradientButton.module.css";
import classNames from "classnames";

const GradientButton: FC<{
  children: ReactNode;
  onClick: () => void;
  active: boolean;
}> = ({ children, onClick, active }) => {
  return (
    <button
      className={classNames(
        style["gradient-button"],
        active ? style["active"] : ""
      )}
      onClick={onClick}
    >
      <div className={style['blur-bg']}>

      </div>
      <span>{children}</span>
    </button>
  );
};

export default GradientButton;
