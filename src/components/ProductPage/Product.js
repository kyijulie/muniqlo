import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import style from "../css/Product.module.scss";
import cx from "classnames";
import Size from "./Size";
import Colors from "./Colors";
import Quantity from "./Quantity";
import AddToBag from "./AddToBag";

const Product = (props) => {
  const { clothes } = props;
  if (clothes) {
    return (
      <div className={style["product-container"]}>
        <section className={cx(style["col"], style["main"])}>
          <h2>The Main Content Area</h2>
          <p>
            In CSS, it has a flex property of 3, meaning it takes up 3 units
            (whatever that might be) of the available space.
          </p>
          <p>
            This means, in total we have 4 units of space (1 + 3 = 4) which then
            renders the sidebar at 25% and the main content area as 75%
          </p>
        </section>
        <aside className={cx(style["col"], style["sidebar"])}>
          <h2>{clothes.title}</h2>
          <p>stars 49 reviews</p>
          <p className={style.price}>$ {clothes.price}</p>
          <Colors clothesId={props.clothesId} />
          <Size />
          <Quantity />
          <AddToBag title={clothes.title} clothesId={props.clothesId} />
          <div>
            <p>product detail</p>
            <p>materials and care</p>
          </div>
        </aside>
      </div>
    );
  } else {
    return <div>Product not found</div>;
  }
};

const mapStateToProps = (state) => {
  const clothes = state.firestore.data.clothes;
  return {
    clothes,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "clothes",
      doc: props.clothesId,
      storeAs: "clothes",
    },
  ])
)(Product);
