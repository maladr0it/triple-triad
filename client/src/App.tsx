import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { DropName } from "types";
import { useGameContext } from "GameContext";
import { Board } from "components/Board";
import { Hand } from "components/Hand";
import "./App.css";

export const App: React.FC = () => {
  const { dispatch } = useGameContext();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const [sourceType, sourceNum] = source.droppableId.split("-");
    const [destType, destNum] = destination.droppableId.split("-");

    console.log(source, destination);

    if (sourceType === DropName.Hand && destType === DropName.Board) {
      dispatch({
        type: "CARD_PLAYED",
        handPos: parseInt(sourceNum, 10),
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
