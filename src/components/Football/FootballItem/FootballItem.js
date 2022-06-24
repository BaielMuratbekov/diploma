import React from "react";
import "./FootballItem.css";
import { FootballCover } from "../FootballCover/FootballCover";
import { Link } from "react-router-dom";

export const FootballItem = ({ product }) => {
  return (
    <div className="FootballItem">
      <Link
        to={"/products/" + product.productId}
        className="footballitem__title"
      >
        <FootballCover image={product.image} />
      </Link>
      <div className="footballitem__detalis">
        {product.title}
        <div className="footballitem__buy">
          <span className="football-byu__price">{product.price} сом.</span>
        </div>
      </div>
    </div>
  );
};
