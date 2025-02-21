import style from "./Header.module.css";
import avatar from "../../assets/avatar.png";
import { FC } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import classNames from "classnames";
const Header: FC<{
  text: string;
  subtitle?: string;
  subTitleIsRank?: boolean;
  openRankPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ text, subtitle, openRankPopup, subTitleIsRank }) => {
  const navigate = useNavigate();
  const isOnProfile = useMatch("/absurd/profile");
  const isOnRating = useMatch("/absurd/rating");

  const ClickOnAvatar = () => {
    if (!isOnProfile) {
      localStorage.setItem("what-statistics", "my");
      return navigate("/absurd/profile");
    } else if (openRankPopup && isOnProfile) {
      return openRankPopup(true);
    }
  };

  return (
    <div className={style["header"]}>
      <div className={style["avatar"]} onClick={ClickOnAvatar}>
        <img src={avatar} alt="" />
        {isOnProfile && (
          <div className={classNames(style["symbol"], style["blue"])}>
            <div className={style["white-circle"]}>
              <span>I</span>
            </div>
          </div>
        )}
        <div className={style["border"]}></div>
      </div>
      <div
        className={style["text"]}
        onClick={() =>
          subTitleIsRank ? openRankPopup && openRankPopup(true) : ""
        }
      >
        <span>{text}</span>
        {subtitle && <span className={style["subtitle"]}>{subtitle}</span>}
      </div>
      <div
        className={style["header-icon"]}
        onClick={() => (!isOnRating ? navigate("/absurd/rating") : "")}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_228_4010)">
            <path
              d="M26.1544 1.94118H23.4047C23.351 0.857912 22.4528 0 21.3564 0H8.62872C7.53231 0 6.63425 0.857912 6.58043 1.94118H3.83075C2.71581 1.94118 1.80884 2.85776 1.80884 3.98444V9.19209C1.80884 9.92947 2.16769 10.8085 2.68148 11.3298L4.11187 12.7811C4.6314 13.3084 5.51234 13.6765 6.25396 13.6765H6.57354V14.3846C6.57354 15.4196 7.25031 16.6801 8.11157 17.2542L12.5146 20.1801L11.8843 24H8.99631C8.54807 24 8.1196 24.3344 7.99969 24.7662L6.8221 29.0077C6.75328 29.2556 6.7974 29.5071 6.94316 29.6989C7.08893 29.8907 7.3201 30 7.5774 30H22.4077C22.6649 30 22.8961 29.8929 23.042 29.7011C23.1877 29.5092 23.2318 29.2585 23.163 29.0105L21.9856 24.7654C21.8655 24.3336 21.437 24 20.9889 24H18.1007L17.4693 20.1803L21.881 17.2499C22.7423 16.6758 23.4265 15.4196 23.4265 14.3846V13.6765H23.7312C24.4751 13.6765 25.3574 13.3084 25.8759 12.7823L27.3113 11.3297C27.8294 10.8039 28.1913 9.92488 28.1913 9.19209V3.98444C28.1912 2.85776 27.2775 1.94118 26.1544 1.94118ZM6.57354 11.0294H6.2656C6.19307 11.0201 6.04634 10.959 5.98828 10.9141L4.57501 9.48018C4.5279 9.41815 4.46437 9.25976 4.45581 9.18274V4.58824H6.57346L6.57354 11.0294ZM19.5003 8.55344L17.5037 10.0145C17.1896 10.2427 17.0308 10.7367 17.1508 11.106L17.9132 13.4558C18.0332 13.8251 17.8744 13.9417 17.5603 13.7135L15.5638 12.2636C15.2497 12.0354 14.7358 12.0356 14.4216 12.2638L12.4246 13.7147C12.1105 13.9429 11.9517 13.8275 12.0717 13.4583L12.8344 11.1111C12.9544 10.7419 12.7955 10.2531 12.4814 10.0249L10.4847 8.55335C10.1705 8.32518 10.2312 8.11756 10.6195 8.11756H13.0874C13.4757 8.11756 13.8915 7.83635 14.0115 7.46718L14.7745 5.13035C14.8945 4.76118 15.0908 4.76638 15.2108 5.13565L15.9732 7.46453C16.0932 7.83379 16.509 8.11756 16.8973 8.11756H19.3654C19.7538 8.11765 19.8144 8.32526 19.5003 8.55344ZM25.5441 9.18C25.534 9.25809 25.4675 9.41691 25.4191 9.47859L24.0013 10.9134C23.9422 10.9586 23.7934 11.0201 23.7198 11.0294H23.4265V4.58824H25.5441V9.18Z"
              fill="url(#paint0_linear_228_4010)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_228_4010"
              x="-2.19116"
              y="0"
              width="34.3824"
              height="38"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.882353 0 0 0 0 0.227451 0 0 0 0 0.572549 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_228_4010"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_228_4010"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_228_4010"
              x1="1.4528"
              y1="-0.300036"
              x2="24.8635"
              y2="12.978"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F72585" />
              <stop offset="1" stopColor="#4CC9F0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Header;
