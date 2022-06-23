
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { BsFillCartXFill } from 'react-icons/bs'
import classes from './Cart.module.css'

function Cart() {
  const items = useSelector(store => store.cart.itemsInCart);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} ${product.price * items[product.productId]}

          <button onClick={() => dispatch({ type: "cart/decrement", payload: product.productId })} className={classes.CartButtonDecrement}>-</button>
          <button onClick={() => dispatch({ type: "cart/increment", payload: product.productId })} className={classes.CartButtonIncrement}>+</button>
          <button onClick={() => dispatch({ type: "cart/delete", payload: product.productId })} className={classes.CartButtonDelete}><BsFillCartXFill size={23} color='tomato'/></button>
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }


  return (
    <>
      <Header
        title="Your Shopping Cart"
        image="/assets/about3.webp">
        Please review items in your cart.
      </Header>
      <div>
        {output}
        <hr />
        Total: ${total}
      </div>
    </>
  );
}

export default Cart;