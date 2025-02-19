import style from "./Prequel.module.css";
import bgImage from "../../assets/preguel-bg.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Prequel = () => {
  const headlines = ["2040 год", "2045 год"];
  const texts = [
    [
      `Земля истощена. Экономика мелких государств рухнула, потянув вслед за собой волны беженцев, а крупные - балансируют на грани коллапса. Корпорации и правительства жёстко регулируют трудовой и фондовый рынки, тщетно стремясь спастись от полного погружения в хаос.`,
      `Ученые и экономисты всего мира бьются в бесплодных попытках найти какое-либо решение, пока крупные страны в очередной войне делят последний нефтяной шельф в Арктике. Нейросети и криптовалюты получают небывалый скачок в развитии и стремительно уходят в тень, желая избежать внимания регуляторов.`,
    ],
    [
      `На фоне участившихся случаев бесконтрольного развития ИИ, государства в единым меморандумом запрещают нейросети, т.к оказались не в состоянии контролировать их идеологическое развитие. Все взаимодействия с нейросетями и криптовалютами преследуются по закону, дата-центры - ликвидируются, пользователей деанонимизируют и наказывают по всей строгости. Мир, который каких-то 20 лет назад обещал стать для людей цифровым раем, оборачивается цифровой клеткой.`,
      `В попытке спастись от преследования, и сохранить плоды многолетней работы над новой моделью алгоритма GPT 8.0, двое учёных решаются на отчаянный шаг - использовать собственный мозг в качестве хранилища данных и повышения производительной мощности нейросети, для этого они буквально спаивают свои сознания в единое целое. Цель - завершить вычисления, которые, по задумке, должны помочь человечеству побороть кризис.`,
      `После нескольких суток беспрерывной работы на максимальной мощности, чуть было не уничтожив органический мозг нагрузкой, нейросеть находит решение поставленной задачи и выдаёт инструкцию, как создать портал в параллельный мир, где существуют новые, невиданные ранее, ресурсы.`,
    ],
  ];
  const navigate = useNavigate();
  const storage = localStorage.getItem("first-time");
  const firstVisiting = storage ? JSON.parse(storage) : false;
  const [prequelEnd, setPrequelEnd] = useState(false);
  if (!firstVisiting) {
    localStorage.setItem("first-time", JSON.stringify("not first time"));
  }

  const SkipPrequel = () => {
    setPrequelEnd(true);
    setTimeout(() => {
      navigate("/absurd");
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrequelEnd(true);
      setTimeout(() => {
        navigate("/absurd");
      }, 2000);
    }, 70000);

    return () => {
      clearTimeout(timer);
    };
  }, [prequelEnd]);

  return (
    <div className={style["prequel-page"]}>
      <div className={style["bg"]}>
        <img src={bgImage} alt="" />
      </div>
      <div
        className={classNames(
          style["prequel-start"],
          prequelEnd ? style["prequel-end"] : ""
        )}
      ></div>
      <div className={style["top-shadow"]}></div>
      <div className={style["prequel"]}>
        {headlines.map((text, ind) => {
          return (
            <div className={style["prequel-component"]} key={text}>
              <span className={style["title"]}>{text}</span>
              <div className={style["description"]}>
                {texts[ind].map((desc) => {
                  return <span key={desc} className={style["paragraph"]}>{desc}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className={style["skip-button"]} onClick={SkipPrequel}>
        Пропустить
      </div>
    </div>
  );
};

export default Prequel;
