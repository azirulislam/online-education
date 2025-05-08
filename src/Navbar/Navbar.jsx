import React from "react";
import "./Navbar.css";
import Group4 from "../assets/image/Group 4.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
     <img className="img" src={Group4} alt="image" />
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/our-portfolio">
            <li>Course</li>
          </NavLink>
          <NavLink to="/our-team">
            <li>Monitors</li>
          </NavLink>
          <NavLink to="/contact">
            <li>About</li>
          </NavLink>
        </ul>
        <button className="btn">Get Started</button>
        </div>
    </div>
  );
};

export default Navbar;
