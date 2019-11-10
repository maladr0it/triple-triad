import React, { useRef } from "react";

import "./Draggable.css";
import { useDrag } from "hooks/useDrag";
import { useAnimateFrom } from "hooks/useAnimateFrom";
import { useDndContext } from "DndContext";

interface Pos {
  x: number;
  y: number;
}

interface Props {
  index: number;
}

export const Draggable: React.FC<Props> = ({ index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { state, dispatch } = useDndContext();

  const handleDragStart = () => {
    dispatch({ type: "DRAG_START", dragIndex: index });
  };

  const handleDragEnd = (dropPos: Pos) => {
    dispatch({ type: "DRAG_STOP", from: index, dropPos });
  };

  const dragProps = useDrag(containerRef, handleDragStart, handleDragEnd);
  useAnimateFrom(containerRef, state.dropPos);

  return (
    <div className="Draggable" ref={containerRef} {...dragProps}>
      <div className="Draggable-content" />
    </div>
  );
};
