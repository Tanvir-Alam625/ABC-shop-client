import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ActiveStyle.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState("dinner");

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => {
        if (showProducts === "lunch") {
          setProducts(data.filter((product) => product.category === "lunch"));
        }
        if (showProducts === "dinner") {
          setProducts(data.filter((product) => product.category === "dinner"));
        }
        if (showProducts === "breakfast") {
          setProducts(
            data.filter((product) => product.category === "breakfast")
          );
        }
      });
  }, [showProducts]);

  return (
    <div className="max-w-[1100px] mx-auto px-2 md:my-16 my-8">
      <div className="product-header my-8 flex justify-around">
        <button
          className={`font-semibold hover:active text-xl text-neutral ${
            showProducts === "lunch" && "active"
          }`}
          onClick={() => setShowProducts("lunch")}
        >
          Lunch
        </button>
        <button
          className={`font-semibold hover:active text-xl text-neutral ${
            showProducts === "dinner" && "active"
          }`}
          onClick={() => setShowProducts("dinner")}
        >
          Dinner
        </button>
        <button
          className={`font-semibold hover:active text-xl text-neutral ${
            showProducts === "breakfast" && "active"
          }`}
          onClick={() => setShowProducts("breakfast")}
        >
          Breakfast
        </button>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
