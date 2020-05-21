import React, { Component } from "react";
import styles from "../css/Nav.module.scss";

class HoverMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNames: {},
    };
  }
  render() {
    let menus;
    if (this.props.menuNames) {
      menus = Object.keys(this.props.menuNames);
    }
    return (
      <div className={styles["dropdown-content"]} id="myDropDown">
        {menus &&
          menus.map((menu) => {
            return <a href="#">{menu}</a>;
          })}
      </div>
    );
  }
}

export default HoverMenu;
