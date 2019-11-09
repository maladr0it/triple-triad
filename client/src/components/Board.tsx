import React from "react";

import { useGameContext } from "GameContext";
import "./Board.css";
import { Slot } from "./Slot";

export const Board = () => {
  const [state] = useGameContext();
  
  return (
    <div className="Board">
      {state.board.map((_, i) => (
        <Slot key={i} index={i} />
      ))}
    </div>
  );
};
