import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Product.module.scss";
const Colors = (props) => {
  if (props.colors) {
    const { colors } = props;
    let colorsArray = Object.keys(colors);
    // return <ul></ul>;
    return (
      <ul className={style["color-list"]}>
        {colorsArray &&
          colorsArray.map((color, i) => {
            return (
              <li className={style["color-selection"]}>
                <a href="#">
                  <img src={colors[color].preview} />
                </a>
              </li>
            );
          })}
      </ul>
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = (state) => {
  const colors = state.firestore.data.colors;
  return {
    colors,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "colors",
      doc: props.clothesId,
      subcollections: [{ collection: "color" }],
      storeAs: "colors",
    },
  ])
)(Colors);
