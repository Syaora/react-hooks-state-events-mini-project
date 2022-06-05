import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksList, setTasksList] = useState(TASKS)

  function removeTask(task){
    const newList = tasksList.filter((item) => item.text !== task)
    setTasksList(newList)
  }

  function filterTask(categoryName){
    const newList = tasksList.filter((item) => item.category === categoryName || categoryName === "All")
    console.log(categoryName)
    setTasksList(newList)
  }

  function changeTasks(task){
    const newList = [...tasksList, task]
    setTasksList(newList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={filterTask}/>
      <NewTaskForm onTaskFormSubmit={changeTasks} categories={CATEGORIES}/>
      <TaskList tasks={tasksList} onTasksList={removeTask} />
    </div>
  );
}

export default App;
