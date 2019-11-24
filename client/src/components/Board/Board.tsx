import React from "react";

import { DropName } from "types";
import "./Board.css";
import { CardSlot } from "components/CardSlot";

export const Board = () => {
  return (
    <div className="Board">
      {[...Array(9)].map((_, i) => (
        <CardSlot key={i} slotType={DropName.Board} index={i} />
      ))}
    </div>
  );
};
