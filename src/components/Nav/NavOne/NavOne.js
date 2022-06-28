import React from "react";
import classes from "./NavOne.module.css";
import { CartBlok } from "../../CartBlok/CartBlok.js";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
export const NavOne = () => {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);
  return (
    <div className={classes.NavOne}>
      <div className={classes.wrapper}>
      {isAuthenticated ? (
          <NavLink to="/signout">
            <FaSignOutAlt size={30} />
          </NavLink>
        ) : null}
        {!isAuthenticated ? (
          <NavLink to="/auth">
            <BiUserCircle size={30} />
          </NavLink>
        ) : null}{" "}
        <CartBlok />
        
      </div>
    </div>
  );
};
