import React from "react";
import { Header } from "../components/Header/Header";
import PlayerImg from '../assets/players.webp'
export const Player = () => {
  return (
    <div>
      <>
        <Header title="Players" image={PlayerImg}>
          <p>
            A football player or footballer is a sportsperson who plays one of
            the different types of football. The main types of football are
            association football, American football, Canadian football,
            Australian rules football, Gaelic football, rugby league and rugby
            union. It has been estimated that there are 250 million association
            football players in the world,[1] and many play the other forms of
            football.
          </p>
        </Header>
      </>
    </div>
  );
};
