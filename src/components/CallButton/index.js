import React from "react";

function CallButton() {
  return (
    <button className= "bg-yellow-400 text-white font-bold p-2 rounded-md mt-2 hover:bg-yellow-400 sm:w-2/5">
      <a classId="call-btn" className="no-underline text-white " href="tel:+15183140703">
      <i className="fas fa-phone-alt pr-4"></i> CALL US NOW (518) 314-0703{" "}
      </a>
    </button>
  );
}
export default CallButton;