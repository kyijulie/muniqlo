import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Nav.module.scss";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        Register for FREE Shipping on Your 1st Order | FREE Shipping $99+
      </NavLink>
      <div className={styles["navbar-right"]}>
        <NavLink to="/">GET $10</NavLink>
        <NavLink to="/">GiftCard</NavLink>
        <NavLink to="/">Bulk</NavLink>
        <NavLink to="/">Stores</NavLink>
        <NavLink to="/">Hiring</NavLink>
        <NavLink to="/">Help</NavLink>
        <NavLink to="/">Login/Register</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
