import { FC } from "react";

const ShopSVG: FC<{ width?: string; gradient:boolean}> = ({width,gradient}) => {
  return (
    <svg
      width={width ?width: "25px"}
      height="25px"
      viewBox="0 0 23 21"
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
        d="M21.2167 6.99998H18.1667L17.5167 3.11665C17.2499 1.91965 16.3472 0.965813 15.1667 0.633313C14.5846 0.44598 13.9782 0.34498 13.3667 0.333313H9.63342C9.02192 0.34498 8.41558 0.44598 7.83342 0.633313C6.65292 0.965813 5.75025 1.91965 5.48342 3.11665L4.83342 6.99998H1.78342C1.32325 6.99715 0.947916 7.36798 0.945082 7.82831C0.944582 7.91481 0.957416 8.00081 0.983416 8.08331L4.11675 18.5833C4.44408 19.6243 5.40892 20.3326 6.50008 20.3333H16.5001C17.5851 20.3255 18.5413 19.6185 18.8667 18.5833L22.0001 8.08331C22.1383 7.64431 21.8942 7.17648 21.4552 7.03831C21.3781 7.01398 21.2977 7.00115 21.2167 6.99998ZM6.53342 6.99998L7.13342 3.38331C7.26792 2.77915 7.75608 2.31748 8.36675 2.21665C8.77725 2.08731 9.20325 2.01448 9.63342 1.99998H13.3667C13.8024 2.01298 14.2343 2.08581 14.6501 2.21665C15.2607 2.31748 15.7489 2.77915 15.8834 3.38331L16.4667 6.99998H6.46675H6.53342Z"
        fill={gradient?"url(#paint0_linear_228_4010)":"#939393"}
      />
    </svg>
  );
};

export default ShopSVG;
