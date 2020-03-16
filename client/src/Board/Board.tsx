import React from "react";

import "./Board.css";
import { BoardSlot } from "./BoardSlot";

export const Board = () => {
  const slots = [...Array(9)];

  return (
    <ul className="Board">
      {slots.map((_, i) => (
        <BoardSlot key={i} index={i} />
      ))}
    </ul>
  );
};
