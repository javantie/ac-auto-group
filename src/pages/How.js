import React from "react";
import CallButton from "../components/CallButton";
import Hero from "../components/Hero";

const faqs = [
  {
    id: 1,
    title: "What types of vehicles do you purchase?",
    text: "We buy cars, trucks, vans and SUVs in any condition, year, make, and model. We’ll buy your vehicle even if it’s NOT junk! Depending on your location, we might be able to purchase larger vehicles like RVs, school buses, and work trucks. Please call us for more details",
  },
  {
    title: "How can I sell my junk car for cash?",
    id: 2,
    text: "It’s actually a really simple process. You can call or text us at (518) 314-0703 or begin the online process here to get a free offer. We’ll ask you a few questions about your vehicle, such as year, make, model, mileage, and any damage and then provide you with an instant quote.",
  },
  {
    title: "Can I junk my car without the title?",
    id: 3,
    text: " It depends on where the car is located. Some states absolutely require a title in order for a vehicle to change hands. In areas where you don’t need a title, all we need is a copy of a drivers license or other form of valid id and a copy of the registration, current or expired that matches the form of identification. Please inform of us as soon as possible if this is the case. A basic rule of thumb to determine if you need a title or not is as follows: You do not need a title if you own the vehicle, the vehicle is 10 years or older, and if you have a registration in your name. ",
  },
  {
    title: "How much money do you get for a junk car?",
    id: 4,
    text: "There are a variety of factors that go into valuing your vehicle. Depending on year, make, model, and condition, our offers typically range within the $100 – $15,000 range. We can’t determine a price until we know the details of your vehicle",
  },
  {
    title: "What types of vehicles do you purchase?",
    id: 5,
    text: "We buy cars, trucks, vans and SUVs in any condition, year, make, and model. We’ll buy your vehicle even if it’s NOT junk! Depending on your location, we might be able to purchase larger vehicles like RVs, school buses, and work trucks. Please call us for more details",
  },
  {
    title: "Do I need to know my VIN?",
    id: 6,
    text: "To get an offer from us to buy your vehicle, no. However, using your VIN during the offer process provides us with a more accurate picture and often results in a much higher offer. In most cases, you will need the VIN to complete the sale once you accept an offer from us",
  },
  {
    title: "Do I need to pay for towing?",
    id: 7,
    text: "No, every vehicle that we buy we pick up for free!",
  },
  {
    title: "Can the online valuation change?",
    id: 8,
    text: "If the vehicle is as described then our online valuation will not change. We do our best to give our customers fair pricing on their vehicles. If there is a case where the vehicle we are picking up does not match the submitted description then we do have the right to change our valuation. If this is the case you will be informed and have the right to accept or reject the price change",
  },
  {
    title: "What happens to my car after you buy it?",
    id: 9,
    text: "We salvage every vehicle we purchase. The process consists of draining all of the fluids, removing all electrical components, and refurbishing any still serviceable parts. Once everything is removed from the vehicle, the remainder is crushed for scrap metal.",
  },
];

function How() {
  return (
    <>
      <Hero />
      <div>
        <div className=" border-2 mb-2 rounded-md shadow animate-pulse">
          <h1 className="text-center font-bold text-green-600">
            Sell Your Car for Cash with AC Auto Buyers Cash for Cars{" "}
          </h1>
          <p className="text-center text-2xl text-yellow-500 font-bold">
            {" "}
            Program Gets Your Car Sold FAST!
          </p>
        </div>
        <div className="shadow-sm">
          <h1 className="pt-2 text-white text-center rounded font-bold bg-green-600">
            It's so simple - here's how it works! <br />
          </h1>
          <div className=" flex  rounded-lg shadow mt-4">
            <div className="font-bold text-lg w-3/12 items-center flex  pl-1 flex justify-center">
              <p className="border bg-green-600 p-3 rounded-circle text-2xl text-white">
                #1
              </p>
            </div>
            <div className="w-8/12">
              <p className=" border-l-2 border-green-200 pl-2 mt-1 font-semibold">
                Provide us some details on your vehicle. You can do this by
                calling <a href="tel:+15183140703">1-(518) 314-0703</a> or by
                filling out our online form. (hint: using your VIN often results
                in a higher offer)
              </p>
            </div>
          </div>
          <div className=" flex  rounded-lg shadow mt-4">
            <div className="font-bold text-lg w-3/12 items-center flex  pl-1 flex justify-center">
              <p className="border bg-green-600 p-3 rounded-circle text-2xl text-white">
                #2
              </p>
            </div>
            <div className="w-8/12">
              <p className=" border-l-2 border-green-200  pl-2 mt-1 font-semibold">
                Decide whether or not to accept or decline the offer. If you
                like our offer amount, enter in a few additional details (like
                the vehicle color) to finalize the acceptance.
              </p>
            </div>
          </div>
          <div className=" flex  rounded-lg shadow mt-4">
            <div className="font-bold text-lg w-3/12 items-center flex  pl-1 flex justify-center">
              <p className="border bg-green-600 p-3 rounded-circle text-2xl text-white">
                #3
              </p>
            </div>
            <div className="w-8/12">
              <p className=" border-l-2 border-green-200 pl-2 mt-1 font-semibold">
                We'll schedule a time to come to you to pick up the vehicle
                (which we tow away for FREE) and pay you cash (or check) on the
                spot. That's it!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-evenly flex-col sm:flex-row">
          <CallButton />
        </div>
        <div className="font-serif">
          <h1 className="mt-4 text-center font-bold text-yellow-500">
            FAQs: What You Need To Know About Junk Car Selling
          </h1>
          <p className=" text-lg">
            It pays to do your research first before you sell your car for cash.
            Cash Auto Salvage answers the most common questions associated with
            selling a car, junk car buying, and auto salvage yards
          </p>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border p-2 rounded-md shadow my-2 text-center"
            >
              <h3 className="text-green-600">
                <i className="fas fa-info-circle mr-2 text-yellow-400 text-3xl"></i>
                {faq.title}
              </h3>
              <p className="text-left">{faq.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <CallButton />
        </div>
      </div>
    </>
  );
}
export default How;
