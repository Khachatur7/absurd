import classNames from "classnames";
import Header from "../../components/Header/Header";
import style from "./Rating.module.css";
import { useState } from "react";
import RatingList from "../../components/RatingList/RatingList";
import { IRating } from "../../types/interfaces";

const Rating = () => {
  const sectionTitles = ["Общий рейтинг", "Недельный рейтинг"];
  const [activeSection, setActiveSection] = useState(sectionTitles[0]);
  const generalRating: IRating[] = [
    {
      name: "MUT0GEN",
      token: "$TAXI",
      count: "257.47",
    },
    {
      name: "DENAT1985",
      token: "$TAXI",
      count: "206.81",
    },
    {
      name: "SALUT_NATALIE",
      token: "$TAXI",
      count: "205.51",
    },
    {
      name: "DIMMON86",
      token: "$TAXI",
      count: "186.61",
    },
  ];
  const weekRating: IRating[] = [
    {
      name: "MUT0GENIUS",
      token: "$TAXI",
      count: "257.47",
    },
    {
      name: "KOROL001",
      token: "$Bolt",
      count: "206.81",
    },
    {
      name: "CHILLGUY",
      token: "$Attera",
      count: "186.61",
    },
  ];
  return (
    <div className={style["rating-page"]}>
      <Header text="Рейтинг" />
      <div className={style["navigation"]}>
        <div className={style["nav-buttons"]}>
          {sectionTitles.map((bttn) => {
            return (
              <button
                key={bttn}
                className={classNames(
                  style["nav-button"],
                  activeSection === bttn ? style["active-bttn"] : ""
                )}
                onClick={() => setActiveSection(bttn)}
              >
                <span>{bttn}</span>
              </button>
            );
          })}
        </div>
      </div>
      <RatingList
        rateList={activeSection == "Общий рейтинг" ? generalRating : weekRating}
      />
    </div>
  );
};

export default Rating;
