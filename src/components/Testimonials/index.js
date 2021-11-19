import React from "react";
import img_test from "../../assets/images/02.jpg";

const testimony = [
  {
    image: img_test,
    text: "Very smooth transaction. I would use them again! They called me about five minutes after I submitted the request to have my car picked up, and they took care of everything. They gave me what they offered online in cash. Perfect, thank you.",
    name: "Kelly Wrignt",
  },
  {
    image: img_test,
    text: "Thanks for the reminder lol. Our experience was relieving to say the least and the gentlemen that came and retrieved the vehicle were very nice and prompt. Thank you for doing business with us!",
    name: "Micheal Spindel",
  },
];

function Testimonials() {
  return (
    <div className=" mt-4">
      <h2 className="text-center font-bold font-serif text-green-600 border-t-2 pt-2 ">
        Testimonials
      </h2>
      <div className="flex flex-col sm:flex-row sm: justify-evenly">
        {testimony.map((testiment) => (
          <div className=" border sm:w-2/5 rounded-lg p-2 text-center shadow-lg mt-2">
            <div className="flex justify-center border rounded-lg">
              <img
                src={testiment.image}
                alt="hero"
                className="rounded sm:h-24 sm:w-24"
              />
            </div>
            <div className="">
              <p className="font-serif text-md p-1"> "{testiment.text}"</p>
              <p className="font-bold font-mono"><i className="fas fa-user-check pr-4"></i>{testiment.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
