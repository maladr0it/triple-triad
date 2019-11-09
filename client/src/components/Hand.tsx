import React from "react";
import { Droppable } from "react-beautiful-dnd";

import "./Hand.css";
import { useGameContext } from "../GameContext";
import { Card } from "./Card";

export const Hand = () => {
  const [state] = useGameContext();

  return (
    <Droppable droppableId="hand" direction="horizontal">
      {provided => (
        <div className="Hand" ref={provided.innerRef}>
          {state.hand.map((card, i) => (
            <Card key={card.id} index={i} {...card} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
