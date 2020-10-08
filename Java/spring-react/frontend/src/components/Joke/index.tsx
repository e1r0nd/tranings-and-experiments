import React from "react";

interface JokeProps {
  dataHandler: (data: string) => void;
}

function Joke(props: JokeProps) {
  async function fetchHandler() {
    const response = await fetch("/api/jokes");
    const joke = await response.text();
    props.dataHandler(joke);
  }

  return (
    <div>
      <button onClick={fetchHandler}>Fetch a Joke</button>
    </div>
  );
}

export default Joke;
