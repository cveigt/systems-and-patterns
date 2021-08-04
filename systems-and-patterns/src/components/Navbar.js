import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Christian Veigt
      </Link>
    </nav>
  );
}

export default Navbar;
