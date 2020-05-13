import React, { Component } from "react";
import shoppingBagImg from "../../img/shoppingbagWhite.png";
import styles from "../css/ShoppingBag.module.scss";
class ShoppingBag extends Component {
  render() {
    return (
      <div className={styles.cart}>
        <img className={styles.img} src={shoppingBagImg} alt="shoppingbag" />
        <div className={styles.shoppingCartNum}>0</div>
      </div>
    );
  }
}

export default ShoppingBag;
