import { State, Action } from "../types";
import { boardReducer } from "./boardReducer";
import { handsReducer } from "./handsReducer";

export const rootReducer = (state: State, action: Action): State => {
  return {
    board: boardReducer(state.board, action),
    hands: handsReducer(state.hands, action),
  };
};
