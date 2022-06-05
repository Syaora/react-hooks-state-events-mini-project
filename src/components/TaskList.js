import React from "react";
import Task from "./Task"

function TaskList({tasks, onTasksList}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => <Task key={index} category={task.category} text={task.text} onTasksList={onTasksList} />)}
    </div>
  );
}

export default TaskList;
