import React from "react";

import "./Draggable.css";
import { useDragPlaceholder } from "../hooks/useDragPlaceholder";
import { useDndContext } from "../DndContext";

interface Props {
  index: number;
}

export const Draggable: React.FC<Props> = ({ index }) => {
  const { dispatch } = useDndContext();

  const handleDragStart = () => {
    dispatch({ type: "DRAG_START", dragIndex: index });
  };
  const handleDragStop = () => {
    dispatch({ type: "DRAG_STOP" });
  };

  const { containerProps, contentProps } = useDragPlaceholder<
    HTMLDivElement,
    HTMLDivElement
  >(handleDragStart, handleDragStop);

  return (
    <div className="Draggable" {...containerProps}>
      <div className="Draggable-content" {...contentProps}></div>
    </div>
  );
};
