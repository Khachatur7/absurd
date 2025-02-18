import { FC, ReactNode } from "react";
import style from "./Button.module.css";
import classNames from "classnames";

const Button: FC<{ onClick: () => void; children: ReactNode,customWidth?:boolean }> = ({
  onClick,
  children,
  customWidth
}) => {
  return (
    <button onClick={onClick} className={classNames(style["button"],customWidth?style['custom-width']:"")}>
      {children}
    </button>
  );
};

export default Button;
