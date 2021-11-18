import React from "react";

function How() {
  return (
    <div>
      <div className=" border-t-2 border-b-2">
        <h1 className="text-center font-bold">
          Sell Your Car for Cash with AC Auto Buyers Cash for Cars{" "}
        </h1>
        <p className="text-center text-2xl text-yellow-500 font-bold">
          {" "}
          Program Gets Your Car Sold FAST!
        </p>
      </div>
      <div>
        <h1 className="pt-2">It's so simple - here's how it works</h1>
        <div className=" flex border rounded shadow mt-4">
          <div className="font-bold text-xl w-3/12 items-center flex bg-blue-200 pl-1">
            STEP 1:
          </div>
          <div className="pl-2 w-10/12">
            <p className="">
              Provide us some details on your vehicle. You can do this by
              calling 1-855-922-3095 or by filling out our online form. (hint:
              using your VIN often results in a higher offer)
            </p>
          </div>
        </div>
        <div className=" flex border rounded shadow mt-1">
          <div className="font-bold text-xl w-3/12 items-center flex bg-blue-200 pl-1">
            STEP 2:
          </div>
          <div className="pl-2 w-10/12">
            <p>
              Decide whether or not to accept or decline the offer. If you like
              our offer amount, enter in a few additional details (like the
              vehicle color) to finalize the acceptance.
            </p>
          </div>
        </div>
        <div className=" flex border rounded shadow mt-1">
          <div className="font-bold text-xl w-3/12 items-center flex bg-blue-200 pl-1">
            STEP 3:
          </div>
          <div className="pl-2 w-10/12">
            <p>
              We'll schedule a time to come to you to pick up the vehicle (which
              we tow away for FREE) and pay you cash (or check) on the spot.
              That's it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default How;
