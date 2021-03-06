import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Header } from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import { AiFillHome } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import classes from "../components/AuthForm/AuthForm.module.css";
import { useEffect } from "react";
import CheckoutImg from '../assets/checkout.webp'
function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  useEffect(() => {
    if (!localId) {
      navigate("/auth");
    }
  }, [localId, navigate]);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> | {items[product.productId]} |
          {product.price * items[product.productId]} сом
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate("/");
  }

  return (
    <>
      <Header title="Checkout" image={CheckoutImg}>
        Please enter your information.
      </Header>
      <div className="Checkout__total">{output}</div>
      <hr />
      <div className="Checkout__total">Total: {total}сом </div>
      <div className={classes.Auth}>
        <form onSubmit={onCheckout} className={classes.AuthForm}>
          <label>
            <FaUserAlt className={classes.AuthForm__icon} />
            <input
              type="text"
              name="firstName"
              required
              placeholder="First name"
            />
          </label>
          <label>
            <FaUserAlt className={classes.AuthForm__icon} />
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last name"
            />
          </label>
          <label>
            <AiFillHome className={classes.AuthForm__icon} />
            <input type="text" name="address" required placeholder="Address" />
          </label>
          <label>
            <FaPhoneAlt className={classes.AuthForm__icon} />
            <input type="phone" name="phone" required placeholder="Phone" />
          </label>

          <button>Complete the order</button>
        </form>
      </div>
    </>
  );
}

export default Checkout;
