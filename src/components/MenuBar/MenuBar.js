import React, { Component } from "react";
import HoverMenu from "./HoverMenu";
import { connect } from "react-redux";
import styles from "../css/Nav.module.scss";
import submitButton from "../../img/submitButton.png";
import ShoppingBag from "./ShoppingBag";
import uniqloLogo from "../../img/uniqloHome.png";
class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      subMenu: ["HOME", "NEW", "WOMEN", "MEN", "KIDS", "BABY", "ABOUT"],
    };
  }
  toggleMenu = (e) => {
    this.setState({
      menu: e.target.title,
    });
  };
  renderSubMenu = () => {
    if (this.state.subMenu.length > 0) {
      return this.state.subMenu.map((sub) => {
        return (
          <li
            className={styles.dropdown}
            onMouseEnter={this.toggleMenu}
            title={sub}
            key={sub}
          >
            {sub === "HOME" ? (
              <img
                src={uniqloLogo}
                alt="uniqloLogo"
                height="100px"
                width="100px"
              />
            ) : (
              sub
            )}
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <div className={styles.menubar}>
          <ul>
            {this.renderSubMenu()}{" "}
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          </ul>
          <ul>
            <li className={styles["dropdown-right"]}>
              <form className={styles["search-form"]}>
                <input
                  className={styles["search-input"]}
                  type="text"
                  placeholder="Search"
                />
                <input
                  className={styles["search-submit"]}
                  type="image"
                  src={submitButton}
                  alt="Submit"
                />
              </form>
            </li>
            <ShoppingBag />
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps)(MenuBar);
