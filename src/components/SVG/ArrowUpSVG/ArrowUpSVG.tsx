import { FC } from "react";

const ArrowUpSVG:FC<{gradient?:boolean}> = ({gradient}) => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 10H0.5V7.5L8 0L15.5 7.5V10H10.5V20H5.5V10Z"
        fill="#4294FF"
      />
      <path
        d="M5.5 10H0.5V7.5L8 0L15.5 7.5V10H10.5V20H5.5V10Z"
        fill={gradient?"url(#paint0_linear_228_1160)":"#4294FF"}
      />
      <defs>
        <linearGradient
          id="paint0_linear_228_1160"
          x1="0.297569"
          y1="-0.200024"
          x2="14.5541"
          y2="6.69604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F72585" />
          <stop offset="1" stopColor="#4CC9F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowUpSVG;
