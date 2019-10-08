import React, { useContext, useReducer, createContext } from "react";

import { dndReducer, initialState, State, Action } from "./dndReducer";

const DndContext = createContext<{
  dispatch: React.Dispatch<Action>;
  state: State;
} | null>(null);

export const DndContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(dndReducer, initialState);

  return (
    <DndContext.Provider value={{ state, dispatch }}>
      {children}
    </DndContext.Provider>
  );
};

export const useDndContext = () => {
  const context = useContext(DndContext);
  if (context === null) {
    throw new Error(
      "Components using useDndContext must be children of DndContextProvider."
    );
  }
  return context;
};
