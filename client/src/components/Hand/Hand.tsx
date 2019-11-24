import React from "react";

import { useGameContext } from "GameContext";
import { HandSlot } from "./_HandSlot";
import "./Hand.css";

export const Hand = () => {
  const { state } = useGameContext();
  const { hand } = state;
  return (
    <div className="Hand">
      {hand.map((_, i) => (
        <HandSlot key={i} index={i} />
      ))}
    </div>
  );
};
