import React from "react";
const imgLogo = require("./content/logo_2.png");
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

  React.useEffect(() => {
    showImage();
  }, []);

  const showPunchline = () => {
    const parr = document.createElement("h1");
    parr.innerHTML = Joke.punchline;
    document.getElementById("joke-container").appendChild(parr);
  };

  const showImage = () => {
    const img = document.createElement("img");
    img.src = imgLogo;
    document.getElementById("joke-container").appendChild(img);
  };

  return (
    <div id="joke-container">
      <h1 className="joke-background">{Joke.setup}</h1>
    </div>
  );
};
