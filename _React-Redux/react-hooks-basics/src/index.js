import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";
import { ChildComponent } from "./childComponent";

function App() {
  return (
    <StoreProvider>
      <ChildComponent />
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
