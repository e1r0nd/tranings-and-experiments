import React from "react";
import Greet from "./components/greet";
import "./App.css";

const NameContext = React.createContext();

function App() {
  return (
    <NameContext.Provider value={"Rajat"}>
      <div className="App">
        <Greet />
      </div>
    </NameContext.Provider>
  );
}

export default App;
