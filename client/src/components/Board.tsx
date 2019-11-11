import React from "react";

import "./Board.css";
import { useDndContext } from "../DndContext";
import { Slot } from "./Slot";
import { DropArea } from "./DropArea";

interface Props {}

export const Board: React.FC<Props> = () => {
  return (
    <div className="Board">
      {[...Array(9)].map((_, i) => (
        <Slot key={i}>
          <DropArea dropAreaId={`dropArea-${i}`} index={i} />
        </Slot>
      ))}
    </div>
  );
};
