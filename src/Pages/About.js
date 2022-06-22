import React from "react";
import { AboutItem } from "../components/AboutItem/AboutItem";
import { Header } from "../components/Header/Header";

export const About = () => {
  return (
    <div className="About">
      <>
        <Header title="About store" image="/assets/about3.webp">
          <AboutItem />
        </Header>
      </>
      <div className="container"></div>
    </div>
  );
};
