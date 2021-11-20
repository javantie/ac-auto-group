import React from "react";


function Banner() {
  return (
    <div className="flex sticky top-0 z-0 sm:relative bg-green-900">
      <div className=" flex justify-between pr-2 w-4/5 pt-1 pl-2 items-center border-r-2">
        <p className="text-xs font-bold text-white sm:text-lg animate-bounce mt-4">We Buy Junk Car - Any Condition!</p>
        <a href="#" className="text-xs pl-1 text-white font-bold sm:text-lg no-underline border-2 shadow rounded-md p-1 bg-red-600"><i className="fas fa-phone-volume pr-1 text-lg"></i>(518) 314-0703</a>
      </div>
      <div className="flex justify-center items-center pl-2 w-1/5 animate-pulse pr-2">
        <a href="https://www.peddle.com/offer?pub_id=289876" className="bg-yellow-500 text-sm text-center sm:text-lg font-bold no-underline font-serif text-white border-2 rounded-circle p-1"><i className="fas fa-money-bill-alt text-lg text-green-900"></i> INSTANT OFFER</a>
      </div>
    </div>
  );
}

export default Banner;
