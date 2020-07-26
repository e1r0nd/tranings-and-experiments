import React from "react";
// import { useStore } from "./store"; -> without actions
import { useCounter } from "./storeApi"; // actions

export const ChildComponent = () => {
  // const {state, dispatch} = useStore(); -> without actions
  // actions (custom hooks):
  const { count, message, increment, decrement, reset } = useCounter();

  return (
    <div>
      {/* Without actions: */}
      {/*
      {state.count}
      <button onClick={() => dispatch({type: "increment", message:"Incremented"})}>+</button>
      <button onClick={() => dispatch({type: "decrement", message: "Decremented"})}>-</button>
      <button onClick={() => dispatch({type: "reset", message: "Reset"})}>Reset</button>
      {state.message}
      */}
      {/* With actions: */}
      {count}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}> Reset</button>
      {message}
    </div>
  );
};
