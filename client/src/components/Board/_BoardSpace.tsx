import React from "react";
import { Droppable } from "react-beautiful-dnd";

import "./_BoardSpace.css";
import { BOARD } from "dropNames";
import { useGameContext } from "GameContext";
import { Card } from "components/Card";

interface Props {
  index: number;
}

export const BoardSpace: React.FC<Props> = ({ index }) => {
  const { state } = useGameContext();
  const content = state.board[index];

  return (
    <Droppable
      droppableId={`${BOARD}-${index}`}
      type="CARD"
      isDropDisabled={!!content}
    >
      {(provided) => (
        <div
          className="BoardSpace"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {content && <Card {...content} index={0} isDragDisabled />}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
