import React, { Component } from "react";
import shoppingBagImg from "../../img/shoppingbagWhite.png";
import styles from "../css/ShoppingBag.module.scss";
class ShoppingBag extends Component {
  render() {
    return (
      <div className={styles.cart}>
        <img className={styles.img} src={shoppingBagImg} alt="shoppingbag" />
        <a className={styles["shopping-cart-num"]}>
          0
          <div className={styles["shoppingcart-dropdown"]}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </a>
      </div>
    );
  }
}

export default ShoppingBag;
