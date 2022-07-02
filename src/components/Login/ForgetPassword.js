import { async } from "@firebase/util";
import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import BannerImage from "../../images/bannerbackground.png";
const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  if (sending) {
    return <h2>Sending Email</h2>;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    alert("Reset Password verification Send!");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
      }}
      className="min-h-screen  flex justify-center items-center px-2"
    >
      <div className="login-form bg-[#FCF4E0] lg:bg-transparent p-2 w-full md:w-1/3 my-8  px-auto">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-6 outline-none border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <span className="text-red-500 text-sm my-4 md:my-8 md:text-xl ">
            {error?.message}
          </span>
          <button
            type="submit"
            className=" py-4 mb-6 w-full bg-primary rounded-md text-xl text-base-100"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
