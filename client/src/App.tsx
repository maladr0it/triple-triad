import React, { useRef, useLayoutEffect } from "react";
import "./App.css";

import { Card } from "./Card";
import { ICard } from "./Card/types";

const CARDS: ICard[] = [
  {
    name: "Shiva",
    sides: [1, 2, 3, 4],
    image: {
      sheetIndex: 0,
      spriteIndex: 0,
    },
  },
  {
    name: "Shiva",
    sides: [1, 2, 3, 4],
    image: {
      sheetIndex: 0,
      spriteIndex: 2,
    },
  },
];

const GAME_HEIGHT_UNITS = 100;
const GAME_WIDTH_UNITS = 60;

const App = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (gameContainerRef.current && gameRef.current) {
    }

    return () => {};
  }, []);

  return (
    <div className="App" ref={gameContainerRef}>
      <div className="Game" ref={gameRef}>
        <Card id="001" {...CARDS[0]} />
        <br></br>
        <Card id="001" {...CARDS[1]} />
      </div>
    </div>
  );
};

export default App;
