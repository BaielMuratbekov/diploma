import FootballList from "../../components/Football/FootballList/FootballList";
import { Header } from "../../components/Header/Header";
import { getProducts } from "../../data/products";


function Products() {
  return (
    <div>
      <>
        <Header title="All Products!" image="/asstes/about.jpg">
          frjvkanstgkvnsrlgdnaufnliuvaufbjbbbdsasdfghjkuytrsdfghjkjhgfdsdfghjkkjhgfdhjklkjdfghjk
        </Header>
      </>

      <div className="container">
        <FootballList products={getProducts()} />
      </div>
    </div>
  );
}

export default Products;
