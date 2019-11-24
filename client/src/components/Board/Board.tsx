import React from "react";

import { useGameContext } from "GameContext";
import { BoardSlot } from "./_BoardSlot";
import "./Board.css";

export const Board = () => {
  const { state } = useGameContext();
  const { board } = state;
  return (
    <div className="Board">
      {board.map((_, i) => (
        <BoardSlot index={i} />
      ))}
    </div>
  );
};
