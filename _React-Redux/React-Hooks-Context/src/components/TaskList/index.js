import React from "react";
import Task from "../Task";
import { useTasks } from "../../TaskProvider";

export default function TaskList() {
  const { tasks } = useTasks();
  return (
    <table>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </tbody>
    </table>
  );
}
