import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HoverMenu from "./HoverMenu";
import { connect } from "react-redux";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light row ">
        <div className="col-xs-12 col-md-1 dropdown" to="/">
          HOME
        </div>
        <div className="col-xs-12 col-md-1 dropdown position-static">
          <span onMouseOver={this.toggleMenu} title="NEW">
            NEW
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className="col-xs-12 col-md-1 dropdown">
          <span onMouseOver={this.toggleMenu} title="WOMEN">
            WOMEN
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className="col-xs-12 col-md-1 dropdown">
          <span onMouseOver={this.toggleMenu} title="MEN">
            MEN
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className="col-xs-12 col-md-1 dropdown" to="/kids">
          <span onMouseOver={this.toggleMenu} title="KIDS">
            KIDS
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className="col-xs-12 col-md-1 dropdown" to="/baby">
          <span onMouseOver={this.toggleMenu} title="BABY">
            BABY
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className="col-xs-12 col-md-1 dropdown" to="/">
          <span onMouseOver={this.toggleMenu} title="ABOUT">
            ABOUT
          </span>
          {this.props.menu[this.state.menu] ? (
            <HoverMenu menuNames={this.props.menu[this.state.menu]} />
          ) : null}
        </div>
        <div className="col-xs-12 col-md-5" to="/">
          SEARCH BUTTON
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
