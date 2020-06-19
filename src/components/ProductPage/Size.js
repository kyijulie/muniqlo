import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../css/Product.module.scss";
import cx from "classnames";

class Size extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "",
      selectedSize: "",
      activeSize: "",
    };
  }
  setSize = (e, size) => {
    this.setState({
      selectedColor: this.props.color,
      selectedSize: size,
    });
    if (this.state.activeSize !== "") {
      let elementRemove = document.getElementById(this.state.activeSize);
      elementRemove.classList.remove(style["active-size"]);
    }
    let elementAdd = document.getElementById(e.currentTarget.dataset.id);
    elementAdd.classList.add(style["active-size"]);
    this.setState({
      activeSize: e.currentTarget.dataset.id,
    });
  };
  checkOutStock = (amount, size) => {
    if (amount === 0) {
      return (
        <div
          className={cx(style["size-link"], style["out-stock"])}
          id={size}
          data-id={size}
        >
          <a>{size}</a>
        </div>
      );
    } else {
      return (
        <div
          className={style["size-link"]}
          id={size}
          data-id={size}
          onClick={(e) => this.setSize(e, size)}
        >
          <a>{size}</a>
        </div>
      );
    }
  };
  render() {
    if (this.props.sizes) {
      const { sizes } = this.props;
      return (
        <div className={style["size-container"]}>
          <div className={style["size-title"]}>Size:</div>
          <ul className={style["size-list"]}>
            <li key="xx-small">
              {this.checkOutStock(sizes["xx-small"], "XXS")}
            </li>
            <li key="x-small">{this.checkOutStock(sizes["x-small"], "XS")}</li>
            <li key="small">{this.checkOutStock(sizes["small"], "S")}</li>
            <li key="medium">{this.checkOutStock(sizes["medium"], "M")}</li>
            <li key="large">{this.checkOutStock(sizes["large"], "L")}</li>
            <li key="x-large">{this.checkOutStock(sizes["x-large"], "XL")}</li>
            <li key="xx-large">
              {this.checkOutStock(sizes["xx-large"], "XXL")}
            </li>
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = (state) => {
  return { sizes: state.color.sizes, color: state.color.color };
};

export default connect(mapStateToProps)(Size);
