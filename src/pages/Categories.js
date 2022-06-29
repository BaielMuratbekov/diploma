import CategoryList from "../components/CategoryList/CategoryList";
import { Header } from "../components/Header/Header";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <div>
      <div className="container">
        <CategoryList categories={getCategories()} />
      </div>
      <>
        <Header title="All Products!" image="/asstes/about.jpg">
          <p>
            family of team sports that involve, to varying degrees, kicking a
            ball to score a goal and played on foot, as opposed to horseback
          </p>
        </Header>
      </>
    </div>
  );
}

export default Categories;
