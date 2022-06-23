import React from "react";
import { useDispatch } from "react-redux";
import "./FootballByu.css";
import { BsFillCartPlusFill } from "react-icons/bs";

export const FootballByu = ({ productId }) => {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch({ type: "cart/add", payload: productId });
  }

  return (
    <div className="Football-byu">
      <button onClick={onAddToCart}>
        <BsFillCartPlusFill color="rgb(255, 255, 255)" size={50} />
      </button>
    </div>
  );
};
