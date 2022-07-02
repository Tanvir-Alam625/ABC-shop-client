import React, { useEffect, useState } from "react";
import "./ActiveStyle.css";
const Products = () => {
  const [lunchProducts, setLunchProducts] = useState([]);
  const [showProducts, setShowProducts] = useState("lunch");

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => {
        if (showProducts === "lunch") {
          setLunchProducts(
            data.filter((product) => product.category === "lunch")
          );
        }
        if (showProducts === "dinner") {
          setLunchProducts(
            data.filter((product) => product.category === "dinner")
          );
        }
        if (showProducts === "breakfast") {
          setLunchProducts(
            data.filter((product) => product.category === "breakfast")
          );
        }
      });
  }, [showProducts]);

  return (
    <div className="max-w-[1100px] mx-auto px-2 my-12">
      <div className="product-header my-8 flex justify-around">
        <button
          className={`font-semibold text-xl text-neutral ${
            showProducts === "lunch" && "active"
          }`}
          onClick={() => setShowProducts("lunch")}
        >
          Lunch
        </button>
        <button
          className={`font-semibold text-xl text-neutral ${
            showProducts === "dinner" && "active"
          }`}
          onClick={() => setShowProducts("dinner")}
        >
          Dinner
        </button>
        <button
          className={`font-semibold text-xl text-neutral ${
            showProducts === "breakfast" && "active"
          }`}
          onClick={() => setShowProducts("breakfast")}
        >
          Breakfast
        </button>
      </div>
      <div className="products"></div>
    </div>
  );
};

export default Products;
