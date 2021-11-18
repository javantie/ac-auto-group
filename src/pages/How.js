import React from "react";
import OfferButton from "../components/OfferButton";
import CallButton from "../components/CallButton";

function How() {
  return (
    <div>
      <div className=" border-b-2">
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
          It's so simple - here's how it works <br />
          {/* <i class="fas fa-angle-double-down pl-4 animate-bounce"></i><i class="fas fa-angle-double-down pl-2 animate-bounce"></i><i class="fas fa-angle-double-down pl-2 animate-bounce"></i>
           <i class="fas fa-angle-double-down pl-2 animate-bounce"></i> */}
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
              calling 1-888-888-8888 or by filling out our online form. (hint:
              using your VIN often results in a higher offer)
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
              Decide whether or not to accept or decline the offer. If you like
              our offer amount, enter in a few additional details (like the
              vehicle color) to finalize the acceptance.
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
              We'll schedule a time to come to you to pick up the vehicle (which
              we tow away for FREE) and pay you cash (or check) on the spot.
              That's it!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-evenly flex-col sm:flex-row">
      <OfferButton />
      <CallButton />
      </div>
    </div>
  );
}
export default How;
