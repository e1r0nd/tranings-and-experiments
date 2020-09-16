import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label>
          Todo Text
          <input type="text" id="todo-text" ref={textInputRef} />
        </label>
      </div>
      <button type="submit">ADD</button>
    </form>
  );
};

export default NewTodo;
