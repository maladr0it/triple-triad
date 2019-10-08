import React from "react";

import "./Droppable.css";
import { useDndContext } from "../DndContext";

interface Props {
  index: number;
}

export const Droppable: React.FC<Props> = ({ index }) => {
  const { state, dispatch } = useDndContext();
  const { hoverIndex, dragging } = state;

  const handleMouseEnter = () => {
    if (dragging) {
      dispatch({ type: "HOVER", hoverIndex: index });
    }
  };

  const handleMouseLeave = () => {
    if (dragging) {
      dispatch({ type: "HOVER_STOP" });
    }
  };

  return (
    <div
      className="Droppable"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hoverIndex === index ? "HOVERIN" : ""}
    </div>
  );
};
