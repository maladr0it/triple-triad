import React from "react";

import "./Card.css";
import { ICard } from "./types";
import { cardBgStyle } from "./cardBgStyle";

interface Props extends ICard {
  id: string;
}

export const Card: React.FC<Props> = ({ id, name, sides, image }) => {
  return (
    <div
      className="Card"
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
