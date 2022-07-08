import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../shared/Spinner";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://whispering-lake-78761.herokuapp.com/orders?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setSpinner(false);
      });
  }, [user]);
  if (spinner || loading) {
    return <Spinner />;
  }

  if (orders) {
    const totalPrice = orders.reduce((total, order) => total + order?.price, 0);
    setTotalCost(totalPrice);
    console.log(totalPrice);
  }
  return (
    <div className=" flex flex-col justify-center items-center px-2">
      <h2 className="text-4xl"> Your Total Orders:{orders?.length}</h2>
      <div className="p-4 my-6 flex flex-col items-center ">
        {orders?.map((order) => (
          <Order order={order} key={order._id} />
        ))}
        <button className="btn btn-primary mt-2">CheckOut</button>
      </div>
    </div>
  );
};

export default Orders;
