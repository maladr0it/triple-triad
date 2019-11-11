import React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./Card.css";

interface Props {
  id: string;
  index: number;
  name: string;
  isDragDisabled?: boolean;
}

export const Card: React.FC<Props> = ({
  id,
  index,
  name,
  isDragDisabled = false,
}) => {
  return (
    <Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
      {(provided) => (
        <div
          className="Card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {name} - {id}
        </div>
      )}
    </Draggable>
  );
};
