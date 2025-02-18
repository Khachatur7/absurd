import { FC } from "react";
import style from "./Token.module.css";
import { IToken } from "../../types/interfaces";
import tonLogo from "../../assets/ton.png";
import classNames from "classnames";
const Token: FC<{ token: IToken }> = ({ token }) => {
  return (
    <div className={style["token-component"]}>
      <div className={style["avatar"]}> <img src={token.avatar} alt="" /></div>
     <div className={style['token-content']}>
     <div className={style["token"]}>
        <span className={style["count"]}> {token.count || "0.00"}</span>
        <span className={style["token-name"]}>${token.tokenName || "..."}</span>
      </div>
      <div className={style["money-info"]}>
        <div className={style["balance"]}>
          <div className={style["balance-in-ton"]}>
            {token.balanceInCrypto || "0.00"}
            <img src={tonLogo} alt="" />
          </div>
          <span> | </span>
          <div className={style["balance-in-dollar"]}>
            ${token.balanceInDollar || "0.00"}
          </div>
        </div>
        <div className={classNames(style["bonus"],+token.bonusPercent>0?style["bonus-gradient"]:"")}>
        <span>Бонус холдера: {token.bonusPercent || "0"} %</span>

        </div>
      </div>
     </div>
    </div>
  );
};

export default Token;
