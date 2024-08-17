import React from "react";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  return (
    <button
      className="flex items-center justify-center w-full bg-red-700 text-white uppercase px-7 py-3 text-sm font-medium
    hover:bg-red-800
    active:bg-red-900 shadow-md
    hover:shadow-lg
    active:shadow-lg
    transition duration-300 ease-in-out
    rounded-lg"
    >
      <FcGoogle className="text-2xl bg-white mr-2 rounded-full" />
      Continue with Google
    </button>
  );
}

export default OAuth;
