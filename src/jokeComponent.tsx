import React from "react";
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
    fetch(
      "https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/jokes/random",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          "x-rapidapi-key": "SIGN-UP-FOR-KEY",
          accept: "application/json",
        },
      },
    )
      .then((response) => response.json())
      .then((json) => setJoke(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      showPunchline();
    }, 2000);
  }, [Joke]);

  const showPunchline = () => {
    const parr = document.createElement("h1");
    parr.innerHTML = Joke.punchline;
    document.getElementById("joke-container").appendChild(parr);
  };

  return (
    <div id="joke-container" className="joke-background">
      <h1>Hi, I´m the Joke Component</h1>
      <span>{Joke.setup}</span>
    </div>
  );
};
