import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  // Handle Menu Click
  const handleClick = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };
  return (
    <div className="bg-green-700 text-gray-100 sm:flex justify-between hidden md:hidden">
      {/* <!-- logo --> */}
      <Link
        to="/"
        className="block p-4 text-yellow-300 font-bold text-xl sm:text-2xl font-serif no-underline"
      >
        AC AUTO BUYERS{" "}
        <i className="fas fa-recycle text-3xl pl-1 text-white animate-spin"></i>
      </Link>

      {/* <!-- mobile menu button --> */}
      <button
        id="mobile-menu"
        onClick={handleClick}
        className=" p-4 focus:outline-none focus:bg-green-800"
      >
        <i className="fas fa-bars text-3xl"></i>
      </button>
    </div>
  );
};

export default MobileMenu;
