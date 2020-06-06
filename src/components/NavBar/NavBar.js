import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Nav.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { ReactComponent as Location } from "../../icons/icon-location.svg";
import { ReactComponent as Help } from "../../icons/icon-help.svg";
import { ReactComponent as Briefcase } from "../../icons/icon-briefcase.svg";
import { ReactComponent as Dollar } from "../../icons/icon-currency-dollar.svg";
import { ReactComponent as Group } from "../../icons/icon-group.svg";
import { ReactComponent as Inbox } from "../../icons/icon-inbox.svg";

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
    const links = this.props.auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
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
            <NavLink to="/">
              <Group />
              GET $10
            </NavLink>
            <NavLink to="/">
              {" "}
              <Dollar />
              GiftCard
            </NavLink>
            <NavLink to="/">
              <Inbox />
              Bulk
            </NavLink>
            <NavLink to="/">
              <Location />
              Stores
            </NavLink>
            <NavLink to="/">
              <Briefcase />
              Hiring
            </NavLink>
            <NavLink to="/">
              <Help />
              Help
            </NavLink>
            {links}
            {/* <NavLink className={styles.login} to="/login">
              Login/Register
            </NavLink> */}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(NavBar);
