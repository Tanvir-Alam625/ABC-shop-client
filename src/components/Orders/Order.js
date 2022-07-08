import React from "react";

const Order = ({ order }) => {
  return (
    <div className="flex w-full  md:w-1/3 border shadow-md rounded-xl  my-2 p-2">
      <div className="order-name w-[70%]">
        <h2 className="text-xl font-semibold">{order.name}</h2>
        <p className="font-semibold">Price:${order.price}</p>
      </div>
      <div className="order img w-[30%]">
        <img src={order.img} alt="order-img" />
      </div>
    </div>
  );
};

export default Order;
