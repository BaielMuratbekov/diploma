import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import HeaderCart from "../components/Header/HeaderCart/HeaderCart";
import classes from "../components/Header/HeaderCart/HeaderCart.module.css";
function Cart() {
  const items = useSelector((store) => store.cart.itemsInCart);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className={classes.HeaderCart__item}>
          <div>
            <img src={product.image} alt={product.title} width={200} />
          </div>
          <div className={classes.HeaderCart__right}>
            <div>
              <Link to="">{product.title}</Link>
              <button
                onClick={() =>
                  dispatch({
                    type: "cart/decrement",
                    payload: product.productId,
                  })
                }
              >
                <BiMinus size={23}/>
              </button>
              {items[product.productId]}
              <button
                onClick={() =>
                  dispatch({
                    type: "cart/increment",
                    payload: product.productId,
                  })
                }
              >
                <BsPlus size={23}/>
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "cart/delete", payload: product.productId })
                }
              >
                <MdDelete size={23} color="tomato" />
              </button>
            </div>

            <div className={classes.HeaderCart__checkout}>
              {product.price * items[product.productId]} сом{" "}
              <Link to="/checkout" >
                <IoBagCheckOutline size={23}/>
              </Link>
            </div>
            <div></div>
          </div>
          
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }

  return (
    <>
      <HeaderCart title="Your Shopping Cart">{output}</HeaderCart>
      
      <div>
        <hr />
        Total: {total} сом
      </div>
    </>
  );
}

export default Cart;
