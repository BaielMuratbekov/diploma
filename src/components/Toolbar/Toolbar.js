
import { NavToggle } from "../Nav/NavToggle/NavToggle";
import { Logo } from "../Nav/Logo/Logo";
import classes from "./Toolbar.module.css";
import { Nav } from "../Nav/Nav";
import { NavOne } from "../Nav/NavOne/NavOne";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      
      <Logo />
      <Nav/>
      <NavOne/>
      <NavToggle callback={toggleDrawer} />
    </nav>
  );
}

export default Toolbar;
