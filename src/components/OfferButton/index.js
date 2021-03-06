import React from "react";
function OfferButton() {
  return (
    <button className="bg-yellow-400 text-white font-bold p-2 rounded-md mt-2  hover:bg-yellow-400 sm:w-2/5">
      <a className="no-underline text-white " target="_blank" rel="noreferrer" href="https://www.peddle.com/offer?pub_id=289876">
        <i className="far fa-money-bill-alt pr-4 "></i> INSTANT ONLINE OFFER
      </a>
    </button>
  );
}

export default OfferButton;
