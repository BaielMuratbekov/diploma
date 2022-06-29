import FootballList from "../components/Football/FootballList/FootballList";
import { Header } from "../components/Header/Header";
import { getProducts } from "../data/products";


function Products() {
  return (
    <div>
      <>
        <Header title="All Products!" image="/asstes/about.jpg">
        <p>
            A football is a ball inflated with air that is used to play one of
            the various sports known as football. In these games, with some
            exceptions, goals or points are scored only when the ball enters one
            of two designated goal-scoring areas; football games involve the two
            teams each trying to move the ball in opposite directions along the
            field of play. The first balls were made of natural materials, such
            as an inflated pig bladder, later put inside a leather cover, which
            has given rise to the American slang-term "pigskin". Modern balls
            are designed by teams of engineers to exacting specifications, with
            rubber or plastic bladders, and often with plastic covers. Various
            leagues and games use different balls, though they all have one of
            the following basic shapes:
          </p>
        </Header>
      </>

      <div className="container">
        <FootballList products={getProducts()} />
      </div>
    </div>
  );
}

export default Products;
