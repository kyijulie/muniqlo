import React from "react";
import shoppingBagImg from "../../img/shoppingbagWhite.png";
import styles from "../css/ShoppingBag.module.scss";
import { connect } from "react-redux";

const ShoppingBag = ({ items }) => {
  const showShoppingCart = () => {
    let addHover = document.getElementById("shoppingcart-dropdown");
    addHover.classList.add(styles["hover"]);
  };
  const removeShoppingCart = () => {
    let removeHover = document.getElementById("shoppingcart-dropdown");
    removeHover.classList.remove(styles["hover"]);
  };
  const shoppingCartContent = () => {
    if (items.length > 0) {
      return items.map((item, i) => {
        return (
          <li key={`shopping-cart-` + i}>
            <a href="#link1">{item.title}</a>
          </li>
        );
      });
    } else {
      return <div> Your Bag is Empty.</div>;
    }
  };

  return (
    <div
      className={styles.cart}
      onMouseOver={showShoppingCart}
      onMouseLeave={removeShoppingCart}
    >
      <img className={styles.img} src={shoppingBagImg} alt="shoppingbag" />
      <div className={styles["shopping-cart-num"]}>101</div>
      <div
        className={styles["shoppingcart-dropdown"]}
        id="shoppingcart-dropdown"
      >
        <ul className={styles["shoppingcart-list"]}>{shoppingCartContent()}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.shoppingbag.items,
  };
};

export default connect(mapStateToProps)(ShoppingBag);
