import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import classes from "./NavItem.module.css";

export const NavItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <NavLink
        to={props.url}
        className={useMatch(props.url) ? classes.active : null}
      >
        {props.children}
      </NavLink>
    </li>
  );
};
