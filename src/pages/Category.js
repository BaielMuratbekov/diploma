import { useParams } from "react-router-dom";
import FootballList from "../components/Football/FootballList/FootballList";
import { Header } from "../components/Header/Header";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/products";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <div>
      <>
        <Header image={category.headerimage} title={category.title}>
          <p>{category.description}</p>
        </Header>
      </>
      <div className="container">
        <FootballList products={getProducts(category.categoryId)} />
      </div>
    </div>
  );
}

export default Category;
