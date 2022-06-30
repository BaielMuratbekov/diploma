import { Link } from "react-router-dom";
import classes from './MainHeader.module.css'
function MainHeader({ image, title, children }) {
  return (
    <header className={classes.MainHeader}>
      <section className={classes.MainHeader__left}>
        <img src={image} alt={title} />
      </section>
      <div className={classes.MainHeader__right}>
        <h1>{title}</h1>
        <div>{children}</div>
        <button>
          <Link to="/products">Shop Now</Link>
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
