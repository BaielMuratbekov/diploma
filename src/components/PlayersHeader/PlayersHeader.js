import React from "react";
import { Link } from "react-router-dom";
import "./PlayersHeader.css";
export const PlayersHeader = () => {
  return (
    <div className="container">
      <div className="PlayersHeader">
        <div className="PlayersHeader__item">
          <Link to="/categories/premierliga">
            <img src="/assets/ronaldo.webp" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/laliga">
            <img src="/assets/benzema.jpg" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/seriaA">
            <img src="/assets/dibala.jpg" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/bundesliga">
            <img src="/assets/images.jpg" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/liga1">
            <img src="/assets/mbappe.jpg" alt="ronaldo" />
          </Link>
        </div>
        <div className="PlayersHeader__item">
          <Link to="/categories/restofworld">
            <img src="/assets/kross.jpg" alt="ronaldo" />
          </Link>
        </div>
      </div>
    </div>
  );
};
