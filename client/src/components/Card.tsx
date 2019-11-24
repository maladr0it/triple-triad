import React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./Card.css";

interface Props {
  id: string;
  index: number;
  name: string;
  dragDisabled?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<Props> = ({
  id,
  index,
  name,
  dragDisabled = false,
  style,
}) => {
  return (
    <Draggable draggableId={id} index={index} isDragDisabled={dragDisabled}>
      {(provided) => {
        const appliedStyle = { ...style, ...provided.draggableProps.style };
        return (
          <div
            className="Card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={appliedStyle}
          >
            {name} - {id}
          </div>
        );
      }}
    </Draggable>
  );
};
