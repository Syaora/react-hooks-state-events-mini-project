import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const newCategories = categories.slice(1)
  const [textValue, setTextValue] = useState("")
  const [categoryValue, setCategoryValue] = useState("Code")

  function handleTextValue(event){
    setTextValue((textValue) => event.target.value)
  }

  function handleCategoryValue(event){
    setCategoryValue((categoryValue) => event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newTask = {
      text: textValue,
      category: categoryValue
    }
    onTaskFormSubmit(newTask)
    setTextValue("")
    setCategoryValue("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={textValue} onChange={handleTextValue} name="text" />
      </label>
      <label>
        Category
        <select value={categoryValue} onChange={handleCategoryValue} name="category">
          {/* render <option> elements for each category here */}
          {newCategories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
