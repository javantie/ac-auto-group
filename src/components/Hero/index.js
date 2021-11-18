import React from "react";
import bg_img1 from "../../assets/images/02.jpg";
import Offer from "../OfferButton";
import CallButton from "../CallButton";

function Hero() {
  return (
    <>
      <div className="hero-section p-2 rounded">
        <div className="hero-image p-1">
          <img src={bg_img1} alt="hero" className="rounded" />
        </div>
        <div className="hero-content">
          <h1 className="font-mono text-center border-t mt-1 text-yellow-500 font-bold">
            Sell Your Junk Car Now! Get Paid Cash At PickUp
          </h1>
          <p className="font-serif text-lg">
            Don’t just let it sit there! Our junkyard will pick up your vehicle
            anywhere within the greater New York area – FREE!{" "}
          </p>
          <div className="sm:justify-evenly flex flex-col sm:flex-row">
            <Offer />
            <CallButton />
           
            
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Hero;
