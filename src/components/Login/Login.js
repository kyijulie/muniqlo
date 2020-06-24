import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Login.module.scss";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
    this.props.signIn(this.state);
  };
  render() {
    const { authError } = this.props;

    return (
      <div className={styles["login"]}>
        <div className={styles["login-header"]}>
          <h5>LOGIN</h5>
          <p>
            Log in for access to your account, order history, and more. Or,
            create a new account.
          </p>
          <div className={styles["auth-error-msg"]}>
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
        <div className={styles["login-bottom"]}>
          <div className={styles["login-form"]}>
            <h5>HAVE AN ACCOUNT?</h5>
            <p>PLEASE LOG IN WITH YOUR EMAIL ADDRESS.</p>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label for="email">EMAIL*</label>
                <input
                  id="email"
                  className={styles["login-email"]}
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div>
                <label for="password">PASSWORD*</label>
                <input
                  id="password"
                  className={styles["login-password"]}
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
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
            <NavLink to="/register">
              <button type="button">CREATE AN ACCOUNT </button>
            </NavLink>

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

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
