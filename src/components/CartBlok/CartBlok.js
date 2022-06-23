import { useSelector } from "react-redux";
import "./CartBlok.css";
import { FaOpencart } from "react-icons/fa";
import { ItemsInCart } from "../ItemsInCart/ItemsInCart";
import { NavLink } from "react-router-dom";

export const CartBlok = () => {
  const number = useSelector(store => {
    return Object.values(store.cart.itemsInCart).reduce((sum, number) => sum + number, 0);
  });
  return (
    <NavLink to='/cart'>
      <div className="cart-block">
        <ItemsInCart quantity={number} />
        <FaOpencart size={30} className="cart-icon" />
      </div>
    </NavLink>
  );
};
