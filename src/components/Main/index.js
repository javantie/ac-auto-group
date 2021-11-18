import React from "react";
import srcfile from "../../assets/js/Mian"
import Content from "../Content";
import Banner from "../Banner";

function Main() {
  return (
    <>
    <Banner/>
<div class="relative  md:flex">

{/* <!-- mobile menu bar --> */}
<div class="bg-blue-700 text-gray-100 flex justify-between md:hidden">
  {/* <!-- logo --> */}
  <a href="#" class="block p-4 text-yellow-300 font-bold text-2xl font-serif no-underline">AC AUTO BUYERS</a>

  {/* <!-- mobile menu button --> */}
  <button class="mobile-menu-button p-4 focus:outline-none focus:bg-green-800">
    <svg class="h-8 w-8 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

{/* <!-- sidebar --> */}
<div class="sidebar min-h-screen bg-blue-900 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

  {/* <!-- logo --> */}
  <a href="#" class="text-white flex items-center space-x-2 px-4 no-underline">
    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
    <span class="text-2xl font-extrabold font-serif no-underline text-yellow-500">AC AUTO BUYERS</span>
  </a>

  {/* <!-- nav --> */}
  <nav className="font-bold font-serif text-xl">
    <a href="#" class="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
      Get Offer
    </a>
    <a href="" class="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white">
      About
    </a>
    <a href="" class="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white">
      How It Works
    </a>
    <a href="" class="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white">
      Contact Us
    </a>
  </nav>
</div>

{/* <!-- content --> */}
<div class="flex-1 md:p-2 p-3">
  <Content/>
</div>
<script src={srcfile}></script>
</div>
    </>
  );
}

export default Main;
