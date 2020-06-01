import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import styles from "../css/Register.module.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.confirmValue = this.confirmValue.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }
  confirmValue(e) {
    let str = e.target.id.toString();
    let arr = str.split("-");
    let text = document.getElementById(e.target.id).value;
    let conftext = document.getElementById(arr[1]).value;
    if (text != conftext) {
      alert("Values Not Matching!");
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
        <div className={styles["register-form"]}>
          <h5>ENTER YOUR INFORMATION BELOW</h5>
          <p>
            NOTE: YOUR NAME AND BILLING ADDRESS MUST BE ENTERED EXACTLY AS THEY
            APPEAR ON YOUR CREDIT CARD
            <br />
            *=REQUIRED ENTRY
          </p>
          <form className={styles["register-container"]}>
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
                  // onBlur={this.confirmValue}
                  required
                />
                {/* <p>
                  Both email and confirm email must match, please check and try
                  again.
                </p> */}
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
                <input type="radio" id="male" name="gender" value="MALE" />
                <label for="male">MALE</label>
                <input type="radio" id="female" name="gender" value="FEMALE" />
                <label for="female">FEMALE</label>
                <input
                  type="radio"
                  id="decline"
                  value="DECLINE"
                  name="gender"
                  checked
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
                  type="text"
                  name="input"
                  placeholder="YYYY-MM-DD"
                  required
                  pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                  title="Enter a date in this format YYYY-MM-DD"
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
                  type="text"
                  onBlur={this.checkInput}
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
                  type="text"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <input
            className={styles["register-submit"]}
            type="Submit"
            value="SAVE"
          />
        </div>
      </div>
    );
  }
}

export default Register;
