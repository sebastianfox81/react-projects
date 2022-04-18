import React from "react";

const Categories = ({ categories, filterItems }) => {
  console.log(categories)
  return (
    <div>
      {categories.map((category) => {
        return (
          <button key={category.id} className="filter-btn" onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
