import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import HeaderCart from "../components/Header/HeaderCart/HeaderCart";
import classes from "../components/Header/HeaderCart/HeaderCart.module.css";
import { increment, decrement, remove } from "../redux/cartSlice";
function Cart() {
  const items = useSelector((store) => store.cart.items);
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
              <button onClick={() => dispatch(decrement(product.productId))}>
                <BiMinus size={23} />
              </button>
              {items[product.productId]}
              <button onClick={() => dispatch(increment(product.productId))}>
                <BsPlus size={23} />
              </button>
              <button onClick={() => dispatch(remove(product.productId))}>
                <MdDelete size={23} color="tomato" />
              </button>
            </div>

            <div className={classes.HeaderCart__checkout}>
              {product.price * items[product.productId]} сом{" "}
            </div>
          </div>
        </div>
      );
    });

  if (!output.length) {
    output = "No items in the cart.";
  }

  return (
    <>
      <HeaderCart title="Your Shopping Cart">{output}</HeaderCart>
      <hr />
      <div className="m-left-30">
        Total: {total} сом
        <Link to="/checkout" className="m-left-30">
          <IoBagCheckOutline size={30} />
        </Link> 
      </div>
    </>
  );
}

export default Cart;
