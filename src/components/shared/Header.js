import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../../images/logo2.png";
import CustomLink from "./CustomLink";
const Header = () => {
  const links = (
    <>
      <li>
        <CustomLink
          className="hover:text-primary ease-in-out duration-300 "
          to="/"
        >
          Home
        </CustomLink>
      </li>

      <li>
        <CustomLink
          className="hover:text-primary ease-in-out duration-300 "
          to="/login"
        >
          Login
        </CustomLink>
      </li>
      <li>
        <CustomLink
          className="hover:text-primary ease-in-out duration-300 "
          to="/orders"
          title="Order"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </CustomLink>
      </li>
      <div className="signup-btn">
        <Link
          className="text-base-100 bg-primary  font-normal my-0 py-1 px-4 rounded-3xl hover:bg-red-400  "
          to="/login"
        >
          SignUp
        </Link>
      </div>
    </>
  );
  return (
    <header className="max-w-[1100px] mx-auto py-0">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            <img src={NavLogo} className="h-[100%]" alt="nav-logo" />
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex ">
          <ul class="menu menu-horizontal p-0 items-center justify-center font-semibold">
            {links}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
