import React from "react";
const classes = require("./jokeComponentStyles.scss");

export const JokeComponent = () => {
  const [joke, setJoke] = React.useState([]);

  interface joke {
    id: number;
    type: string;
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

  return (
    <div>
      <h1>Hi, I´m the Joke Component</h1>
      <span>{joke.setup}</span>
      <span>...{joke.punchline}</span>
    </div>
  );
};
