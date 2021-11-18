import React from "react";

function Banner() {
  return (
    <div className="flex sticky top-0 z-0 sm:relative">
      <div className=" flex sm:justify-between sm:pr-2 w-4/5 pt-1 pl-2 items-center bg-green-900">
        <p className="text-xs font-bold text-white sm:text-lg animate-bounce mt-4">We'll Buy Your Car - Any Condition!</p>
        <a href="#" className="text-xs pl-2 text-white font-bold sm:text-lg no-underline pr-1"><i className="fas fa-phone-volume pr-2"></i>1-888-888-8888</a>
      </div>
      <div className="flex justify-center items-center pl-2 w-1/5 bg-yellow-500 animate-pulse">
        <a href="#" className="text-center sm:text-lg font-bold no-underline font-sans text-white"> INSTANT OFFER</a>
      </div>
    </div>
  );
}

export default Banner;
