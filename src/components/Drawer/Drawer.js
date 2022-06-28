import { Nav } from "../Nav/Nav";
import classes from "./Drawer.module.css";
import { Logo } from "../Nav/Logo/Logo";

function Drawer({ open, toggle }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(" ")}>
      <div onClick={toggle} className={classes.backdrop}></div>
      <div className={classes.content}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Drawer;
