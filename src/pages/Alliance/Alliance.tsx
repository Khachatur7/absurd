import Header from "../../components/Header/Header";
import style from "./Alliance.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import ExtendableDataList from "../../components/ExtendableDataList/ExtendableDataList";
import { IDataString } from "../../types/interfaces";
import LongButton from "../../components/Buttons/LongButton/LongButton";
import Button from "../../components/Buttons/Button/Button";
import { useNavigate } from "react-router-dom";

const Alliance = () => {
  const navigate = useNavigate()
  const firstData: IDataString[] = [
    {
      name: "Баланс",
      data: "74.29",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Участники",
      data: "40 / 40",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Рейтинг альянса",
      data: "2740.82",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Всего территорий",
      data: "738",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Средний уровень",
      data: "5.89",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Чат альянса",
      data: "ton_taxibot",
      dashLine: true,
      gradient: true,
    },
  ];
  const secondData: IDataString[] = [
    {
      name: "Статус",
      data: "Владелец",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Всего вложений",
      data: "1782.00",
      dashLine: true,
      gradient: false,
    },
    {
      name: "Совместные",
      data: "56",
      dashLine: true,
      gradient: false,
    },
  ];
  return (
    <div className={style["alliance-page"]}>
      <Header text="ton_taxibot" />
      <PageTitle text="Управление альянсом" />
      <div className={style["datas"]}>
        <ExtendableDataList
          alwaysOpened
          datas={firstData}
          title="СТАТИСТИКА АЛЬЯНСА"
        />
        <ExtendableDataList alwaysOpened datas={secondData} title="Bazoom" />
      </div>
      <div className={style["button"]}>
        <LongButton costumHeight onClick={() => {}}>
          {" "}
          <span>Покинуть альянс</span>
        </LongButton>
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
        <Button onClick={() => navigate("/absurd/managment")}>
          <div className={style["children"]}>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8645 0.583313H6.13533C2.34367 0.583313 0.083252 2.84373 0.083252 6.6354V15.3541C0.083252 19.1562 2.34367 21.4166 6.13533 21.4166H14.8541C18.6458 21.4166 20.9062 19.1562 20.9062 15.3646V6.6354C20.9166 2.84373 18.6562 0.583313 14.8645 0.583313ZM5.9895 4.22915C5.9895 3.80206 6.34367 3.4479 6.77075 3.4479C7.19783 3.4479 7.552 3.80206 7.552 4.22915V8.29165C7.552 8.71873 7.19783 9.0729 6.77075 9.0729C6.34367 9.0729 5.9895 8.71873 5.9895 8.29165V4.22915ZM7.91952 15.6159C7.70761 15.71 7.552 15.9096 7.552 16.1414V17.7708C7.552 18.1979 7.19783 18.5521 6.77075 18.5521C6.34367 18.5521 5.9895 18.1979 5.9895 17.7708V16.1414C5.9895 15.9096 5.83388 15.71 5.62203 15.6157C4.62778 15.1733 3.93742 14.1854 3.93742 13.0312C3.93742 11.4687 5.20825 10.1875 6.77075 10.1875C8.33325 10.1875 9.6145 11.4583 9.6145 13.0312C9.6145 14.1856 8.91565 15.1735 7.91952 15.6159ZM15.0103 17.7708C15.0103 18.1979 14.6562 18.5521 14.2291 18.5521C13.802 18.5521 13.4478 18.1979 13.4478 17.7708V13.7083C13.4478 13.2812 13.802 12.9271 14.2291 12.9271C14.6562 12.9271 15.0103 13.2812 15.0103 13.7083V17.7708ZM14.2291 11.8021C12.6666 11.8021 11.3853 10.5312 11.3853 8.95831C11.3853 7.80399 12.0842 6.81604 13.0803 6.37366C13.2922 6.27955 13.4478 6.07999 13.4478 5.84811V4.22915C13.4478 3.80206 13.802 3.4479 14.2291 3.4479C14.6562 3.4479 15.0103 3.80206 15.0103 4.22915V5.85853C15.0103 6.09041 15.166 6.28993 15.3778 6.3842C16.372 6.82665 17.0624 7.81451 17.0624 8.96873C17.0624 10.5312 15.7916 11.8021 14.2291 11.8021Z"
                fill="white"
              />
            </svg>

            <div>Управление альянсом</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Alliance;
