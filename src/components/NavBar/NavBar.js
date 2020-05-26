import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Nav.module.scss";
import cx from "classnames";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.clickIcon = this.clickIcon.bind(this);
  }

  clickIcon() {
    let x = document.getElementById("myTopNav");
    if (x.className === styles["navbar-right"]) {
      x.className += cx(styles["navbar-right"], styles.responsive);
    } else {
      x.className = styles["navbar-right"];
    }
  }

  render() {
    return (
      <div className={styles.nav}>
        <nav className={styles.navbar}>
          <NavLink to="/">
            Register for FREE Shipping on Your 1st Order | FREE Shipping $99+
          </NavLink>
          <div className={styles["navbar-right"]} id="myTopNav">
            <a className={styles.icon} onClick={this.clickIcon}>
              <i className="fa fa-bars"></i>
            </a>
            <NavLink to="/">GET $10</NavLink>
            <NavLink to="/">GiftCard</NavLink>
            <NavLink to="/">Bulk</NavLink>
            <NavLink to="/">Stores</NavLink>
            <NavLink to="/">Hiring</NavLink>
            <NavLink to="/">Help</NavLink>
            <NavLink className={styles.login} to="/login">
              Login/Register
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
