import React, { createContext, useReducer, useContext } from "react";

import { State, Action } from "./types";
import { rootReducer } from "./reducers";

type GameContextValue = [State, React.Dispatch<Action>];

export const GameContext = createContext<GameContextValue | undefined>(
  undefined,
);

interface Props {
  initialState: State;
  children: React.ReactNode;
}

export const GameContextProvider = ({ initialState, children }: Props) => {
  const value = useReducer(rootReducer, initialState);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const value = useContext(GameContext);
  if (value === undefined) {
    throw new Error(
      "useGameContext must be used in a child of GameContextProvider",
    );
  }
  return value;
};
