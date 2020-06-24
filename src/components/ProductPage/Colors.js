import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Product.module.scss";
import cx from "classnames";
import { changeColorSize } from "../../store/actions/productActions";

const Colors = ({ colors, changeColorSize }) => {
  const [active, setActive] = useState("");
  const makeActive = (e, colors) => {
    let elementRemove = document.getElementById(active);
    elementRemove.classList.remove(style["active-color"]);
    let elementAdd = document.getElementById(e.currentTarget.dataset.id);

    elementAdd.classList.add(style["active-color"]);
    setActive(e.currentTarget.dataset.id);
    changeColorSize(
      colors[e.currentTarget.dataset.id],
      e.currentTarget.dataset.id,
      ""
    );
  };
  const makeFirstItemActive = (colors, colorsArray) => {
    if (active === "") {
      setActive(colorsArray[0]);
      changeColorSize(colors[colorsArray[0]], colorsArray[0], "");
      return colorsArray[0];
    } else {
      return active;
    }
  };
  if (colors) {
    let colorsArray = Object.keys(colors);
    return (
      <div className={style["color-container"]}>
        <div className={style["show-color"]}>
          Color: <p>{makeFirstItemActive(colors, colorsArray)}</p>
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
                  onClick={(e) => makeActive(e, colors)}
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
};

const mapStateToProps = (state) => {
  const colors = state.firestore.data.colors;
  return {
    colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeColorSize: (sizes, color, size) =>
      dispatch(changeColorSize(sizes, color, size)),
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
