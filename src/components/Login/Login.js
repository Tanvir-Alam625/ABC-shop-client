import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo2.png";

const Login = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center px-2">
      <div className="login-form w-full md:w-1/3 my-8  px-auto">
        <div className="logo-container  py-16 flex justify-center">
          <img src={Logo} alt="logo-img" className=" w-[250px]" />
        </div>
        <form>
          <input
            className="w-full outline-none mb-6 border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="email"
            name="email"
            autoComplete="of"
            placeholder="Email"
          />
          <input
            className="w-full mb-6 outline-none border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="password"
            name="password"
            autoComplete="of"
            placeholder="Password"
          />
          <button className=" py-4 mb-6 w-full bg-primary rounded-md text-xl text-base-100">
            Login
          </button>
        </form>
        <div className="links flex justify-between items-center">
          <Link to="/forgetPassword" className="text-sm hover:text-primary">
            Forget Password?
          </Link>
          <Link to="/signup" className="text-primary text-xl">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
