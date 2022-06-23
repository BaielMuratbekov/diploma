import classes from "./HeaderCart.module.css";

function HeaderCart({ title, children }) {
  return (
    <header className={classes.HeaderCart} >
      <section className={classes.HeaderCart}>
        <h1>{title}</h1>
        <div className={classes.HeaderCart__list}>{children}</div>
      </section>
      
    </header>
  );
}

export default HeaderCart;
