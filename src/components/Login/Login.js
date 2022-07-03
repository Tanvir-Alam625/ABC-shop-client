import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../images/logo2.png";
import BannerImage from "../../images/bannerbackground.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading || loadingGoogle) {
    return <h2>Loading</h2>;
  }
  if (user || userGoogle) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
      }}
      className="min-h-screen   flex justify-center items-center px-2"
    >
      <div className="login-form w-full bg-[#FCF4E0] lg:bg-transparent p-2  md:w-1/3 my-8  px-auto">
        <div className="logo-container  py-16 flex justify-center">
          <img src={Logo} alt="logo-img" className=" w-[250px]" />
        </div>
        <form onSubmit={handleSubmit}>
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
          <span className="text-red-500 text-sm my-4 md:my-8 md:text-xl ">
            {error?.message}
            {errorGoogle?.message}
          </span>
          <button className=" py-4 mb-6 w-full bg-primary rounded-md text-xl text-base-100">
            Login
          </button>
        </form>
        <div className="links flex justify-between items-center mb-8">
          <Link to="/forgetPassword" className="text-sm hover:text-primary">
            Forget Password?
          </Link>
          <Link to="/signup" className="text-primary text-xl">
            SignUp
          </Link>
        </div>
        <div className="login-with-social ">
          <button
            onClick={() => signInWithGoogle()}
            className=" hover:text-primary shadow-md text-sm md:text-xl w-full py-4 px-2 border rounded-md "
          >
            Login in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
