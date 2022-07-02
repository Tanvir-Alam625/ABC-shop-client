import React from "react";

const Product = ({ product }) => {
  const { name, img, price, description, quantity } = product;
  return (
    <div className="p-6 hover:shadow-2xl cursor-pointer rounded-lg flex flex-col justify-center items-center">
      <div className="product-image mb-6">
        <img src={img} alt="product-img" />
      </div>
      <h3 className="text-xl text-neutral text-center mb-2">{name}</h3>
      <p className="text-sm text-accent text-center mb-2">{description}</p>
      <span className="font-semibold text-2xl  text-center">${price}</span>
    </div>
  );
};

export default Product;
