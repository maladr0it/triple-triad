import React from "react";

import { Board } from "components/Board";
import { Hand } from "components/Hand";

export const App: React.FC = () => {
  return (
    <>
      <Board />
      <Hand />
    </>
  );
};
