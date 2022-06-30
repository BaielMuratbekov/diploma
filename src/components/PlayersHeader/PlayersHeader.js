import React from "react";
import { Link } from "react-router-dom";
import "./PlayersHeader.css";
import ronaldo from "../../assets/ronaldocr7.png"
import marcelo from "../../assets/MARCELO.png"
import napoli from "../../assets/nopoli.png"
import toni from "../../assets/bavaria.png"
import mbappe from "../../assets/mbappe.png"
export const PlayersHeader = () => {
  return (
    <div className="container">
      <div className="PlayersHeader">
        <div className="PlayersHeader__item">
          <Link to="/categories/premierliga">
            <img src={ronaldo} alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/laliga">
            <img src={marcelo} alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/seriaA">
            <img src={napoli} alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/bundesliga">
            <img src={toni} alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/liga1">
            <img src={mbappe} alt="ronaldo" />
          </Link>
        </div>
      </div>
    </div>
  );
};
