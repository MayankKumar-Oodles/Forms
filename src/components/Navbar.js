import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyleLink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="Navbar">
      <NavLink style={navStyleLink} to="/">
        Home
      </NavLink>
      <NavLink style={navStyleLink} to="about">
        About
      </NavLink>
      <NavLink style={navStyleLink} to="products">
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
