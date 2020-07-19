import React from "react";
import { trackPromise } from "react-promise-tracker";
const imgThinking = require("./content/thinking.gif").default;
const classes = require("./jokeComponentStyles.scss");

export const JokeComponent = () => {
  const [Joke, setJoke] = React.useState({
    setup: "",
    punchline: "",
  });

  interface Joke {
    setup: string;
    punchline: string;
  }

  React.useEffect(() => {
    trackPromise(
      fetch(
        "https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/jokes/random",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            accept: "application/json",
          },
        },
      )
        .then((response) => response.json())
        .then((json) => setJoke(json))
        .then(() => setTimeout(() => showImage(), 1500))
        .catch((err) => {
          console.log(err);
        }),
    );
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      showPunchline();
    }, 3000);
  }, [Joke]);

  const showPunchline = () => {
    const parr = document.createElement("h1");
    parr.innerHTML = Joke.punchline;
    document.getElementById("joke-container").appendChild(parr);
  };

  const showImage = () => {
    const img = document.createElement("img");
    img.src = imgThinking;
    document.getElementById("joke-container").appendChild(img);
  };

  return (
    <div id="joke-container">
      <h1 className={classes.jokeBackground}>{Joke.setup}</h1>
    </div>
  );
};
