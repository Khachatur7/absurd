import style from "./NavPanel.module.css";
import NavButton from "../NavButton/NavButton";
import TerroriesSVG from "../../components/SVG/TerritoriesSVG/TerritoriesSVG";
import WarehouseSVG from "../../components/SVG/WarehouseSVG/WarehouseSVG";
import TasksSVG from "../../components/SVG/TasksSVG/TasksSVG";
import ShopSVG from "../../components/SVG/ShopSVG/ShopSVG";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import ResourcePopup from "../../components/Popups/ResourcePopup/ResourcePopup";

interface Page {
  name: string;
  text: string;
  children: ReactNode;
}

const NavPanel = () => {
  const [takeResource, setTakeResource] = useState<boolean>(false);
  const isOnProfile = useMatch("/absurd/profile");
  const isOnRating = useMatch("/absurd/rating");
  const isOnStatisics = useMatch("/absurd/statisics");
  const isOnAlliance = useMatch("/absurd/alliance");
  const isOnWallet = useMatch("/absurd/wallet");
  const isOnManagment = useMatch("/absurd/managment");
  const navigate = useNavigate();
  const pageNames = ["territories", "warehouse", "tasks", "shop"];
  const [activePage, setActivePage] = useState<string>(
    isOnProfile ? "" : pageNames[0]
  );
  const location = useLocation();
  const magicStick =
    activePage == "territories" && !isOnAlliance && !isOnManagment;
  const [resourceTaken, setResourceTaken] = useState(false);

  const pages: Page[] = [
    {
      name: pageNames[0],
      text: "Территории",
      children: <TerroriesSVG gradient={activePage == "territories"} />,
    },
    {
      name: pageNames[1],
      text: "Склад",
      children: (
        <WarehouseSVG gradient={activePage == "warehouse"} />
      ),
    },
    {
      name: pageNames[2],
      text: "Задания",
      children: <TasksSVG gradient={activePage == "tasks"} />,
    },
    {
      name: pageNames[3],
      text: "Магазин",
      children: <ShopSVG gradient={activePage == "shop"} />,
    },
  ];

  const ChangePage = (pageName: string) => {
    navigate(`/absurd/${pageName}`);
    setActivePage(pageName);
  };

  useEffect(() => {
    if (isOnAlliance) {
      setActivePage("territories");
    } else if (isOnProfile || isOnStatisics || isOnWallet) {
      setActivePage("");
    }
    else if (isOnRating){
      setActivePage('warehouse')
    }
  }, [location]);

  useEffect(() => {
    if (takeResource) {
      setResourceTaken(true);
    }
  }, [takeResource]);

  return (
    <>
      <div className={style["navigation"]}>
        <div
          className={classNames(
            magicStick && !resourceTaken
              ? style["active-magic-stick"]
              : magicStick && resourceTaken
              ? style["magic-stick"]
              : style["circle"]
          )}
          onClick={() => (magicStick ? setTakeResource(true) : 0)}
        >
          {magicStick && (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.80566 4.80566C3.39811 6.2132 3.39811 8.49529 4.80566 9.90282L6.79034 11.8875C6.80524 11.8703 6.82086 11.8534 6.83722 11.8371L11.8372 6.83709C11.8535 6.82077 11.8703 6.80519 11.8875 6.79032L9.90282 4.80566C8.49529 3.39811 6.2132 3.39811 4.80566 4.80566Z"
                fill="white"
              />
              <path
                d="M13.2098 8.11267C13.1949 8.12985 13.1793 8.14662 13.1629 8.16293L8.16296 13.1629C8.1466 13.1793 8.12979 13.1949 8.11255 13.2098L20.097 25.1944C21.5047 26.6019 23.7867 26.6019 25.1943 25.1944C26.6018 23.7868 26.6018 21.5048 25.1943 20.0971L13.2098 8.11267Z"
                fill="white"
              />
              <path
                d="M20.125 2.88399C20.3262 2.372 21.0481 2.372 21.2492 2.88399L21.7872 4.25309C21.8487 4.4094 21.972 4.53314 22.1277 4.59479L23.4917 5.13475C24.0018 5.33668 24.0018 6.06125 23.4917 6.26318L22.1277 6.80315C21.972 6.8648 21.8487 6.98853 21.7872 7.14484L21.2493 8.51394C21.0481 9.02593 20.3262 9.02593 20.125 8.51395L19.5871 7.14484C19.5256 6.98853 19.4023 6.8648 19.2466 6.80315L17.8826 6.26318C17.3725 6.06125 17.3725 5.33668 17.8826 5.13475L19.2466 4.59479C19.4023 4.53314 19.5256 4.4094 19.5871 4.25309L20.125 2.88399Z"
                fill="white"
              />
              <path
                d="M24.959 11.4118C25.1601 10.8998 25.8821 10.8998 26.0832 11.4118L26.2794 11.911C26.3409 12.0673 26.4641 12.1911 26.6199 12.2527L27.1171 12.4496C27.6272 12.6515 27.6272 13.3761 27.1171 13.578L26.6199 13.7749C26.4641 13.8365 26.3409 13.9603 26.2794 14.1165L26.0832 14.6158C25.8821 15.1278 25.1601 15.1278 24.959 14.6158L24.7629 14.1165C24.7014 13.9603 24.5781 13.8365 24.4224 13.7749L23.925 13.578C23.415 13.3761 23.415 12.6515 23.925 12.4496L24.4224 12.2527C24.5781 12.1911 24.7014 12.0673 24.7629 11.911L24.959 11.4118Z"
                fill="white"
              />
              <path
                d="M6.4165 19.134C6.61768 18.622 7.33959 18.622 7.54076 19.134L7.73691 19.6331C7.79834 19.7895 7.92161 19.9132 8.07735 19.9749L8.57469 20.1717C9.08479 20.3736 9.08479 21.0982 8.57469 21.3001L8.07735 21.497C7.92161 21.5586 7.79834 21.6824 7.73691 21.8388L7.54076 22.3379C7.33959 22.8499 6.61768 22.8499 6.4165 22.3379L6.22035 21.8388C6.15893 21.6824 6.03565 21.5586 5.87991 21.497L5.38258 21.3001C4.87247 21.0982 4.87247 20.3736 5.38258 20.1717L5.87991 19.9749C6.03565 19.9132 6.15893 19.7895 6.22035 19.6331L6.4165 19.134Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div className={style["left-panel"]}>
          {pages.slice(0, 2).map((page) => {
            return (
              <NavButton
                text={page.text}
                onClick={() => ChangePage(page.name)}
                key={page.name}
                active={activePage == page.name}
              >
                {page.children}
              </NavButton>
            );
          })}
        </div>
        <div className={style["right-panel"]}>
          {pages.slice(2, 4).map((page) => {
            return (
              <NavButton
                text={page.text}
                onClick={() => ChangePage(page.name)}
                key={page.name}
                active={activePage == page.name}
              >
                {page.children}
              </NavButton>
            );
          })}
        </div>
      </div>
      <div className={style["black-bg"]}></div>
      {takeResource && <ResourcePopup closePopup={setTakeResource} />}
    </>
  );
};
export default NavPanel;
