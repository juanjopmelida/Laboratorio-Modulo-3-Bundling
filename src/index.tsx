import React from "react";
import ReactDOM from "react-dom";
import { JokeComponent } from "./jokeComponent";

ReactDOM.render(
  <div>
    <h1>Hello world from React DOM</h1>
    <JokeComponent />
  </div>,
  document.getElementById("root"),
);
