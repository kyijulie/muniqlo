import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import cx from "classnames";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

import styles from "../css/Register.module.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      gender: "decline",
      birthday: "",
    };
    this.confirmValue = this.confirmValue.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  handleChange(e) {
    if (
      e.target.id === "female" ||
      e.target.id === "male" ||
      e.target.id === "decline"
    ) {
      this.setState({
        gender: e.target.value,
      });
    }
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  confirmValue(e) {
    let str = e.target.id.toString();
    let arr = str.split("-");
    let text = document.getElementById(e.target.id).value;
    let conftext = document.getElementById(arr[1]).value;
    if (text != conftext) {
      let text;
      switch (e.target.id) {
        case "confirm-email":
          text =
            "Both email and confirm email must match, please check and try again.";
          break;
        case "confirm-password":
          text =
            "Both password and confirm password must match, please check and try again.";
          break;
      }
      document.getElementById(e.target.id).value = "";
      document.getElementById(e.target.id + " alert").innerHTML = text;
    } else {
      document.getElementById(e.target.id + " alert").innerHTML = "";
    }
  }
  checkInput(e) {
    if (document.getElementById(e.target.id).value == "") {
      let text;
      switch (e.target.id) {
        case "email":
          text = "Please enter an email address.";
          break;
        case "fname":
          text = "Please enter First Name.";
          break;
        case "lname":
          text = "Please enter Last Name.";
          break;
        case "password":
          text = "Please enter a valid Password.";
          break;
      }
      document.getElementById(e.target.id + " alert").innerHTML = text;
    } else {
      document.getElementById(e.target.id + " alert").innerHTML = "";
    }
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className={styles["register"]}>
        <div className={styles["register-header"]}>
          <h5>ENTER YOUR DETAILS</h5>
          <p>
            CREATE AN ACCOUNT WITH UNIQLO ALLOW YOU TO CHECKOUT QUICKLY AND KEEP
            TRACK ON YOUR ORDERS
          </p>
        </div>
        <div className={styles["register-login"]}>
          <p>DO YOU HAVE AN EXISTING UNIQLO ACCOUNT?</p>
          <NavLink to="/login">
            <button>LOGIN -> </button>
          </NavLink>
        </div>
        <div className={styles["auth-error-msg"]}>
          {authError ? <p>{authError}</p> : null}
        </div>
        <div className={styles["register-form"]}>
          <h5>ENTER YOUR INFORMATION BELOW</h5>
          <p>
            NOTE: YOUR NAME AND BILLING ADDRESS MUST BE ENTERED EXACTLY AS THEY
            APPEAR ON YOUR CREDIT CARD
            <br />
            *=REQUIRED ENTRY
          </p>
          <form
            className={styles["register-container"]}
            onSubmit={this.handleSubmit}
          >
            <div>
              <div className={styles["email-description"]}>
                <p>EMAIL ADDRESS*</p>
              </div>
              <div className={styles["register-input"]}>
                <input
                  id="email"
                  className="register-email"
                  type="email"
                  onBlur={this.checkInput}
                  onChange={this.handleChange}
                  required
                />
                <p id="email alert"></p>
              </div>
            </div>
            <div>
              <div className={styles["grid-description"]}>
                <p>CONFIRM EMAIL ADDRESS*</p>
              </div>
              <div className={styles["register-input"]}>
                <input
                  id="confirm-email"
                  className="confirm-email"
                  type="email"
                  onBlur={this.confirmValue}
                  required
                />
                <p id="confirm-email alert"></p>
              </div>
            </div>
            <div>
              <div>
                <p>FIRST NAME*</p>
              </div>
              <div className={styles["register-input"]}>
                <input
                  id="fname"
                  className="register-fname"
                  type="text"
                  onBlur={this.checkInput}
                  onChange={this.handleChange}
                  required
                />
                <p id="fname alert"></p>
              </div>
            </div>
            <div>
              <div>
                <p>LAST NAME*</p>
              </div>
              <div className={styles["register-input"]}>
                <input
                  id="lname"
                  className="register-lname"
                  type="text"
                  onBlur={this.checkInput}
                  onChange={this.handleChange}
                  required
                />
                <p id="lname alert"></p>
              </div>
            </div>
            <div>
              <div>
                <p>GENDER</p>
              </div>
              <div>
                <input
                  id="male"
                  type="radio"
                  value="male"
                  name="male"
                  checked={this.state.gender === "male"}
                  onChange={this.handleChange}
                />
                <label for="male">MALE</label>
                <input
                  type="radio"
                  id="female"
                  value="female"
                  name="female"
                  checked={this.state.gender === "female"}
                  onChange={this.handleChange}
                />
                <label for="female">FEMALE</label>
                <input
                  type="radio"
                  id="decline"
                  value="decline"
                  name="decline"
                  checked={this.state.gender === "decline"}
                  onChange={this.handleChange}
                />
                <label for="decline">DECLINE TO STATE / OTHER</label>
              </div>
            </div>
            <div className={styles["register-text"]}>
              <div className={styles["register-flex"]}>
                <p>BIRTHDAY</p>
              </div>
              <div
                className={cx(
                  styles["register-input"],
                  styles["register-flex"]
                )}
              >
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  // pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                  onChange={this.handleChange}
                />
              </div>
              {/* <div className={styles["register-flex"]}>Example: 03/28/1968</div> */}
            </div>
            <div>
              <div>
                <p>PASSWORD*</p>
              </div>
              <div className={styles["register-input"]}>
                <input
                  id="password"
                  className="register-password"
                  type="password"
                  onBlur={this.checkInput}
                  onChange={this.handleChange}
                  placeholder="8-20 characters with numbers, letters & special characters"
                  required
                />
                <p id="password alert"></p>
              </div>
            </div>
            <div>
              <div>
                <p>CONFIRM PASSWORD*</p>
              </div>
              <div className={styles["register-input"]}>
                <input
                  id="confirm-password"
                  className="confirm-password"
                  type="password"
                  onBlur={this.confirmValue}
                  required
                />
                <p id="confirm-password alert"></p>
              </div>
            </div>
            <div>
              {" "}
              <input
                className={styles["register-submit"]}
                type="Submit"
                value="SAVE"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
