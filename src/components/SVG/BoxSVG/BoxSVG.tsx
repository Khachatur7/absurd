import { FC } from "react"

const BoxSVG:FC<{specialIcon?:boolean}> = ({specialIcon}) => {
    return  <svg
    width="25px"
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.125 5.20833C3.125 4.05774 4.05774 3.125 5.20833 3.125H8.33333V8.33333H3.125V5.20833ZM8.33333 10.4167H3.125V19.7917C3.125 20.9423 4.05774 21.875 5.20833 21.875H8.33333V10.4167ZM10.4167 21.875H19.7917C20.9423 21.875 21.875 20.9423 21.875 19.7917V10.4167H10.4167V21.875ZM10.4167 8.33333V3.125H19.7917C20.9423 3.125 21.875 4.05774 21.875 5.20833V8.33333H10.4167Z"
      fill={specialIcon ? "url(#paint0_linear_228_4010)" : "#fff"}
    />
  </svg>
}

export default BoxSVG