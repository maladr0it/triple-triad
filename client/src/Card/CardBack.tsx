import React from "react";

import { cardBgStyle } from "./cardBgStyle";
import "./CardBack.css";

const SHEET_INDEX = 13;
const SPRITE_INDEX = 6;

export const CardBack = () => {
  return (
    <div className="CardBack" style={cardBgStyle(SHEET_INDEX, SPRITE_INDEX)} />
  );
};
