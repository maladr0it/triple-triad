import React from "react";
import classNames from "classnames";

import "./Card.css";
import { PlayerName } from "../types";
import { cardData } from "./cardData";
import { cardBgStyle } from "./cardBgStyle";

interface Props {
  id: string;
  player: PlayerName;
}

export const Card = ({ id, player }: Props) => {
  const { name, sides, image } = cardData[id];

  return (
    <div
      className={classNames("Card", {
        "Card--p1": player === "p1",
        "Card--p2": player === "p2",
      })}
      style={cardBgStyle(image.sheetIndex, image.spriteIndex)}
    >
      <ul className="Card-sides">
        <li className="Card-side Card-side--top">{sides[0]}</li>
        <li className="Card-side Card-side--right">{sides[1]}</li>
        <li className="Card-side Card-side--bottom">{sides[2]}</li>
        <li className="Card-side Card-side--left">{sides[3]}</li>
      </ul>
    </div>
  );
};
