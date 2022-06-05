import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  const [isSelected, setIsSelected] = useState("All")

  function handleClick(category){
    setIsSelected((isSelected) => category)
    onCategoryChange(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return <button className={isSelected === category ? "selected" : ""} key={category} onClick={() => handleClick(category)} >{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
