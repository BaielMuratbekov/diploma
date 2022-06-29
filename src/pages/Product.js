import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { getProduct } from "../data/products";
import { FootballByu } from "../components/Football/FootballByu/FootballByu";
function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <Header title={product.title} image={product.image}>
        <p>{product.description}</p>
        <FootballByu productId={params.productId} />
      </Header>
      
    </>
  );
}

export default Product;
