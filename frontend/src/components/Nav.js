import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
const Nav = () => {
  return (
    <div className="container">
      <div className="nav">
        <img src="assets/websitelogo.png" alt="" />
      </div>
      <div>
        <ul className="nav nav_ul">
          <Link to="/" className="link">
            HOME
          </Link>
          <Link to="/" className="link">
            THE JOURNEY
          </Link>
          <Link to="/team" className="link">
            TEAM
          </Link>
          <Link to="/store" className="link">
            STORE
          </Link>
          <Link to="/contact" className="link">
            CONTACT
          </Link>
        </ul>
      </div>
      <div>
        <h1>Gagan</h1>
      </div>
    </div>
  );
};

export default Nav;
