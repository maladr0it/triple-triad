import React from "react";

import { PlayerName } from "../types";
import { useGameContext } from "../gameContext";
import { Card, CardBack } from "../Card";
import "./Hand.css";

const isNullArray = (arr: any[]): arr is null[] => arr.every((x) => x === null);

interface Props {
  player: PlayerName;
}

export const Hand = ({ player }: Props) => {
  const [state] = useGameContext();
  const cards = state.hands[player];

  return (
    <ul className="Hand">
      {isNullArray(cards)
        ? cards.map((_, i) => <CardBack key={i} />)
        : cards.map((id, i) => <Card key={i} id={id} player={player} />)}
    </ul>
  );
};
