import React, { Component } from "react";
import HoverMenu from "./HoverMenu";
import { connect } from "react-redux";
import styles from "../css/Nav.module.scss";
import cx from "classnames";
import submitButton from "../../img/submitButton.png";
import ShoppingBag from "./ShoppingBag";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(e) {
    this.setState({
      menu: e.target.title,
    });
  }
  render() {
    return (
      // Fix HOVER
      <nav className={styles.menubar}>
        <div className={styles.dropdown} to="/">
          HOME
        </div>
        <div className={styles.dropdown}>
          <span onMouseEnter={this.toggleMenu} title="NEW">
            NEW
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className={styles.dropdown}>
          <span onMouseOver={this.toggleMenu} title="WOMEN">
            WOMEN
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className={styles.dropdown}>
          <span onMouseOver={this.toggleMenu} title="MEN">
            MEN
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className={styles.dropdown} to="/kids">
          <span onMouseOver={this.toggleMenu} title="KIDS">
            KIDS
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className={styles.dropdown} to="/baby">
          <span onMouseOver={this.toggleMenu} title="BABY">
            BABY
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className={styles.dropdown} to="/">
          <span onMouseOver={this.toggleMenu} title="ABOUT">
            ABOUT
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        {/* figure out how to put search button on the right */}
        <div className={cx(styles.dropdown, styles["dropdown-right"])} to="/">
          <form className={styles["search-form"]}>
            {/* <label> */}
            <input
              className={styles["search-input"]}
              type="text"
              placeholder="Search"
            />
            {/* </label> */}
            <input
              className={styles["search-submit"]}
              type="image"
              src={submitButton}
              alt="Submit"
            />
          </form>
          <ShoppingBag />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps)(MenuBar);
