import React from "react";
import { useCounter } from "./storeApi";

export const ChildComponent = () => {
  const { count, message, increment, decrement, reset } = useCounter();

  return (
    <div>
      {count}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}> Reset</button>
      {message}
    </div>
  );
};
