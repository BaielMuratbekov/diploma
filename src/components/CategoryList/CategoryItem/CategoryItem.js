import React from "react";
import classes from "./CategoryItem.module.css";
import { Link } from "react-router-dom";
function CategoryItem({ category }) {
  return (
    
    <div className={classes.Category}>
      
      <div className={classes.CategoryInfo}>
        <div className={classes.CategoryItem}>
          <Link
            className={classes.CategoryLink}
            to={"/categories/" + category.categoryId}
          >
            <img src={category.image} alt={category.title} />
          </Link>

          <Link
            className={classes.CategoryTitle}
            to={"/categories/" + category.categoryId}
          >
            {category.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CategoryItem;
