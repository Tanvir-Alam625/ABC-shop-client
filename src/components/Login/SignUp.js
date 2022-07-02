import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo2.png";
import BannerImage from "../../images/bannerbackground.png";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SignUp = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  if (loading || loadingGoogle) {
    return <h2>Loading...</h2>;
  }
  if (user || userGoogle) navigate("/");
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const userData = { name, email };
    if (password === confirmPassword) {
      setErrorMessage("");
      createUserWithEmailAndPassword(email, password);
    } else {
      setErrorMessage("Your Password Not Match!");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
      }}
      className="min-h-screen  flex justify-center items-center px-2"
    >
      <div className="login-form w-full bg-[#FCF4E0] lg:bg-transparent p-2 md:w-1/3 my-8  px-auto">
        <div className="logo-container  py-16 flex justify-center">
          <img src={Logo} alt="logo-img" className=" w-[250px]" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full outline-none mb-6 border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="text"
            name="name"
            autoComplete="of"
            required
            placeholder="Name"
          />
          <input
            className="w-full outline-none mb-6 border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="email"
            name="email"
            required
            autoComplete="of"
            placeholder="Email"
          />
          <input
            className="w-full mb-6 outline-none border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="password"
            name="password"
            autoComplete="of"
            required
            minLength={7}
            placeholder="Password"
          />
          <input
            className="w-full mb-6 outline-none border rounded-md bg-gray-100 text-primary py-4 px-2"
            type="password"
            name="confirmPassword"
            autoComplete="of"
            required
            placeholder="Confirm Password"
          />
          <span className="text-red-500 text-sm my-4 md:my-8 md:text-xl ">
            {errorMessage}
            {error?.message}
          </span>
          <button className=" py-4 mb-6 w-full bg-primary rounded-md text-xl text-base-100">
            SignUp
          </button>
        </form>
        <div className="links flex justify-center items-center mb-8">
          <Link to="/login" className="text-primary text-xl">
            Already have an account
          </Link>
        </div>
        <div className="login-with-social ">
          <button
            onClick={() => signInWithGoogle()}
            className=" shadow-md hover:text-primary text-sm md:text-xl w-full py-4 px-2 border rounded-md "
          >
            SingUp in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
