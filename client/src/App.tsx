import React from "react";

import "./App.css";
import { Draggable } from "./components/Draggable";

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>hey</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{ height: "10rem", width: "10rem", backgroundColor: "blue" }}
        />
        <Draggable />
      </div>
    </div>
  );
};
