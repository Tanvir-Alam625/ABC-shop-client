import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ActiveStyle.css";
const Products = ({ products }) => {
  const [productsCategory, setProductsCategory] = useState("dinner");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const lunch = products.filter((p) => p.category === "dinner");
    setFilteredProduct(lunch);
  }, [products]);
  const getProducts = (productCategory) => {
    const lunchProducts = products.filter(
      (p) => p.category === productCategory
    );
    setProductsCategory(productCategory);
    setFilteredProduct(lunchProducts);
  };
  console.log(filteredProduct, productsCategory);

  return (
    <div className="max-w-[1100px] mx-auto px-2 md:my-16 my-8">
      <div className="product-header my-8 flex justify-around">
        <button
          className={`font-semibold hover:active text-xl text-neutral ${
            productsCategory === "lunch" && "active"
          }`}
          onClick={() => getProducts("lunch")}
        >
          Lunch
        </button>
        <button
          className={`font-semibold hover:active text-xl text-neutral ${
            productsCategory === "dinner" && "active"
          }`}
          onClick={() => getProducts("dinner")}
        >
          Dinner
        </button>
        <button
          className={`font-semibold hover:active text-xl text-neutral ${
            productsCategory === "breakfast" && "active"
          }`}
          onClick={() => getProducts("breakfast")}
        >
          Breakfast
        </button>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProduct?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
