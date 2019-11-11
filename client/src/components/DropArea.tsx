import React from "react";

import "./DropArea.css";
import { useDndContext } from "../DndContext";

interface Props {
  dropAreaId: string;
  index: number;
}

export const DropArea: React.FC<Props> = ({ dropAreaId }) => {
  const { state, dispatch } = useDndContext();
  const { dragging } = state;

  const handleMouseEnter = () => {
    if (dragging) {
      dispatch({ type: "HOVER", hoverLoc: { id: dropAreaId, index: 0 } });
    }
  };

  const handleMouseLeave = () => {
    if (dragging) {
      dispatch({ type: "HOVER_END" });
    }
  };

  return (
    <div
      className="DropArea"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {state.hoverLoc && state.hoverLoc.id === dropAreaId && "HOVERIN"}
    </div>
  );
};
