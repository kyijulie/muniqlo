import React, { Component } from "react";
import styles from "../css/Nav.module.scss";

class HoverMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNames: {},
      emptyDropdown: [],
      menuNamesTitle: [],
    };
  }
  dropdownList = () => {
    let menus = this.props.menuNames;
    let menuNames;
    if (menus) {
      menuNames = Object.keys(this.props.menuNames);
    }
    return (
      menuNames &&
      menuNames.map((title) => {
        if (menus[title].length > 0) {
          return (
            <ul title={title} className={styles["dropdown-array"]}>
              {menus[title].map((content) => {
                return <li>{content}</li>;
              })}
            </ul>
          );
        } else {
          return (
            <ul className={styles["dropdown-empty-array"]} id="myDropDown">
              <li>{title}</li>
            </ul>
          );
        }
      })
    );
  };

  render() {
    return (
      <div className={styles["dropdown-content"]}>{this.dropdownList()}</div>
    );
  }
}

export default HoverMenu;
