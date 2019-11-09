import React, { createContext, useContext, useReducer } from "react";

import { gameReducer, State, Action } from "./gameReducer";

const GameContext = createContext<[State, React.Dispatch<Action>] | undefined>(
  undefined
);

interface ProviderProps {
  initialState: State;
}

export const GameContextProvider: React.FC<ProviderProps> = ({
  initialState,
  children
}) => {
  const value = useReducer(gameReducer, initialState);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const value = useContext(GameContext);
  if (value === undefined) {
    throw new Error(
      "useContext must be used for children of GameContextProvider."
    );
  }
  return value;
};
