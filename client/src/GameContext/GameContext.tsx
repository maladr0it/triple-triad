import React, { createContext, useContext, useReducer, useMemo } from "react";

import { gameReducer, State, Action } from "./gameReducer";

const GameContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

interface ProviderProps {
  initialState: State;
}

export const GameContextProvider: React.FC<ProviderProps> = ({
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const value = useContext(GameContext);
  if (value === null) {
    throw new Error(
      "useGameContext can only  be used in children of GameContextProvider.",
    );
  }
  return value;
};
