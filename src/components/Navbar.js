// Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <nav>
      <Link to="/">Home</Link>
      <hr />
      <NavLink to="/login">Login</NavLink>
      <hr />
      <NavLink to="/signup">Signup</NavLink>
      <hr />
      <NavLink to="/portfolio">Portfolio</NavLink>
      <hr />
      <NavLink to="/logout">Logout</NavLink>
    </nav>
  );
};

export default Navbar;
