import React from "react";
import { Droppable } from "react-beautiful-dnd";

import "./Hand.css";
import { Card } from "components/Card";
import { useGameContext } from "GameContext";

export const Hand = () => {
  const { state } = useGameContext();
  return (
    <Droppable droppableId="hand" type="CARD" direction="horizontal">
      {(provided) => (
        <div
          className="Hand"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {state.hand.map((card, i) => (
            <Card key={card.id} id={card.id} index={i} name={card.name} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
