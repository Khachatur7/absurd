import { FC } from "react";

const TasksSVG:FC<{width?:string,gradient:boolean}> = ({width,gradient}) => {
  return (
    <svg
      width={width ?width: "25px"}
      height="25px"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
      <path
        d="M8.33337 3.64581C8.33337 2.78287 9.03293 2.08331 9.89587 2.08331H15.1042C15.9671 2.08331 16.6667 2.78287 16.6667 3.64581V4.68748C16.6667 5.55043 15.9671 6.24998 15.1042 6.24998H9.89587C9.03293 6.24998 8.33337 5.55043 8.33337 4.68748V3.64581Z"
               fill={gradient?"url(#paint0_linear_228_4010)":"#939393"}

      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77083 4.20483C5.46051 4.27834 4.63331 4.48715 4.04029 5.08017C3.125 5.99546 3.125 7.46859 3.125 10.4149V16.6649C3.125 19.6112 3.125 21.0843 4.04029 21.9996C4.95558 22.9149 6.42872 22.9149 9.375 22.9149H15.625C18.5712 22.9149 20.0444 22.9149 20.9597 21.9996C21.875 21.0843 21.875 19.6112 21.875 16.6649V10.4149C21.875 7.46859 21.875 5.99546 20.9597 5.08017C20.3667 4.48715 19.5395 4.27834 18.2292 4.20483V4.68752C18.2292 6.41341 16.8301 7.81252 15.1042 7.81252H9.89583C8.16995 7.81252 6.77083 6.41341 6.77083 4.68752V4.20483ZM6.51042 10.9375C6.51042 10.5061 6.8602 10.1563 7.29167 10.1563H17.7083C18.1398 10.1563 18.4896 10.5061 18.4896 10.9375C18.4896 11.369 18.1398 11.7188 17.7083 11.7188H7.29167C6.8602 11.7188 6.51042 11.369 6.51042 10.9375ZM7.55208 14.5834C7.55208 14.1519 7.90186 13.8021 8.33333 13.8021H16.6667C17.0981 13.8021 17.4479 14.1519 17.4479 14.5834C17.4479 15.0148 17.0981 15.3646 16.6667 15.3646H8.33333C7.90186 15.3646 7.55208 15.0148 7.55208 14.5834ZM8.59375 18.2292C8.59375 17.7977 8.94353 17.4479 9.375 17.4479H15.625C16.0565 17.4479 16.4062 17.7977 16.4062 18.2292C16.4062 18.6606 16.0565 19.0104 15.625 19.0104H9.375C8.94353 19.0104 8.59375 18.6606 8.59375 18.2292Z"
               fill={gradient?"url(#paint0_linear_228_4010)":"#939393"}

      />
    </svg>
  );
};

export default TasksSVG;
