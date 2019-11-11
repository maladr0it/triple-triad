import React from "react";
import ReactDOM from "react-dom";

import { GameContextProvider } from "GameContext";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";

const initialState = {
  hand: [
    { id: "foo", name: "Foo the great" },
    { id: "bar", name: "Bar the stronk" },
  ],
  board: [null, null, null, null, null, null, null, null, null],
};

ReactDOM.render(
  <GameContextProvider initialState={initialState}>
    <App />
  </GameContextProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
