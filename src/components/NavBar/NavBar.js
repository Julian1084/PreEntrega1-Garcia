import React from "react";
import "./NavBar.css";

import Shop from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <li>
          <h1 style={{ color: "white" }}>Picadas Mundialistas</h1>
        </li>
        <li>
          <a href="www.google.com">Home</a>
        </li>
        <li>
          <a href="www.google.com">Contact</a>
        </li>
        <li>
          <a href="www.google.com">About</a>
        </li>
        <li>
          <Shop />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
