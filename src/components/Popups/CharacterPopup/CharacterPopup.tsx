import style from "./CharacterPopup.module.css";
import characterImage from "../../../assets/character.png";
import clientAvatar from "../../../assets/avatar.png";
import { IMessage } from "../../../types/interfaces";
import Message from "../../Message/Message";
import LongButton from "../../Buttons/LongButton/LongButton";
import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CharacterPopup: FC<{
  closePopup: (value: React.SetStateAction<boolean>) => void;
}> = ({ closePopup }) => {
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const messages: IMessage[] = [
    {
      avatar: characterImage,
      name: "Торговец Джек",
      message: `Джек — существо, напоминающее огромного карпа, одетого в полосатый, слегка потрёпанный жилет и с маленькой шляпой, которая постоянно сползает ему на бок. Его плавники двигаются плавно и грациозно, а глаза блестят, словно в них скрыто тысяча тайн. Из его рта периодически вырывается клуб дыма, когда он с хитрецой улыбается. Говорит он с растяжкой и лёгкой картавостью, словно смакуя каждое своё слово.`,
    },
    {
      avatar: clientAvatar,
      name: "Иван Иванов",
      message: "Кто ты?",
    },
  ];

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className={style["modale"]}>
      <div className={style["about-character"]}>
        <div className={style["character-image"]}>
          <img src={characterImage} alt="" />
        </div>
        <div className={style["character-info"]}>
          <div className={style["name"]}>
            {" "}
            <span>Торговец Джек</span>
          </div>
          <div className={style["description"]}>
            {" "}
            <span>
              Оператор ощущает в его присутствии энергию искушения и ловкости.
              Голос Джека звучит мягко и тянуще, с примесью хитрости и
              обольщения. Каждое его слово — будто загадка, за которой кроется
              что-то большее, чем просто торговля.
            </span>
          </div>
        </div>
      </div>
      <div className={style["chat"]}>
        {messages.map((m) => {
          return <Message message={m} key={m.message} />;
        })}
        <div ref={messagesEndRef} className={style["scroll-marker"]} />
      </div>
      <div className={style["questions-buttons"]}>
        <div className={style["long-button"]}>
          <LongButton costumHeight onClick={() => {}}>
            {" "}
            <span>Кто ты?</span>
          </LongButton>
        </div>
        <div className={style["long-button"]}>
          <LongButton costumHeight onClick={() => {}}>
            {" "}
            <span>Как сделать X?</span>
          </LongButton>
        </div>
        <div className={style["long-button"]}>
          <LongButton costumHeight onClick={() => navigate("/prequel")}>
            {" "}
            <span>Что ты знаешь об этом мире?</span>
          </LongButton>
        </div>
        <div className={style["long-button"]}>
          <LongButton costumHeight onClick={() => closePopup(false)}>
            {" "}
            <span>Закрыть</span>
          </LongButton>
        </div>
      </div>
    </div>
  );
};

export default CharacterPopup;
