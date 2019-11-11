import React, { createContext, useContext, useReducer, useMemo } from "react";

import { dndReducer, initialState, State, Action } from "./dndReducer";

const DndContext = createContext<{
  dispatch: React.Dispatch<Action>;
  state: State;
  onDragEnd: (state: State) => void;
} | null>(null);

interface ProviderProps {
  onDragEnd: (state: State) => void;
}

export const DndContextProvider: React.FC<ProviderProps> = ({
  onDragEnd,
  children,
}) => {
  const [state, dispatch] = useReducer(dndReducer, initialState);
  const value = { state, dispatch, onDragEnd };

  return <DndContext.Provider value={value}>{children}</DndContext.Provider>;
};

export const useDndContext = () => {
  const context = useContext(DndContext);
  if (context === null) {
    throw new Error(
      "Components using useDndContext must be children of DndContextProvider.",
    );
  }
  return context;
};
