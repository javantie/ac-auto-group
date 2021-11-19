import React from "react";
import CallButton from "../components/CallButton";
import OfferButton from "../components/OfferButton";
import bg_img1 from "../assets/images/02.jpg";
import bg_img2 from "../assets/images/selling-a-car-in-illinois.jpg";

function About() {
  return (
    <>
      <div className="mt-4 font-serif text-lg">
        <div className="mb-2">
          <img src={bg_img2} alt="bg_img1" className="shadow rounded-md" />
        </div>
        <h1 className="text-yellow-600 font-bold pt-2">What We Buy?</h1>
        <p>
          At AC Auto Buyers, we buy all types of Junk Vehicles including, all
          years, makes and models in any condition. Providing the highest CASH
          paid on the spot!Prompt, professional service with Honesty!
        </p>
        <p>
          Sell Junk Car for Cash! CASH For Junk Cars Today! (Free Removal) AC
          Auto Buyers NY. We buy Unwanted, Damaged, Old, Wrecked, Burned
          Cars,Trucks,Vans,Suvs & Pay Top Dollar for Junk Cars! Cash for Junk
          Cars & Junk Car Removal Hartford, CT.
        </p>
        <div className="flex justify-center my-2">
          <OfferButton />
        </div>
        <h2 className="text-yellow-600 font-bold pt-2">Why Choose Us?</h2>
        <ul>
          <li>
            <i class="fas fa-chevron-circle-right pr-2"></i>We offer Guaranteed
            Pricing & Free Towing
          </li>
          <li>
            <i class="fas fa-chevron-circle-right pr-2"></i>Great Customer
            Satisfaction with Honesty!
          </li>
          <li>
            <i class="fas fa-chevron-circle-right pr-2"></i>We partner with only
            license and bonded carriers
          </li>
          <li>
            <i class="fas fa-chevron-circle-right pr-2"></i>Wel get you the best
            price for your vehicle
          </li>
          <li>
            <i class="fas fa-chevron-circle-right pr-2"></i>24 Hour Customer
            Service
          </li>
          <li>
            <i class="fas fa-chevron-circle-right pr-2"></i>Service all 50
            States
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <CallButton />
      </div>

      <div className="mt-4 font-serif border-t-2">
        <h2 className="text-center text-green-600 font-bold pt-2">
          Get Paid for Your Old Vehicle
        </h2>
        <p className="text-lg">
          If you own an older or used vehicle and are looking to sell your car
          online, you’ve come to the right place. The team at Cash Auto Salvage
          offers cash for cars, regardless of the state of the vehicle.
        </p>
        <p className="text-lg">
          Take advantage of a service that provides you with the funds you need
          while getting your old car off your hands. Reach out to our team today
          to get started.
        </p>

        <h2 className="text-center text-green-600 font-bold">
          Fast & Reliable Service
        </h2>
        <p className="text-lg">
          When you need to get rid of a used vehicle, you need to count on a
          team that can help you get the job done as soon as possible. Our team
          prides itself on providing speedy sales that get useless cars off your
          hands and puts the cash (or a check) you need in your pocket quickly.
        </p>
        <p className="text-lg">
          Plus, we are consistent in everything we do. When you work with Cash
          Auto Salvage you know that you’re getting the best possible service at
          every stage of the sales process. We offer consistent and reliable
          service so you know what to expect at all times.
        </p>
        <h2 className="text-center text-green-600 font-bold">
          Cash for Any Car
        </h2>
        <p className="text-lg">
          No matter what type of vehicle you’re looking to get rid of, our team
          is here to help! We’ve helped hundreds of people easily sell their
          cars online and receive access to funds immediately.
        </p>
        <p className="text-lg">
          We’ll help you get any type of car off your hands, including:
        </p>
        <ul className="font-bold text-lg">
          {" "}
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Junk cars
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Bad transmission
            vehicles
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>SUVs
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Luxury vehicles
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Performance
            vehicles
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Damaged cars
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Used cars
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Used trucks
          </li>
          <li>
            <i className="fas fa-check pr-4 text-green-300"></i>Pick-Ups
          </li>
        </ul>
        <p className="text-lg">
          Regardless of what type of vehicle you’ve got to get rid of, we’re
          here to help throughout every step of the process. If you’re unsure
          whether we’ll take your car, give us a call at 1-888-888-8888 and we
          can help answer any questions.
        </p>
        <div className="flex sm:justify-evenly flex-col sm:flex-row">
          <CallButton />
          <OfferButton />
        </div>
      </div>
    </>
  );
}
export default About;
