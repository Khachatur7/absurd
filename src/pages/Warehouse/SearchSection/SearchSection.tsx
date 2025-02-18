import style from "./SearchSection.module.css"

const SearchSection = () => {
    return <div className={style["search"]}>
    <div className={style["search-input"]}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_391_42"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.42692 0.333374C3.06409 0.333374 0.333252 3.03777 0.333252 6.3796C0.333252 9.72143 3.06409 12.4258 6.42692 12.4258C7.68067 12.4258 8.84691 12.0498 9.8162 11.405L13.7916 15.3477C14.2205 15.7731 14.9148 15.7731 15.3437 15.3477C15.7742 14.9207 15.7742 14.2274 15.3437 13.8005L11.3938 9.88316C12.1031 8.89491 12.5206 7.68535 12.5206 6.3796C12.5206 3.03777 9.78976 0.333374 6.42692 0.333374ZM2.53109 6.3796C2.53109 4.24982 4.27271 2.5186 6.42692 2.5186C8.58114 2.5186 10.3228 4.24982 10.3228 6.3796C10.3228 8.50938 8.58114 10.2406 6.42692 10.2406C4.27271 10.2406 2.53109 8.50938 2.53109 6.3796Z"
            fill="#006FFD"
          />
        </mask>
        <g mask="url(#mask0_391_42)">
          <rect width="16" height="16" fill="#8F9098" />
        </g>
      </svg>
      <input type="text" name="" id="" placeholder="Поиск" />
    </div>
  </div>
}

export default SearchSection;