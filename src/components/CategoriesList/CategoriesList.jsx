import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./CategoriesList.scss";
function CategoriesList({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoriesList;
