import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Product.module.scss";
import cx from "classnames";
import { changeColorSize } from "../../store/actions/colorActions";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      active: "",
    };
    this.makeActive = this.makeActive.bind(this);
    this.makeFirstItemActive = this.makeFirstItemActive.bind(this);
  }
  makeActive(e, colors) {
    let elementRemove = document.getElementById(this.state.active);
    elementRemove.classList.remove(style["active-color"]);
    let elementAdd = document.getElementById(e.currentTarget.dataset.id);

    elementAdd.classList.add(style["active-color"]);
    this.setState({
      active: e.currentTarget.dataset.id,
    });
    this.props.changeColorSize(
      colors[e.currentTarget.dataset.id],
      e.currentTarget.dataset.id
    );
  }
  makeFirstItemActive(colors, colorsArray) {
    if (this.state.active === "") {
      this.setState({
        active: colorsArray[0],
      });
      this.props.changeColorSize(colors[colorsArray[0]], colorsArray[0]);
      return colorsArray[0];
    } else {
      return this.state.active;
    }
  }
  render() {
    if (this.props.colors) {
      const { colors } = this.props;
      let colorsArray = Object.keys(colors);
      return (
        <div className={style["color-container"]}>
          <div className={style["show-color"]}>
            Color: <p>{this.makeFirstItemActive(colors, colorsArray)}</p>
          </div>

          <ul className={style["color-list"]}>
            {colorsArray &&
              colorsArray.map((color, i) => {
                let activeColor;
                if (i === 0) {
                  activeColor = style["active-color"];
                } else {
                  activeColor = null;
                }
                return (
                  <li
                    className={cx(style["color-selection"], activeColor)}
                    onClick={(e) => this.makeActive(e, colors)}
                    id={color}
                    data-id={color}
                    key={i}
                  >
                    <a></a>
                    <img src={colors[color].preview} />
                  </li>
                );
              })}
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = (state) => {
  const colors = state.firestore.data.colors;
  return {
    colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeColorSize: (size, color) => dispatch(changeColorSize(size, color)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    {
      collection: "colors",
      doc: props.clothesId,
      subcollections: [{ collection: "color" }],
      storeAs: "colors",
    },
  ])
)(Colors);
