import React from "react";

import "./Draggable.css";
import { useDragPlaceholder } from "../hooks/useDragPlaceholder";

export const Draggable = () => {
  const { containerProps, contentProps } = useDragPlaceholder<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <div className="Draggable" {...containerProps}>
      <div className="Draggable-content" {...contentProps}></div>
    </div>
  );
};
