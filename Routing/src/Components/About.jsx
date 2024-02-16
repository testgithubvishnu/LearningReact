import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aperiam
        tempore minima eveniet dolorem reiciendis quidem et beatae soluta
        possimus nihil quibusdam nesciunt quis, alias officia totam vel error
        debitis.
      </p>
      <ul>
        <li>
          <Link to="/about/Image">Image</Link>
        </li>
        <li>
          <Link to="/about/Price">Price</Link>
        </li>
        <li>
          <Link to="/about/Location">Location</Link>
        </li>
      </ul>
      {/* subroutes get loaded here */}
      <Outlet></Outlet>
    </div>
  );
}

export default About;
