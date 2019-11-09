import React from "react";

import { GameContextProvider } from "GameContext";
import { Board } from "components/Board";
import { Hand } from "components/Hand";

import "./App.css";
import { DnDContext } from "DnDContext";

const initialState = {
  board: [null, null, null, null, null, null, null, null, null],
  hand: [{ id: "foo" }, { id: "bar" }]
};

export const App: React.FC = () => {
  return (
    <GameContextProvider initialState={initialState}>
      <DnDContext>
        <div className="App">
          <Board />
          <Hand />
        </div>
      </DnDContext>
    </GameContextProvider>
  );
};
