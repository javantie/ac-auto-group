import React from "react";


function Banner() {
  return (
    <div className="flex sticky top-0 z-0 sm:relative bg-green-900">
      <div className=" flex justify-between pr-2 w-4/5 pt-1 pl-1 items-center mr-0.5">
        <p className="text-xs font-bold text-white sm:text-lg animate-bounce mt-4">We Buy Junk Cars - (518)314-0703 </p>
        <a href="tel:+15183140703" className="text-xs pl-1 text-white font-bold sm:text-lg no-underline border-2 shadow rounded-md p-1 mr-1 bg-red-600"><i className="fas fa-phone-volume  text-lg"></i>Call Now</a>
      </div>
      <div className="flex justify-center items-center pl-2 w-1/5 animate-pulse pr-2 sm:bg-yellow-500">
        <a href="https://www.peddle.com/offer?pub_id=289876" rel="noreferrer"  target="_blank"className="bg-yellow-500 text-sm text-center sm:text-lg font-bold no-underline font-serif text-white  sm:border-none sm:rounded-none p-1.5 border-2 mr-2 ml-1"><i className="fas fa-money-bill-alt text-lg text-green-900"></i> INSTANT OFFER</a>
      </div>
    </div>
  );
}

export default Banner;
