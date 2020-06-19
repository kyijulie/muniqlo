import React, { Component } from "react";
import shoppingBagImg from "../../img/shoppingbagWhite.png";
import styles from "../css/ShoppingBag.module.scss";

class ShoppingBag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["one"],
    };
    this.toggleShoppingCart = this.toggleShoppingCart.bind(this);
  }
  toggleShoppingCart() {
    if (this.state.items.length > 0) {
      return this.state.items.map((item, i) => {
        return (
          <li key={`shopping-cart-` + i}>
            <a href="#link1">Link 1</a>
          </li>
        );
      });
    } else {
      return <div> Your Bag is Empty.</div>;
    }
  }
  render() {
    return (
      <div className={styles.cart}>
        <img className={styles.img} src={shoppingBagImg} alt="shoppingbag" />
        <div className={styles["shopping-cart-num"]}>101</div>
        <div className={styles["shoppingcart-dropdown"]}>
          <ul className={styles["shoppingcart-list"]}>
            {this.toggleShoppingCart()}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingBag;
