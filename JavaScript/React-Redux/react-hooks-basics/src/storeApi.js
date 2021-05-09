import { useStore } from "./store";

/** A custom hook (action) for useStore
 * @return {number} count - State counter
 * @return {string} message - The action's message
 * @return {function} increment - Increment the state counter
 * @return {function} decrement - Decrement the state counter
 * @return {function} reset - Reset the state counter
 */
export const useCounter = () => {
  const { state, dispatch } = useStore();
  return {
    count: state.count,
    message: state.message,
    increment: () => dispatch({ type: "increment", message: "Incremented" }),
    decrement: () => dispatch({ type: "decrement", message: "Decremented" }),
    reset: () => dispatch({ type: "reset", message: "Reset" }),
  };
};
