import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { useGameContext } from "GameContext";

export const DnDContext: React.FC = ({ children }) => {
  const [state, dispatch] = useGameContext();

  const handleDragEnd = (dropResult: DropResult) => {
    const { source, destination } = dropResult;
    console.log(dropResult);

    if (!destination) return;

    const handPos = source.index;
    const boardPos = parseInt(destination.droppableId.split("-")[1], 10);
    dispatch({
      type: "CARD_PLAYED",
      handPos,
      boardPos
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>{children}</DragDropContext>
  );
};
