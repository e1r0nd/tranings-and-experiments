import React, { useState, useEffect } from "react";
import Li from "./components/Li";
import "./App.css";
import { ENDPOINT } from "./constants";

function App() {
  const [links, setLinks] = useState(Array(0));

  useEffect(() => {
    fetch(`${ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query { links { id description } }`,
      }),
    })
      .then((response) => response.json())
      .then((response) => setLinks(response.data.links));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {links.length ? (
            links.map((link) => (
              <Li key={link.description} text={link.description} />
            ))
          ) : (
            <Li text="nothing is here..." />
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
