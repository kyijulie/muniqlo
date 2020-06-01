import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Nav.module.scss";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <a className={styles.login} onClick={props.signOut}>
      Signout
    </a>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
