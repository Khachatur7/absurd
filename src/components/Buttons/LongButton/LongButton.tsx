import { FC, ReactNode } from "react";
import style from "./LongButton.module.css";
import classNames from "classnames";
const LongButton: FC<{
  children: ReactNode;
  onClick: () => void;
  costumHeight?: boolean;
  borderRadius?: string;
}> = ({ children, onClick, costumHeight, borderRadius }) => {
  return (
    <button
      className={classNames(
        style["long-button"],
        costumHeight ? style["custom-height"] : ""
      )}
      onClick={onClick}
      style={{ borderRadius: borderRadius ? borderRadius : "10px" }}
    >
      <span>{children}</span>
    </button>
  );
};

export default LongButton;
