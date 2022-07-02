import React from "react";

const ForgetPassword = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center px-2">
      <div className="login-form w-full md:w-1/3 my-8  px-auto">
        <form>
          <input
            className="w-full mb-6 outline-none border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <button className=" py-4 mb-6 w-full bg-primary rounded-md text-xl text-base-100">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
