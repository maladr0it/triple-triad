import React from "react";

import cards0 from "../assets/cards_0.png";
import cards1 from "../assets/cards_1.png";

const NUM_COLS = 2;
const NUM_ROWS = 4;
const ITEM_WIDTH_RATIO = 1 / NUM_COLS;
const ITEM_HEIGHT_RATIO = 1 / NUM_ROWS;

const sheetList = [cards0, cards1];

const spriteIndexToPos = (index: number) => {
  const col = index % NUM_COLS;
  const row = Math.floor(index / NUM_COLS);
  const colPerc = (ITEM_WIDTH_RATIO / (1 - ITEM_WIDTH_RATIO)) * 100 * col;
  const rowPerc = (ITEM_HEIGHT_RATIO / (1 - ITEM_HEIGHT_RATIO)) * 100 * row;
  return `${colPerc}% ${rowPerc}%`;
};

export const cardBgStyle = (sheetIndex: number, spriteIndex: number) => {
  const sheet = sheetList[sheetIndex];

  const style: React.CSSProperties = {
    backgroundImage: `url(${sheet})`,
    backgroundSize: `${NUM_COLS * 100}% ${NUM_ROWS * 100}%`,
    backgroundPosition: spriteIndexToPos(spriteIndex),
  };
  return style;
};
