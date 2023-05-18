import React from "react";


function Banner() {
  return (
    <div className="flex sticky top-0 z-0 sm:relative w-full">
      <div className="flex justify-center w-100 items-center text-white font-bold sm:text-lg no-underline border-1 bg-red-500 text-center pt-1">
        {/* <p className="text-xs font-bold text-white sm:text-lg animate-bounce mt-4">We Buy Junk Cars - (518)314-0703!</p> */}
        <a href="tel:+15183140703" className="text-white font-serif no-underline">
          <i className="fas fa-phone-volume text-2xl md:pr-4"></i>CALL US NOW! (518)314-0703</a>
      </div>
      {/* //-----------------------------------------Instant Offer Button(Custom)-------------------------------------------------------- */}
      <div className="flex justify-center items-center p-0 w-100 bg-yellow-500">
        <a href="https://www.peddle.com/offer?pub_id=289876" rel="noreferrer"  target="_blank"className=" instant-offer-link animate-pulse bg-yellow-500 text-lg text-center sm:text-xl font-bold no-underline font-serif text-white  p-1.5">
        GET INSTANT OFFER<i className="fas fa-money-bill-alt text-xl pl-2 text-green-900"></i> </a>
      </div>
    </div>
  );
}

export default Banner;
