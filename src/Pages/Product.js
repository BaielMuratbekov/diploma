import { getProduct } from "../data/products";
import { Header } from "../components/Header/Header";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);
  
  if (!product) {
    return null;
  }

  return (
    <>
      <Header title={product.title} image={product.image}>
        {product.description}
      </Header>
    </>
  );
}

export default Product;
