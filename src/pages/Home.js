import React from "react";
import Hero from "../components/Hero";
import LeadForm from "../components/LeadForm";
import Testimonials from "../components/Testimonials";
import OfferButton from "../components/OfferButton";

function Home() {
  return (
    <div className="">
      <Hero />
      <div className=" border-2 mb-2 rounded-md shadow">
        <h1 className="text-center font-bold text-green-600 font-serif">
          Get An Instant Online Offer In Less Than 5 minutes!!
        </h1>
        <p className="text-center text-2xl text-yellow-500 font-bold font-serif">
          {" "}
          This Program Gets Your Car Sold FAST!
        </p>
        <div className=" flex justify-evenly animate-bounce text-green-500 text-3xl">
          <i className="fas fa-angle-double-down"></i>
          <i className="fas fa-angle-double-down"></i>
          <i className="fas fa-angle-double-down"></i>
          <i className="fas fa-angle-double-down"></i>
        </div>
        <div className="flex justify-center pb-2">
          <OfferButton />
        </div>
      </div>
      <LeadForm />
      <Testimonials />
    </div>
  );
}

export default Home;
