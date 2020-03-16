import { BoardState, Action } from "../types";

export const boardReducer = (state: BoardState, action: Action) => {
  console.log("boardReducer", state, action);
  switch (action.type) {
    case "card_played": {
      return state;
    }
  }
};
