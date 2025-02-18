import { FC } from "react";
import style from "./Input.module.css";

const Input: FC<{ placeholder?: string; onChange: () => void }> = ({
  placeholder,
  onChange,
}) => {
  return (
    <div className={style['parent-for-blur']}>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder || ""}
        className={style["input"]}
      />
      <div className={style["blur-bg"]}></div>
    </div>
  );
};

export default Input;
