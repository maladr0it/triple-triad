import React from "react";
import "./App.css";

import { GameContextProvider, State } from "./gameContext";
import { useAppScale } from "./useAppScale";
import { Hand } from "./Hand";
import { Board } from "./Board";

const INITIAL_STATE: State = {
  hands: {
    p1: ["001", "002"],
    p2: [null, null],
  },
  board: [
    null,
    { player: "p1", id: "002" },
    null,
    { player: "p2", id: "001" },
    null,
    null,
    null,
    null,
    null,
  ],
};

const App = () => {
  const { containerRef, appRef } = useAppScale<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <GameContextProvider initialState={INITIAL_STATE}>
      <div className="App-container" ref={containerRef}>
        <div className="App" ref={appRef}>
          <Hand player="p2" />
          <Board />
          <Hand player="p1" />
        </div>
      </div>
    </GameContextProvider>
  );
};

export default App;
