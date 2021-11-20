import React from "react";

function CallButton() {
  return (
    <button className="bg-yellow-400 text-white shadow font-bold p-2 rounded-md mt-2 hover:bg-yellow-400 sm:w-2/5">
      <a className="no-underline text-white font-serif" href="tel:+15183140703">
      <i className="fas fa-phone-alt pr-2 text-blue-500"></i> CALL US NOW (518) 314-0703{" "}
      </a>
    </button>
  );
}
export default CallButton;