import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Product = (props) => {
  return <div>Product</div>;
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
