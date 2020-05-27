import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Login.module.scss";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles["login"]}>
        <div className={styles["login-header"]}>
          <h5>LOGIN</h5>
          <p>
            Log in for access to your account, order history, and more. Or,
            create a new account.
          </p>
        </div>
        <div className={styles["login-bottom"]}>
          <div className={styles["login-form"]}>
            <h5>HAVE AN ACCOUNT?</h5>
            <p>PLEASE LOG IN WITH YOUR EMAIL ADDRESS.</p>
            <form>
              <div>
                <label for="email">EMAIL*</label>
                <input
                  id="email"
                  className={styles["login-email"]}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <br />
              <div>
                <label for="password">PASSWORD*</label>
                <input
                  id="password"
                  className={styles["login-password"]}
                  type="text"
                  placeholder="Password"
                />
              </div>
              <br />
              <div>
                <a href="">NEED HELP?</a>
                <input
                  className={styles["login-submit"]}
                  type="Submit"
                  value="LOG IN"
                />
              </div>
            </form>
          </div>
          <div className={styles["create-account"]}>
            <h5>NEW TO UNIQLO?</h5>
            <p>
              Create an Account and enjoy FREE SHIPPING with your 1st order
              (Free Shipping automatically applied at checkout).
            </p>
            <button type="button">
              <NavLink to="/register">CREATE AN ACCOUNT</NavLink>
            </button>

            <h5>WE CARE ABOUT YOUR SECURITY</h5>
            <p>
              UNIQLO takes the security of your data seriously, so we suggest
              choosing a unique password you’ve never used on other sites that’s
              not easily guessed by third parties. <br /> Be sure to change it
              from time to time by logging in and clicking on your profile.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
