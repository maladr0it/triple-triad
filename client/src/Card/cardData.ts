import { ICard } from "./types";

export const cardData: Record<string, ICard> = {
  "001": {
    name: "Shiva",
    sides: [1, 2, 3, 4],
    image: {
      sheetIndex: 0,
      spriteIndex: 0,
    },
  },
  "002": {
    name: "Ifrit",
    sides: [2, 3, 4, 5],
    image: {
      sheetIndex: 0,
      spriteIndex: 1,
    },
  },
};
