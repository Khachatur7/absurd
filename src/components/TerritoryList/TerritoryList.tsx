import { FC } from "react";
import { ITerritory } from "../../types/interfaces";
import Territory from "../Territory/Territory";
import style from "./TerritoryList.module.css";

const TerritoryList: FC<{
}> = ({  }) => {
  const territories: ITerritory[] = [
    {
      name: "#32158",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 12,
    },
    {
      name: "#32159",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 6,
    },
    {
      name: "#32160",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 5,
    },
    {
      name: "#32161",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 6,
    },
    {
      name: "#32162",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 12,
    },
    {
      name: "#32163",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 4,
    },
    {
      name: "#32164",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 12,
    },
    {
      name: "#32165",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 6,
    },
    {
      name: "#32166",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 12,
    },
    {
      name: "#32167",
      upgrade: 12,
      people: 2,
      strength: 62,
      nft: 0,
      progressbar: 4,
    },
  ];
  return (
    <div className={style["territory-list"]}>
      {territories.map((ter, ind) => {
        return (
          <Territory
            key={ter.name + ind}
            upgrade={ter.upgrade}
            people={ter.people}
            strength={ter.strength}
            name={ter.name}
            nft={ter.nft}
            progressbar={ter.progressbar}
          />
        );
      })}
    </div>
  );
};

export default TerritoryList;
