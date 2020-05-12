import React, { Component } from "react";
import styles from "../css/Nav.module.scss";

class HoverMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNames: {},
    };
  }
  // componentDidMount() {
  //   this.setState({
  //     menuNames: this.props.menuNames,
  //   });
  // }
  render() {
    const menus = Object.keys(this.props.menuNames);
    return (
      <div
        className={styles["dropdown-content"]}
        aria-labelledby="navbarDropdown"
      >
        {menus &&
          menus.map((menu) => {
            return <a href="#">{menu}</a>;
          })}
      </div>
    );
  }
}

export default HoverMenu;
