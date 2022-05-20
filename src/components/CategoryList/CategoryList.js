import classes from "./CategoryList.module.css";
import CategoryItem from './CategoryItem/CategoryItem'
function CategoryList({ categories }) {
    const categoryItems = categories.map(category => (
      <CategoryItem key={category.categoryId} category={category} />
    ));
  
    return (
      <div className={classes.CategoryList}>
        <div className={classes.CategoryListTitle}>Shop Your Favourite League</div>
        <div className={classes.CategoryListItem}>
        {categoryItems}
        </div>
        
        
      </div>
    );
  }

export default CategoryList;