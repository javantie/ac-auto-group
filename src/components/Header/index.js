import React from "react";
import Nav from "../Nav";
import logo from "../../assets/images/FB_IMG_1575093313783.jpg";

function Header() {
  return (
    <>
      <div id="mainheader" className="border-b-2">
        <div className=" w-24 pl-2">
          <div className="font-bold text-blue-500 font-mono animate-pulse">Top Dollar For Junk Cars!!</div>
          <br/>
          <div className="font-bold text-red-500 font-mono animate-bounce">Same Day Removal</div>
        </div>
        <div>
          
        </div>
        {/* <h1 className="text-2xl font-bold font-sans ml-2">AC AUTO BUYERS</h1> */}
      </div>
    </>
  );
}

export default Header;
