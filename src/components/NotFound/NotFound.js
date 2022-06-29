import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl text-primary font-extrabold">Oops! 404</h1>
      <h2 className="my-6 text-2xl text-primary font-semibold">
        This Page is Not Found
      </h2>
      <Link to="/" className="btn btn-primary text-base-100">
        Please Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
