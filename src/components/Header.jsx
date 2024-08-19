import React, { useEffect } from "react";
import { LOGO } from "../utils/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const [page, setPage] = useState("Sign In");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPage("Profile");
      } else {
        setPage("Sign In");
      }
    });
  }, [auth]);

  const pathMatchRoute = (route) => location.pathname === route;

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={LOGO}
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <nav>
            <ul className="flex space-x-10">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  pathMatchRoute("/")
                    ? "text-black border-b-red-500"
                    : "text-gray-400 border-b-transparent"
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  pathMatchRoute("/offers")
                    ? "text-black border-b-red-500"
                    : "text-gray-400 border-b-transparent"
                }`}
                onClick={() => navigate("/offers")}
              >
                Offers
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  pathMatchRoute("/sign-in")
                    ? "text-black border-b-red-500"
                    : "text-gray-400 border-b-transparent"
                }`}
                onClick={() => navigate("/profile")}
              >
                {page}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
