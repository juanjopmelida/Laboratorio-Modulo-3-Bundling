import React from "react";
import ReactDOM from "react-dom";
import { AverageComponent } from "./averageComponent";
import { TotalScoreComponent } from "./totalScoreComponent";

ReactDOM.render(
  <div>
    <h1>Hello world from React DOM</h1>
    <AverageComponent />
    <TotalScoreComponent />
  </div>,
  document.getElementById("root"),
);
