import React from "react";
import img_test from "../../assets/images/02.jpg";
import customer_1 from "../../assets/images/getcar-customer-1.jpg";
import customer_2 from "../../assets/images/getcar-customer-2.jpg";
import customer_3 from "../../assets/images/getcar-customer-3.jpg";

const testimony = [
  {
    image: customer_1,
    text: "Very smooth transaction. I would use them again! They called me about five minutes after I submitted the request to have my car picked up, and they took care of everything. They gave me what they offered online in cash. Perfect, thank you.",
    name: "Nadine Wright",
    id: 1,
  },
  {
    image: customer_2,
    text: "Thanks for the reminder lol. Our experience was relieving to say the least and the gentlemen that came and retrieved the vehicle were very nice and prompt. Thank you for doing business with us!",
    name: "Elain Spindel",
    id: 2,
  },
  // {
  //   image: customer_2,
  //   text: "Thanks for the reminder lol. Our experience was relieving to say the least and the gentlemen that came and retrieved the vehicle were very nice and prompt. Thank you for doing business with us!",
  //   name: "Elain Spindel",
  //   id: 2,
  // },
  // {
  //   image: customer_2,
  //   text: "Thanks for the reminder lol. Our experience was relieving to say the least and the gentlemen that came and retrieved the vehicle were very nice and prompt. Thank you for doing business with us!",
  //   name: "Elain Spindel",
  //   id: 2,
  // },
];

function Testimonials() {
  return (
    <div className=" mt-4">
      {/* //-----------------------------------------Card title-------------------------------------------------------- */}
      <h2 className="text-center font-bold font-serif text-green-600 border-t-2 pt-2 ">
        Testimonials
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-evenly flex-wrap">
        {testimony.map((testiment) => (
          // -----------------------------------------Card Image--------------------------------------------------------

          <div
            key={testiment.id}
            className=" border sm:w-2/5 rounded-lg p-2 text-center shadow-lg mt-2"
          >
            <div className="flex justify-center shadow px-5 border-t-2 border-r-2 border-l-2 border-gray-100 pb-2 rounded-tr-lg rounded-tl-lg">
              <img
                src={testiment.image}
                alt="hero"
                className="rounded lg:h-96 rounded-circle shadow"
              />
            </div>
            {/* //-----------------------------------------Card Body/Txt-------------------------------------------------------- */}

            <div className=" shadow border-r-2 border-l-2 border-b-2 rounded-br-lg  border-gray-100 rounded-bl-lg p-1">
              <p className="font-serif text-md p-1"> "{testiment.text}"</p>
              <p className="font-bold font-mono">
                <i className="fas fa-user-check pr-4"></i>
                {testiment.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
