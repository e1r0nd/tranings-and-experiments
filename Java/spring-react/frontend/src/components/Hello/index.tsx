import React from "react";

interface HelloProps {
  dataHandler: (data: string) => void;
}

function Hello(props: HelloProps) {
  async function fetchHandler() {
    const response = await fetch("/api/hello");
    const data = await response.json();
    const words = await data.join(", ");
    props.dataHandler(words);
  }

  return (
    <div>
      <button onClick={fetchHandler}>Fetch a list</button>
    </div>
  );
}

export default Hello;
