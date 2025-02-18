import { IVoucher } from "../../types/interfaces";
import Voucher from "../Voucher/Voucher";
import style from "./VoucherList.module.css";

const VoucherList = () => {
  const voucherList: IVoucher[] = [
    {
      name: "Территория из альянса",
      type: "Ваучер",
      score: 0,
    },
    {
      name: "Новая соло территория",
      type: "Ваучер",
      score: 2,
    },
    {
      name: "Случайное присоединение",
      type: "Ваучер",
      score: 0,
    },
    {
      name: "Случайная территория",
      type: "Ваучер",
      score: 0,
    },
    
  ];

  return (
    <div className={style["voucher-list"]}>
      {voucherList.map((v) => {
        return <Voucher name={v.name} score={v.score} type={v.type} key={v.name}/>;
      })}
    </div>
  );
};

export default VoucherList;
