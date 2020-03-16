import { HandsState, Action } from "../types";

export const handsReducer = (state: HandsState, action: Action) => {
  console.log("handsReducer", state, action);
  switch (action.type) {
    case "card_played": {
      return state;
    }
  }
};
