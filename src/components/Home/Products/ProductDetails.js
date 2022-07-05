import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../shared/Spinner";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [spinner, setSpinner] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSpinner(false);
      });
  }, [id]);
  const { name, price, img, quantity } = product;
  const handleOrder = () => {
    const email = user?.email;
    const order = {
      email: email,
      name: name,
      price: price,
      img: img,
      quantity: quantity,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate("/orders");
      });
  };
  if ((spinner, loading)) {
    return <Spinner />;
  }
  console.log(product);
  return (
    <div className="max-w-[1100px] mx-auto my-12 px-2 flex flex-col-reverse lg:flex-row justify-between ">
      <div className="product-details">
        <h2 className="lg:text-2xl text-xl font-semibold  my-4">{name}</h2>
        <p className="my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          pariatur ex blanditiis, accusantium exercitationem sequi ipsam ad
          laudantium, est voluptatum neque facilis voluptatem! Nostrum natus,
          nisi libero ipsum quidem ex?
        </p>
        <span className="text-xl font-semibold mb-6 inline-block">
          ${price}
        </span>
        <button onClick={handleOrder} className="btn btn-primary block">
          Add To Cart
        </button>
      </div>
      <div className="product-img">
        <img src={img} alt="product-img" />
      </div>
    </div>
  );
};

export default ProductDetails;
