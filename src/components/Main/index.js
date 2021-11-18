import React from "react";
import Content from "../Content";
import Banner from "../Banner";
import Footer from "../Footer";

function Main() {
  const handleClick = () => {
    // Handle Menu Click
    const btn = document.querySelector(".mobile-menu");
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };

  return (
    <>
    <Banner/>
      <div className=" md:flex">
        {/* <!-- mobile menu bar --> */}
        <div className="bg-green-700 text-gray-100 flex justify-between md:hidden">
          {/* <!-- logo --> */}
          <a
            href="#"
            className="block p-4 text-yellow-300 font-bold text-2xl font-serif no-underline"
          >
            AC AUTO BUYERS{" "}
            <i className="fas fa-recycle text-3xl pl-1 text-white animate-spin"></i>
          </a>

          {/* <!-- mobile menu button --> */}
          <button
            id="mobile-menu"
            onClick={handleClick}
            className=" p-4 focus:outline-none focus:bg-green-800"
          >
            <i className="fas fa-bars text-3xl"></i>
          </button>
        </div>

        {/* <!-- sidebar --> */}
        <aside className="sidebar min-h-screen rounded-br-lg bg-green-600 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          {/* <!-- logo --> */}
          <a
            href="#"
            className="text-white flex items-center space-x-2 px-4 no-underline"
          >
            {/* <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg> */}
            <i className="fas fa-recycle text-3xl pr-1 animate-spin"></i>
            <span className="text-2xl font-extrabold font-serif no-underline text-yellow-500">
              AC AUTO BUYERS
            </span>
          </a>

          {/* <!-- nav --> */}
          <nav className="font-bold font-serif text-xl">
            <a
              href="#"
              className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white"
            >
              Get Offer <i className="far fa-money-bill-alt pl-5 text-2xl"></i>
            </a>
            <a
              href=""
              className="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white"
            >
              About
            </a>
            <a
              href=""
              className="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white"
            >
              How It Works
            </a>
            <a
              href=""
              className="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white"
            >
              Contact Us
            </a>
          </nav>
        </aside>

        {/* <!-- content --> */}
        <div className="flex-1 md:p-2 p-3">
          <Content />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Main;
