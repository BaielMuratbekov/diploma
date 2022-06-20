import React from "react";
import { Link } from "react-router-dom";
import "./PlayersHeader.css";
export const PlayersHeader = () => {
  return (
    <div className="container">
      <div className="PlayersHeader">
        <div className="PlayersHeader__item">
          <Link to="/categories/premierliga">
            <img src="/assets/ronaldocr7.png" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/laliga">
            <img src="/assets/MARCELO.png" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/seriaA">
            <img src="/assets/nopoli.png" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/bundesliga">
            <img src="/assets/bavaria.png" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/liga1">
            <img src="/assets/mbappe.png" alt="ronaldo" />
          </Link>
        </div>
      </div>
    </div>
  );
};
