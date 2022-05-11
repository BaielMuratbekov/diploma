import {NavOne} from "../Nav/NavOne/NavOne";
import {Logo} from "../Nav/Logo/Logo";
import classes from "./Drawer.module.css";

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
                <NavOne/>
            </div>
        </div>
    );
}

export default Drawer;