import { useSelector } from "react-redux";
import "./CartBlok.css";
import { BsCart2 } from "react-icons/bs";
import { ItemsInCart } from "../ItemsInCart/ItemsInCart";
import { NavLink } from "react-router-dom";

export const CartBlok = () => {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });
  return (
    <NavLink to='/cart'>
      <div className="cart-block">
        <ItemsInCart quantity={number} />
        <BsCart2 size={30} className="cart-icon" />
      </div>
    </NavLink>
  );
};
