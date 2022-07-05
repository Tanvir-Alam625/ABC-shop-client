import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../shared/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/orders?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setSpinner(false);
      });
  }, [user]);
  if (spinner || loading) {
    return <Spinner />;
  }
  console.log(user);
  return (
    <div className=" flex flex-col justify-center items-center px-2">
      <h2 className="text-4xl">{orders?.length}</h2>
      <div className="flex w-full  md:w-1/3 border shadow-md rounded-xl ">
        <div className="order-name w-[70%]">
          <h2 className="text-xl font-semibold">name</h2>
          <p className="font-semibold">Price</p>
        </div>
        <div className="order img w-[30%]">
          <img src="" alt="order-img" />
        </div>
      </div>
    </div>
  );
};

export default Orders;
