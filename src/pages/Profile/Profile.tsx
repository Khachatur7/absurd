import { useState } from "react";
import Header from "../../components/Header/Header";
import style from "./Profile.module.css";
import classNames from "classnames";
import MyStatistics from "./MyStatistics/MyStatistics";
import AllStatistics from "./AllStatistics/AllStatistics";
import RankPopup from "../../components/Popups/RankPopup/RankPopup";

const Profile = () => {
  const sectionTitles = ["Моя статистика", "Cтатистика территории"];
  const storage = localStorage.getItem("what-statistics");
  const activeSection = storage == "my" ? sectionTitles[0] : sectionTitles[1];
  const [rankPopup, setRankPopup] = useState<boolean>(false);
  return (
    <div className={style["profile-page"]}>
      <Header
        text="иван иванов"
        subtitle="НОВИЧОК"
        openRankPopup={() => setRankPopup(true)}
        subTitleIsRank
      />
      <div className={style["navigation"]}>
        <div className={style["nav-buttons"]}>
          <button
            className={classNames(style["nav-button"], style["active-bttn"])}
          >
            <span>{activeSection}</span>
          </button>
        </div>
      </div>
      {activeSection == "Моя статистика" && <MyStatistics />}
      {activeSection == "Cтатистика территории" && <AllStatistics />}
      {rankPopup && <RankPopup closePopup={setRankPopup} />}
    </div>
  );
};

export default Profile;
