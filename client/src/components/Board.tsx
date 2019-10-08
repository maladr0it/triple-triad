import React from "react";

import "./Board.css";
import { useDndContext } from "../DndContext";
import { Slot } from "./Slot";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

interface Props {}

export const Board: React.FC<Props> = () => {
  const { state } = useDndContext();

  return (
    <div className="Board">
      {state.items.map((slot, i) => (
        <Slot key={i}>
          {slot ? <Draggable index={i} /> : <Droppable index={i} />}
        </Slot>
      ))}
    </div>
  );
};
