import React from "react";
import spinner from "../assets/svg/spinner.svg";

function Spinner() {
  return (
    <div className="bg-black opacity-50 flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-50">
      <div>
        <img src={spinner} alt="Loading..." className="h-24"></img>
      </div>
    </div>
  );
}

export default Spinner;
