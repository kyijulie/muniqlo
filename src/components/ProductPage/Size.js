import React from "react";
import { connect } from "react-redux";
import style from "../css/Product.module.scss";
import cx from "classnames";
import { getSize } from "../../store/actions/productActions";

const Size = (props) => {
  const setSize = (e, size) => {
    if (props.size !== "") {
      let elementRemove = document.getElementById(props.size);
      elementRemove.classList.remove(style["active-size"]);
    }
    let elementAdd = document.getElementById(e.currentTarget.dataset.id);
    elementAdd.classList.add(style["active-size"]);

    props.getSize(size);
  };
  const checkOutStock = (amount, size) => {
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
      if (props.size === "") {
        let elementRemove = document.getElementById(size);
        if (elementRemove) {
          elementRemove.classList.remove(style["active-size"]);
        }
      }
      return (
        <div
          className={style["size-link"]}
          id={size}
          data-id={size}
          onClick={(e) => setSize(e, size)}
        >
          <a>{size}</a>
        </div>
      );
    }
  };

  if (props.sizes) {
    const { sizes } = props;
    return (
      <div className={style["size-container"]}>
        <div className={style["size-title"]}>Size:</div>
        <ul className={style["size-list"]}>
          <li key="xx-small">{checkOutStock(sizes["xx-small"], "XXS")}</li>
          <li key="x-small">{checkOutStock(sizes["x-small"], "XS")}</li>
          <li key="small">{checkOutStock(sizes["small"], "S")}</li>
          <li key="medium">{checkOutStock(sizes["medium"], "M")}</li>
          <li key="large">{checkOutStock(sizes["large"], "L")}</li>
          <li key="x-large">{checkOutStock(sizes["x-large"], "XL")}</li>
          <li key="xx-large">{checkOutStock(sizes["xx-large"], "XXL")}</li>
        </ul>
      </div>
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = (state) => {
  return {
    sizes: state.product.sizes,
    color: state.product.color,
    size: state.product.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSize: (size) => dispatch(getSize(size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Size);
