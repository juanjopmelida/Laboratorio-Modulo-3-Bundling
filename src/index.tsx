import React from "react";
import ReactDOM from "react-dom";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { JokeComponent } from "./jokeComponent";
const classes = require("./mystyles.scss");

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </div>
    )
  );
};

ReactDOM.render(
  <div className={classes.mainDiv}>
    <div className="jumbotron">
      <h1>Laboratorio Módulo 3 - Bundling</h1>
    </div>
    <LoadingIndicator />
    <JokeComponent />
  </div>,
  document.getElementById("root"),
);
