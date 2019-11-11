import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { BOARD, HAND } from "dropNames";
import { useGameContext } from "GameContext";
import { Board } from "components/Board";
import { Hand } from "components/Hand";
import "./App.css";

export const App: React.FC = () => {
  const { dispatch } = useGameContext();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const [destType, destNum] = destination.droppableId.split("-");

    if (destType === BOARD && source.droppableId === HAND) {
      dispatch({
        type: "CARD_PLAYED",
        handPos: source.index,
        boardPos: parseInt(destNum, 10),
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="App">
        <Board />
        <Hand />
      </div>
    </DragDropContext>
  );
};
