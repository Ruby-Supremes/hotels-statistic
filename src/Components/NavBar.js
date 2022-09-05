import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="">
        <NavLink to="/">
          <button className="">Home</button>
        </NavLink>
        <NavLink to="/hotels">
          <button className="">Hotels</button>
        </NavLink>
        <NavLink to="/formpage">
          <button className="">Add New Hotels</button>
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
