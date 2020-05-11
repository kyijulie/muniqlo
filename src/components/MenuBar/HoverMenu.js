import React, { Component } from "react";
// import { Link } from "react-router-dom";

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
        className="dropdown-content mt-0 w-100 shadow border-outline-success"
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
