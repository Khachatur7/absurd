import { useState } from "react";
import AllianceUsersList from "../../components/AllianceUsersList/AllianceUsersList";
import Button from "../../components/Buttons/Button/Button";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import style from "./AllianceManagement.module.css";
import classNames from "classnames";
import { IUser } from "../../types/interfaces";

const AllianceManagement = () => {
  const options = ["Все участники", "По запросу"];
  const [chooseOption, setChooseOption] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(options[0]);
  const users: IUser[] = [
    { nickname: "BAZOOM", grade: "Владелец", specialGrade: true },
    { nickname: "TIMA1305", grade: "Админ", specialGrade: true },
    { nickname: "MASLENA92", grade: "Админ", specialGrade: true },
    { nickname: "CONNYCOX", grade: "Участник", specialGrade: false },
    { nickname: "DENANT1985", grade: "Участник", specialGrade: false },
    { nickname: "BARONDEXTON", grade: "Участник", specialGrade: false },
    { nickname: "EVGENIYALESNYAK", grade: "Участник", specialGrade: false },
    { nickname: "CONNYCOX", grade: "Участник", specialGrade: false },
    { nickname: "DENANT1985", grade: "Участник", specialGrade: false },
    { nickname: "BARONDEXTON", grade: "Участник", specialGrade: false },
  ];

  const requests: IUser[] = [
    { nickname: "John Gotti", grade: "", specialGrade: false },
  ];
  const ChooseNewOption = (text: string) => {
    setActiveOption(text);
    setChooseOption(false);
  };
  return (
    <div className={style["alliance-management-page"]}>
      <Header text="ton_taxibot" />
      <PageTitle text="Управление альянсом" />
      <div className={style["select-section"]}>
        <div className={style["select-section-title"]}>
          Способ вступления в альянс:
        </div>
        <div
          className={style["select"]}
          onClick={() => setChooseOption(!chooseOption)}
        >
          <div className={style["text"]}>
            <span>{activeOption}</span>
          </div>
          <div
            className={classNames(
              style["arrow-down"],
              chooseOption ? style["active-arrow"] : ""
            )}
          >
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 1.41724L13.946 0.375L7.49016 6.57092L6.8016 5.91028L6.80539 5.91357L1.06991 0.408325L0 1.43555C1.5852 2.95713 6.0109 7.20509 7.49016 8.625C8.58959 7.57042 7.51816 8.59885 15 1.41724Z"
                fill="white"
              />
            </svg>
          </div>
          {chooseOption && (
            <div className={style["options"]}>
              {options.map((opt) => {
                return (
                  <div
                    className={style["option"]}
                    onClick={() => ChooseNewOption(opt)}
                  >
                    <span>{opt}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className={style["users"]}>
        <AllianceUsersList
          users={activeOption == "Все участники" ? users : requests}
          showRequests={activeOption == "По запросу"}
        />
      </div>
      <div className={style["def-buttons"]}>
        <Button onClick={() => {}}>
          <div className={style["children"]}>
            <svg
              width="19"
              height="25"
              viewBox="0 0 19 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0488 4.79297L13.9043 0.0664062H5.25195L6.76562 4.79297H12.0488ZM9.57812 24.1387C14.7539 24.1387 18.9727 19.9199 18.9727 14.7441C18.9727 11.0918 16.8926 7.9375 13.8555 6.36523H5.19336C2.15625 7.9375 0.134766 11.0918 0.134766 14.7441C0.134766 19.9199 4.34375 24.1387 9.57812 24.1387ZM9.07031 15.8672C7.66406 15.418 6.70703 14.7441 6.70703 13.4453C6.70703 12.2637 7.54688 11.3652 8.95312 11.082V9.85156H10.2422V11.0332C11.1406 11.0918 11.707 11.2578 12.1562 11.4824L11.7656 12.9473C11.4238 12.7812 10.8086 12.498 9.85156 12.498C9.01172 12.498 8.72852 12.8887 8.72852 13.2305C8.72852 13.6797 9.17773 13.9629 10.3008 14.3535C11.873 14.9199 12.498 15.6426 12.498 16.8242C12.498 18.0059 11.6582 19.0215 10.1348 19.2461V20.5938H8.8457V19.3535C7.94727 19.2949 7.09766 19.0703 6.59961 18.7871L6.99023 17.2734C7.55664 17.5566 8.33789 17.8398 9.1875 17.8398C9.91992 17.8398 10.4277 17.5566 10.4277 17C10.4766 16.4922 10.0273 16.209 9.07031 15.8672Z"
                fill="white"
              />
            </svg>

            <div>Вложить $ATERRA</div>
          </div>
        </Button>{" "}
        <Button onClick={() => {}}>
          <div className={style["children"]}>
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5001 1.54169C6.16675 1.54169 1.04175 6.66669 1.04175 13C1.04175 19.3334 6.16675 24.4584 12.5001 24.4584C18.8334 24.4584 23.9584 19.3334 23.9584 13C23.9584 6.66669 18.8334 1.54169 12.5001 1.54169ZM16.9688 13.7396L13.5417 10.3021V19.25H11.4584V10.3021L8.03133 13.7292L6.56258 12.2604L12.5001 6.32294L18.448 12.2709L16.9688 13.7396Z"
                fill="white"
              />
            </svg>

            <div>Увеличить вместимость</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default AllianceManagement;
