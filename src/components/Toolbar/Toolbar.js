
import { NavToggle } from "../Nav/NavToggle/NavToggle";
import { Logo } from "../Nav/Logo/Logo";
import classes from "./Toolbar.module.css";
import { Nav } from "../Nav/Nav";
import { CartBlok } from "../CartBlok/CartBlok";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      
      <Logo />
      <Nav/>
      <CartBlok/>
      <NavToggle callback={toggleDrawer} />
    </nav>
  );
}

export default Toolbar;
