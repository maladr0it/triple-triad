import React from "react";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";

import { DropName } from "types";
import { useGameContext } from "GameContext";
import { Card } from "components/Card";
import "./_HandSlot.css";

interface Props {
  index: number;
}

export const HandSlot: React.FC<Props> = ({ index }) => {
  const { state } = useGameContext();
  const content = state.hand[index];

  return (
    <Droppable
      droppableId={`${DropName.Hand}-${index}`}
      type="CARD"
      isDropDisabled
      direction="horizontal"
    >
      {(provided) => (
        <div
          className="HandSlot"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="HandSlot-socket">
            {content && <Card {...content} index={0} />}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
