import {NavOne} from "../Nav/NavOne/NavOne";
import {NavToggle} from "../Nav/NavToggle/NavToggle";
import {Logo} from "../Nav/Logo/Logo";
import classes from "./Toolbar.module.css";

function Toolbar({ toggleDrawer }) {
    return (
        <nav className={classes.Toolbar}>
                <Logo />
                <NavOne />
                <NavToggle callback={toggleDrawer} />
        </nav>
    );
}

export default Toolbar;