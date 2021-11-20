import React from "react";
import ContactForm from "../components/ContactForm";
import CallButton from "../components/CallButton";
import OfferButton from "../components/OfferButton";
import bg_img1 from "../assets/images/FB_IMG_1575093313783.jpg";


function ContactPage() {
  return (
    <div>
        <div className="flex justify-center border-b-2 mb-2">
            <img src={bg_img1} alt="cash-for-junk-car-ac-auto-buyers" className="h-48 w-48" />
        </div>
      <h1 className="font-serif font-bold border-b-2 text-center bg-green-600 text-white p-1 rounded">
        <i className="fas fa-headset mr-4"></i>Contact Us{" "}
      </h1>
      <p className="text-lg rounded-lg p-2.5 shadow xl:text-center">
        We would love to hear from you. Please fill out the form below and we
        will get back to you as soon as possible.
      </p>
      <div className="flex justify-center">
        <CallButton />
      </div>
      <ContactForm />
      <div className="">
          <h2 className="font-serif mt-4 text-center font-bold">Want An Instant Offer Online? </h2>
          <div className=" text-center flex justify-between px-20 sm:px-48 animate-bounce text-green-600">
          <i class="fas fa-angle-double-down"></i>
          <i class="fas fa-angle-double-down"></i>
          <i class="fas fa-angle-double-down"></i>
          <i class="fas fa-angle-double-down"></i>
          <i class="fas fa-angle-double-down"></i>
          <i class="fas fa-angle-double-down"></i>
          <i class="fas fa-angle-double-down"></i>
          </div>
          <div className="flex justify-center">
            <OfferButton />
          </div>
      </div>
    </div>
  );
}

export default ContactPage;
