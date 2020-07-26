import React from "react";
import { useTasks } from "../../TaskProvider";

export default function NewTaskForm() {
  const { addTask } = useTasks();

  const submit = (e) => {
    e.preventDefault();
    addTask(e.target.task.value);
    e.target.reset();
  };

  return (
    <form onSubmit={submit}>
      <input id="task" type="text" placeholder="Get some eggs..." required />
      <button>Add</button>
    </form>
  );
}
