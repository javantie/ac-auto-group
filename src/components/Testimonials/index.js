import React from "react";
import customer_1 from "../../assets/images/getcar-customer-2.jpg";
import customer_2 from "../../assets/images/getcar-customer-4.jpg";
import placeholder from "../../assets/images/user-placeholder.png";
const testimony = [
  {
    image: customer_1,
    text: "Very smooth transaction. I would use them again! They called me about five minutes after I submitted the request to have my car picked up, and they took care of everything. They gave me what they offered online in cash. Perfect, thank you.",
    name: "Nadine Wright",
    id: 1,
  },
  {
    image: customer_2,
    text: "Very quick and efficient process. The representatives were very courteous and thorough, as was the gentleman who picked up my vehicle.",
    name: "Kelly McDanail",
    id: 2,
  },
  {
    image: placeholder,
    text: "The tow truck driver handled the paper work, gave us the check (no haggling) and towed the car off my driveway",
    name: "David Ingram",
    id: 3,
  },
  {
    image: placeholder,
    text: "I was pleasantly surprised with how smooth and easy the entire process was!! I will keep this company in mind for future needs!!",
    name: "Elain Spindel",
    id: 4,
  },
];

function Testimonials() {
  return (
    <div className=" mt-4">
      {/* //-----------------------------------------Card title-------------------------------------------------------- */}
      <h2 className="text-center font-bold font-serif text-green-600 border-t-2 pt-2 ">
        Testimonials
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-evenly sm:flex-wrap md:flex-col lg:flex-row lg:flex-nowrap">
        {testimony.map((testiment) => (
          // -----------------------------------------Card Image--------------------------------------------------------

          <div
            key={testiment.id}
            className=" border-2 sm:w-72 md:w-full lg:w-80 rounded-lg p-2 text-center shadow-lg mt-2"
          >
            <div className="flex justify-center px-5 rounded-tr-lg rounded-lg">
              <img
                src={testiment.image}
                alt="hero"
                className="rounded rounded-circle shadow mt-1"
              />
            </div>
            {/* //-----------------------------------------Card Body/Txt-------------------------------------------------------- */}

            <div className=" rounded-br-lg rounded-bl-lg p-1">
              <p className="font-serif text-md p-1 italic "> "{testiment.text}"</p>
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
