import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <button className="button">Home</button>
        </NavLink>
        <NavLink to="/hotels">
          <button className="button">Hotels</button>
        </NavLink>
        <NavLink to="/formpage">
          <button className="button">Add New Hotels</button>
        </NavLink>
      </div>
    </>
  ); }; export default NavBar;
  