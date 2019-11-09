import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { ICard } from "types";
import "./Card.css";

interface Props extends ICard {
  index: number;
}

export const Card: React.FC<Props> = ({ id, index }) => {
  return (
    <Draggable draggableId={`card-${id}`} index={index}>
      {provided => (
        <div
          className="Card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {id}
        </div>
      )}
    </Draggable>
  );
};
