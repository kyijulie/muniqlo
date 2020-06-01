import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Nav.module.scss";

const SignedOutLinks = () => {
  return (
    <NavLink className={styles.login} to="/login">
      Login/Register
    </NavLink>
  );
};

export default SignedOutLinks