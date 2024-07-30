import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.photoName} alt={product.name} />
      <h2>{product.name}</h2>
      <p>RAM: {product.ram}</p>
      <p>Price: {product.price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Product;
