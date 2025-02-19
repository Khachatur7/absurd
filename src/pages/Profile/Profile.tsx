import { useState } from "react";
import Header from "../../components/Header/Header";
import style from "./Profile.module.css";
import classNames from "classnames";
import MyStatistics from "./MyStatistics/MyStatistics";
import AllStatistics from "./AllStatistics/AllStatistics";
import RankPopup from "../../components/Popups/RankPopup/RankPopup";

const Profile = () => {
  const sectionTitles = ["Моя статистика", "Общая статистика"];
  const storage = localStorage.getItem("what-statistics");
  const [activeSection, setActiveSection] = useState<string>(
    storage == "my" ? sectionTitles[0] : sectionTitles[1]
  );
  const [rankPopup, setRankPopup] = useState<boolean>(false);
  return (
    <div className={style["profile-page"]}>
      <Header
        text="иван иванов"
        subtitle="НОВИЧОК"
        openRankPopup={() => setRankPopup(true)}
      />
      <div className={style["navigation"]}>
        <div className={style["nav-buttons"]}>
          {sectionTitles.map((bttn) => {
            return (
              <button
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
      {activeSection == "Моя статистика" && <MyStatistics />}
      {activeSection == "Общая статистика" && <AllStatistics />}
      {rankPopup && <RankPopup closePopup={setRankPopup} />}
    </div>
  );
};

export default Profile;
