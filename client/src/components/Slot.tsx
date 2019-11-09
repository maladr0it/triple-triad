import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { useGameContext } from "GameContext";
import "./Slot.css";
import { Card } from "./Card";

interface Props {
  index: number;
}

export const Slot: React.FC<Props> = ({ index }) => {
  const [state] = useGameContext();
  const cardData = state.board[index];
  const content = cardData && <Card index={0} {...cardData} />;

  return (
    <Droppable droppableId={`slot-${index}`} isDropDisabled={!!cardData}>
      {provided => (
        <div className="Slot" ref={provided.innerRef}>
          {content}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
