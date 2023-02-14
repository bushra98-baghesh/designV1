import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart, BsHeart } from "react-icons/bs";
import "./Navbar.module.css";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const logo = (
    <Link to="/">
      <h2 className="text-2xl font-bold text-white">LOGO</h2>
    </Link>
  );
  const cart = (
    <Link
      to="/cart"
      class="relative  inline-flex mx-1 mb-2  cursor-pointer md:inline-block"
    >
      <div class="t-0 absolute left-6">
        <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
          0
        </p>
      </div>
      <BsCart size={22} className="mt-3 ml-2 " />
    </Link>
  );
  const likes = (
    <Link
      to="/cart"
      class="relative  inline-flex mx-6 mb-2  cursor-pointer md:inline-block"
    >
      <div class="t-0 absolute left-8">
        <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
          0
        </p>
      </div>
      <BsHeart size={22} className="mt-3 ml-4 " />
    </Link>
  );
  return (
    <nav className="fixed w-full shadow-lg bg-slate-500/50 duration-500 backdrop-blur-md z-[999] ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {logo}

            <div className="md:hidden ">
              {cart}
              {likes}
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/orders">My Orders</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/products">Products</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/about">About</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Link
                to="/login"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-800 rounded-md shadow hover:bg-gray-600"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-flex items-center ">
          <Link
            to="/login"
            className="px-4 py-2 text-white bg-gray-800 rounded-md shadow hover:bg-gray-600"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </Link>
          {cart}
          {likes}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
