import React from "react";

function Banner() {
  return (
    <div className="flex sticky top-0 z-0 sm:relative bg-green-900">
      <div className=" flex justify-between p-2 w-5/12  items-center mt-0.5">
        <p className="font-serif sm:text-lg animate-bounce text-yellow-500 pt-1">
          We Buy Junk Car -Any Condition
        </p>
        {/* <a href="tel:+15183140703" className="text-xs pl-1 text-white font-bold sm:text-lg no-underline border-2 shadow rounded-md p-1 mr-1 bg-red-600"><i className="fas fa-phone-volume  text-lg"></i>Call Now</a> */}
      </div>
      <div className="flex justify-center sm:justify-end items-center w-4/12 animate-pulse">
      <a href="tel:+15183140703" className="text-xs text-center text-white font-bold sm:text-md md:text-lg no-underline border-2 font-serif shadow rounded-md p-1 mr-1 bg-red-600"><i className="fas fa-phone-volume text-blue-500 sm:text-lg pr-1"></i>TALK TO A HUMAN</a>
      </div>
      <div className="flex justify-center items-center pl-2 w-4/12 animate-pulse sm:bg-yellow-500">
        <a
          href="https://www.peddle.com/offer?pub_id=289876"
          target="_blank"
          className="bg-yellow-500 text-sm text-center sm:text-lg font-bold no-underline font-serif text-white sm:border-none sm:rounded-none p-2 rounded border-2 mr-0.5 ml-1"
        >
          <i className="fas fa-money-bill-alt text-xs sm:text-lg text-green-900"></i>{" "}
          INSTANT OFFER
        </a>
      </div>
    </div>
  );
}

export default Banner;
