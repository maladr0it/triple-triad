import React from "react";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";

import { DropName } from "types";
import { useGameContext } from "GameContext";
import { Card } from "components/Card";
import "./_BoardSlot.css";

interface Props {
  index: number;
}

export const BoardSlot: React.FC<Props> = ({ index }) => {
  const { state } = useGameContext();
  const content = state.board[index];

  return (
    <Droppable
      droppableId={`${DropName.Board}-${index}`}
      type="CARD"
      isDropDisabled={!!content}
      direction="horizontal"
    >
      {(provided, snapshot) => (
        <div
          className={classNames("BoardSlot", {
            "BoardSlot--dragover": snapshot.isDraggingOver,
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="BoardSlot-socket">
            {content && <Card {...content} index={0} dragDisabled />}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
