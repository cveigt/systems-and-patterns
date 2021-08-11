import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#">Christian Veigt</a>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
