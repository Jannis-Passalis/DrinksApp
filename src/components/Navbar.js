import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="head-of-page">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/findcocktails">Find Drinks</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
