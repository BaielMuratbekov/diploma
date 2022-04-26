import { useParams } from "react-router-dom";
import { getProduct } from "../data/products";
import { Header } from "../components/Header/Header";

function Product() {
    const params = useParams();
    const football = getProduct(params.id)

    if (!football) {
        return null;
    }

    return (
        <>
            <Header
                title={football.title}
                image={football.image}>
                {football.description}
            </Header>
        </>
    );
}

export default Product;