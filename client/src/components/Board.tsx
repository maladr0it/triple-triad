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
      {state.items.map((slot, i) =>
        slot ? (
          <Slot key={slot.id}>
            <Draggable index={i} />
          </Slot>
        ) : (
          <Slot key={i}>
            <Droppable index={i} />
          </Slot>
        )
      )}
    </div>
  );
};
