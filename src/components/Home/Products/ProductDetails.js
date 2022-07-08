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
  const [newQuantity, setNewQuantity] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://whispering-lake-78761.herokuapp.com/product/${id}`)
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
      quantity: newQuantity,
    };
    fetch("https://whispering-lake-78761.herokuapp.com/order", {
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
  const handlePlusQuantity = () => {
    if (newQuantity < 6) {
      setNewQuantity(newQuantity + 1);
    }
  };
  const handleMinusQuantity = () => {
    if (newQuantity > 0) {
      setNewQuantity(newQuantity - 1);
    }
  };
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
        <div className="total-price flex justify-start">
          <span className="text-xl font-semibold mb-6 inline-block">
            ${price * newQuantity}
          </span>

          <div className="setQuantity  p-2 ml-4 rounded-2xl border w-20 h-8 flex items-center justify-between">
            <button
              className={`plus text-primary ${
                newQuantity === 5 && "text-gray-400"
              }`}
              disabled={newQuantity === 5}
              onClick={handlePlusQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className="text-sm">{newQuantity}</span>
            <button
              className={`minus text-primary ${
                newQuantity === 1 && "text-gray-400"
              }`}
              disabled={newQuantity === 1}
              onClick={handleMinusQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
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
