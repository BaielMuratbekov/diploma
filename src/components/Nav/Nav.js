import React from "react";
import { useSelector } from "react-redux";
import classes from "./Nav.module.css";
import { NavItem } from "./NavItem/NavItem";
export const Nav = () => {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);
  return (
    <div className={classes.Nav}>
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/abouts">About Store</NavItem>
        <NavItem url="/player">Players</NavItem>
        <NavItem url="/sale">Sale UP To -50%</NavItem>
        {isAuthenticated ? <NavItem url="/signout">Sign out</NavItem> : null}
        {!isAuthenticated ? <NavItem url="/auth">Sign in</NavItem> : null}
      </ul>
    </div>
  );
};
