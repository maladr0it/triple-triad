import React from "react";

import cards0 from "../assets/cards_0.png";
import cards1 from "../assets/cards_1.png";
import cards2 from "../assets/cards_2.png";
import cards3 from "../assets/cards_3.png";
import cards4 from "../assets/cards_4.png";
import cards5 from "../assets/cards_5.png";
import cards6 from "../assets/cards_6.png";
import cards7 from "../assets/cards_7.png";
import cards8 from "../assets/cards_8.png";
import cards9 from "../assets/cards_9.png";
import cards10 from "../assets/cards_10.png";
import cards11 from "../assets/cards_11.png";
import cards12 from "../assets/cards_12.png";
import cards13 from "../assets/cards_13.png";

const NUM_COLS = 2;
const NUM_ROWS = 4;
const ITEM_WIDTH_RATIO = 1 / NUM_COLS;
const ITEM_HEIGHT_RATIO = 1 / NUM_ROWS;

const sheetList = [
  cards0,
  cards1,
  cards2,
  cards3,
  cards4,
  cards5,
  cards6,
  cards7,
  cards8,
  cards9,
  cards10,
  cards11,
  cards12,
  cards13,
];

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
