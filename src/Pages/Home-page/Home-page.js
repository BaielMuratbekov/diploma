import React from "react";
import { PlayersHeader } from "../../components/PlayersHeader/PlayersHeader";

import "./Home-page.css";
import { Header } from "../../components/Header/Header";
import CategoryList from '../../components/CategoryList/CategoryList'
import {getCategories} from '../../data/categories'
export const HomePage = () => {
  return (
    <div className="Home-page">
      <CategoryList categories={getCategories()}/>
      <PlayersHeader />
      <>
        <Header
          title="Welcome to our football store!"
          image="/assets/aboutfootball.jpg"
        >
          A coffee bean is a seed of the Coffea plant and the source for coffee.
          It is the pip inside the red or purple fruit often referred to as a
          cherry. Just like ordinary cherries, the coffee fruit is also a
          so-called stone fruit. Even though the coffee beans are not
          technically beans, they are referred to as such because of their
          resemblance to true beans.
        </Header>
      </>
    </div>
  );
};
