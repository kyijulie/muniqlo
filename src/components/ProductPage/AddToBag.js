import React from "react";
import { connect } from "react-redux";
import style from "../css/Product.module.scss";
import { addToBag } from "../../store/actions/shoppingBagActions";
import styles from "../css/ShoppingBag.module.scss";

const AddToBag = ({ color, size, quantity, title, clothesId, addToBag }) => {
  let intervalIsGoingOn = false;
  const handleClick = (e) => {
    console.log("handleclick here", color, size, quantity, title, clothesId);
    addToBag(title, color, size, quantity, clothesId);
    let addHover = document.getElementById("shoppingcart-dropdown");
    addHover.classList.add(styles["hover"]);
    if (intervalIsGoingOn) return;
    intervalIsGoingOn = true;
    setTimeout(function () {
      let removeHover = document.getElementById("shoppingcart-dropdown");
      removeHover.classList.remove(styles["hover"]);
      intervalIsGoingOn = false;
    }, 5000);
  };
  if (size === "") {
    return (
      <input
        className={style["product-submit"]}
        type="button"
        value="Add To Bag"
        disabled
      />
    );
  } else {
    return (
      <input
        className={style["product-submit"]}
        type="button"
        value="Add To Bag"
        onClick={handleClick}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    color: state.product.color,
    size: state.product.size,
    quantity: state.product.quantity,
  };
};

const mapDispatchToProps = {
  addToBag,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToBag);
