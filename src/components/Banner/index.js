import React from "react";


function Banner() {
  return (
    <div className="flex sticky top-0 z-0 sm:relative bg-green-900 w-full">
      <div className=" flex justify-between w-100 items-center text-white font-bold sm:text-lg no-underline border-1 bg-red-500 text-center">
        {/* <p className="text-xs font-bold text-white sm:text-lg animate-bounce mt-4">We Buy Junk Cars - (518)314-0703!</p> */}
        <a href="tel:+15183140703" className="text-white font-serif">
          <i className="fas fa-phone-volume text-xl"></i>CALL US NOW! (518)314-0703</a>
      </div>
      {/* //-----------------------------------------Instant Offer Button(Custom)-------------------------------------------------------- */}
      <div className="flex justify-center items-center p-0 w-100 animate-pulse sm:bg-yellow-500">
        <a href="https://www.peddle.com/offer?pub_id=289876" rel="noreferrer"  target="_blank"className="bg-yellow-500 text-sm text-center sm:text-lg font-bold no-underline font-serif text-white  sm:border-none sm:rounded-none p-1.5 border-1 ">
        GET INSTANT OFFER<i className="fas fa-money-bill-alt text-lg pl-2 text-green-900"></i> </a>
      </div>
    </div>
  );
}

export default Banner;
