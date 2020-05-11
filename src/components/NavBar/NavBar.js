import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light row">
      <NavLink className="col-xs-5" to="/">
        Register for FREE Shipping on Your 1st Order | FREE Shipping $99+
      </NavLink>
      <NavLink className="col-xs-1" to="/">
        GET $10
      </NavLink>
      <NavLink className="col-xs-1" to="/">
        GiftCard
      </NavLink>
      <NavLink className="col-xs-1" to="/">
        Bulk
      </NavLink>
      <NavLink className="col-xs-1" to="/">
        Stores
      </NavLink>
      <NavLink className="col-xs-1" to="/">
        Hiring
      </NavLink>
      <NavLink className="col-xs-1" to="/">
        Help
      </NavLink>
      <NavLink className="col-xs-1" to="/">
        Login/Register
      </NavLink>
    </nav>
  );
};

export default NavBar;
