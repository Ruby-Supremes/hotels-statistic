import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={styles.navbar}>
      <NavLink to="/" style={styles.navlink}>
        Home
      </NavLink>
      <NavLink to="/hotels" style={styles.navlink}>
        Hotels
      </NavLink>
      <NavLink to="/formpage" style={styles.navlink}>
        Add New Hotels
      </NavLink>
    </div>
  );
};

export default NavBar;

// CSS styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60px",
    background: "#17264f",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "100",
  },
  navlink: {
    textDecoration: "none",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease-in-out",
  },
  navlinkActive: {
    backgroundColor: "#34495e",
  },
};
