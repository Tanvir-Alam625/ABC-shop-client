import React, { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import About from "./About";
import Banner from "./Banner";
import Products from "./Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpinner(false);
      });
  }, []);
  if (spinner) {
    return <Spinner />;
  }
  return (
    <>
      <Banner />
      <Products products={products} />
      <About />
    </>
  );
};

export default Home;
