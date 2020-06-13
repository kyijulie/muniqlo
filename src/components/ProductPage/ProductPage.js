import React from "react";
import Product from "./Product";
import Comment from "./Comment";

const ProductPage = (props) => {
  return (
    <div>
      <Product clothesId={props.clothesId} />
      <Comment clothesId={props.clothesId} />
    </div>
  );
};

export default ProductPage;
