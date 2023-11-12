import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Insert your logo here */}
        <NavLink to="/">
          <img className="navbar_logo" src="../../../Icon.png" alt="Logo" />
        </NavLink>
      </div>

      <ul className="navbar_links">
        <li className="navbar_link">
          <NavLink exact to="/" activeClassName="activeLink">
            Home
          </NavLink>
        </li>
        <li className="navbar_link">
          <NavLink to="/recipes" activeClassName="activeLink">
            Recipes
          </NavLink>
        </li>
        <li className="navbar_link">
          <NavLink to="/buy" activeClassName="activeLink">
            Buy
          </NavLink>
        </li>
        <li className="navbar_link">
          <NavLink to="/sell" activeClassName="activeLink">
            Sell
          </NavLink>
        </li>
        <li className="navbar_link">
          <NavLink to="/login" activeClassName="activeLink">
            Login
          </NavLink>
        </li>
        <li className="navbar_link">
          <NavLink to="/about" activeClassName="activeLink">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
