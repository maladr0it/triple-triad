import React from "react";

import { DropName } from "types";
import { useGameContext } from "GameContext";
import { CardSlot } from "components/CardSlot";
import "./Hand.css";

export const Hand = () => {
  const { state } = useGameContext();
  return (
    <div className="Hand">
      {state.hand.map((_, i) => (
        <CardSlot key={i} slotType={DropName.Hand} index={i} />
      ))}
    </div>
  );
};
