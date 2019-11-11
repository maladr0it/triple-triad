import React from "react";

import { Draggable } from "components/Draggable";
import "./Hand.css";

const HAND_ITEMS = [
  {
    id: "foo",
    name: "FooName",
  },
  {
    id: "bar",
    name: "BarName",
  },
];

export const Hand = () => {
  return (
    <div className="Hand">
      {HAND_ITEMS.map((item, i) => (
        <Draggable key={item.id} dropAreaId="HAND" dragId={item.id} index={i} />
      ))}
    </div>
  );
};
