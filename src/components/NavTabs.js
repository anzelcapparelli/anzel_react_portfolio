import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          About
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink exact to="/portfolio" className="nav-link" activeClassName="active">
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/contact" className="nav-link" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
