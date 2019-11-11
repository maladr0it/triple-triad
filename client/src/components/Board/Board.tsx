import React from "react";

import { BoardSpace } from "./_BoardSpace";
import "./Board.css";

export const Board = () => {
  return (
    <div className="Board">
      {[...Array(9)].map((_, i) => (
        <BoardSpace key={i} index={i} />
      ))}
    </div>
  );
};
