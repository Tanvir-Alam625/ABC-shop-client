import React from "react";

const CheckOut = ({ totalCost }) => {
  console.log(totalCost);
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 py-4 px-2 flex justify-center items-center ">
      <div className="checkout-modal  my-12 full md:w1/3">
        <h3>checkout</h3>
      </div>
    </div>
  );
};

export default CheckOut;
