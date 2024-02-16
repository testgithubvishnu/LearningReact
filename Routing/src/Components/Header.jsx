import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
