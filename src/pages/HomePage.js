import React from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import FootballList from "../components/Football/FootballList/FootballList";
import { Header } from "../components/Header/Header";
import { PlayersHeader } from "../components/PlayersHeader/PlayersHeader";
import { getCategories } from "../data/categories";
import { getProducts } from "../data/products";
export const HomePage = () => {
  return (
    <div className="Home-page">
      <CategoryList categories={getCategories()} />
      <PlayersHeader />
      <>
        <Header
          title="Welcome to our football store!"
          image="/assets/aboutfootball.jpg"
        >
          Football is a family of team sports that involve, to varying degrees,
          kicking a ball to score a goal. Unqualified, the word football
          normally means the form of football that is the most popular where the
          word is used. Sports commonly called football include association
          football (known as soccer in North America and Oceania); gridiron
          football (specifically American football or Canadian football);
          Australian rules football; rugby union and rugby league; and Gaelic
          football.[1] These various forms of football share to varying extent
          common origins and are known as football codes.
        </Header>
      </>
      <div className="container">
        <h1 className="title">ALL PRODUCTS</h1>
        <FootballList products={getProducts()} />
      </div>
    </div>
  );
};
