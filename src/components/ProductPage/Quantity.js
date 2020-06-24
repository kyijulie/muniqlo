import React, { useState } from "react";
import { connect } from "react-redux";
import { getQuantity } from "../../store/actions/productActions";

const Quantity = ({ getQuantity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let quantity = document.getElementById("quantity").value;
    getQuantity(quantity);
  };
  return (
    <form onChange={(e) => handleSubmit(e)}>
      <label for="quantity">Quantity:</label>
      <select name="quantity" id="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </form>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     color: state.color.color,
//     size: state.color.size,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    getQuantity: (quantity) => dispatch(getQuantity(quantity)),
  };
};

export default connect(null, mapDispatchToProps)(Quantity);
