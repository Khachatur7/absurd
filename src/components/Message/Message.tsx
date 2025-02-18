import { FC } from "react";
import style from "./Message.module.css";
import { IMessage } from "../../types/interfaces";

const Message: FC<{ message: IMessage }> = ({ message }) => {
  return (
    <div className={style["message-component"]}>
      <div className={style["avatar"]}>
      
        <img src={message.avatar} alt="" />
        <div className={style["border"]}></div>
      </div>
      <div className={style["message"]}>
          <div className={style["messager-name"]}>
            {" "}
            <span>{message.name}</span>
          </div>
          <div className={style["messager-text"]}>
            {" "}
            <span>{message.message}</span>
          </div>
        </div>
    </div>
  );
};

export default Message;
