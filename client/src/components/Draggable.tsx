import React, { useRef } from "react";

import "./Draggable.css";
import { useDrag } from "hooks/useDrag";
import { useDropAnim } from "hooks/useDropAnim";
import { useDndContext } from "DndContext";

interface Pos {
  x: number;
  y: number;
}

interface Props {
  dragId: string;
  dropAreaId: string;
  index: number;
}

export const Draggable: React.FC<Props> = ({ dragId, dropAreaId, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { state, dispatch, onDragEnd } = useDndContext();

  const handleDragStart = () => {
    dispatch({
      type: "DRAG_START",
      dragId,
      origin: {
        id: dropAreaId,
        index,
      },
    });
  };

  const handleDragEnd = (dropPos: Pos) => {
    dispatch({ type: "DRAG_END", dropPos });
  };

  const dragProps = useDrag(containerRef, handleDragStart, handleDragEnd);
  useDropAnim(containerRef, state.dropPos, state.dragId === dragId);

  return (
    <div className="Draggable" ref={containerRef} {...dragProps}>
      <div className="Draggable-content" />
    </div>
  );
};
