import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="container">
      <div className="nav">
        <img src="assets/websitelogo.png" alt="" />
      </div>
      <div>
        <ul className="nav">
          <li className="nav">Home</li>
          <li className="nav">The Journey</li>
          <li className="nav">Team</li>
          <li className="nav">Store</li>
          <li className="nav">Contact</li>
        </ul>
      </div>
      <div>
        <h1>Gagan</h1>
      </div>
    </div>
  );
};

export default Nav;
