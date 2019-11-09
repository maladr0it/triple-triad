import { ICard } from "../types";

export interface State {
  board: (ICard | null)[];
  hand: ICard[];
}

export type Action = {
  type: "CARD_PLAYED";
  handPos: number;
  boardPos: number;
};

export const gameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CARD_PLAYED": {
      const { handPos, boardPos } = action;

      const cardData = state.hand[handPos];
      const newBoard = [...state.board];
      newBoard.splice(boardPos, 1, cardData);

      return {
        ...state,
        board: newBoard
      };
    }
  }
};
