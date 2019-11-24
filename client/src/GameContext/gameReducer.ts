import { ICard } from "types";

export interface State {
  hand: (ICard | null)[];
  board: (ICard | null)[];
}

export type Action = {
  type: "CARD_PLAYED";
  handPos: number;
  boardPos: number;
};

export const gameReducer = (state: State, action: Action) => {
  console.log(state, action);
  switch (action.type) {
    case "CARD_PLAYED": {
      // TODO: should be based on ID not position
      const { handPos, boardPos } = action;
      const newHand = [...state.hand];
      const newBoard = [...state.board];
      const [cardToPlay] = newHand.splice(handPos, 1, null);
      newBoard[boardPos] = cardToPlay;

      return {
        ...state,
        hand: newHand,
        board: newBoard,
      };
    }
    default:
      return state;
  }
};
