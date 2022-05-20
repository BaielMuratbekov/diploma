import React from "react";
import classes from "./Header.module.css";
export const Header = ({ image, title, children }) => {
  return (
    <header className={classes.Header}>
      <section className={classes.Header__left}>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
      <div className={classes.Header__right}>
        <img src={image} alt={title} />
      </div>
    </header>
  );
};
