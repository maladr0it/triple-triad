import React from "react";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";

import "./CardSlot.css";
import { DropName, ICard } from "types";
import { useGameContext } from "GameContext";
import { Card } from "components/Card";

interface Props {
  slotType: DropName;
  index: number;
}

export const CardSlot: React.FC<Props> = ({ slotType, index }) => {
  const { state } = useGameContext();

  let content: ICard | null = null;
  if (slotType === "board") {
    content = state.board[index];
  } else if (slotType === "hand") {
    content = state.hand[index];
  }

  return (
    <Droppable
      droppableId={`${slotType}-${index}`}
      type="CARD"
      isDropDisabled={!!content}
      direction="horizontal"
    >
      {(provided, snapshot) => (
        <div
          className={classNames("CardSlot", {
            "CardSlot--dragOver": snapshot.isDraggingOver,
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="CardSlot-socket">
            {content && (
              <Card
                {...content}
                index={0}
                isDragDisabled={slotType === DropName.Board}
              />
            )}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
