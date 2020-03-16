import React from "react";

import { Card } from "../Card";
import { useGameContext } from "../gameContext";

import "./BoardSlot.css";

interface Props {
  index: number;
}

export const BoardSlot = ({ index }: Props) => {
  const [state] = useGameContext();
  const card = state.board[index];

  return (
    <li className="BoardSlot">
      {card && <Card id={card.id} player={card.player} />}
    </li>
  );
};
