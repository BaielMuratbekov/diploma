
import { Header } from "../components/Header/Header";
import { getCategories } from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

function Categories() {
  return (
    <div>
      <div className="container">
        <CategoryList categories={getCategories()} />
      </div>
      <>
        <Header title="All Products!" image="/asstes/about.jpg">
          frjvkanstgkvnsrlgdnaufnliuvaufbjbbbdsasdfghjkuytrsdfghjkjhgfdsdfghjkkjhgfdhjklkjdfghjk
        </Header>
      </>

      
    </div>
  );
}

export default Categories;
