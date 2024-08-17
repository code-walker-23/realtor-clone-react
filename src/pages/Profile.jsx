import React from "react";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
function Profile() {
  const [name, setName] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    try {
      signOut(auth); // auth.signOut();
      navigate("/");
      toast.success("Sign out successful");
    } catch (error) {
      toast.error("Sign out failed");
    }
  };
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col ">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-300 ease-in-out"
            />
            <input
              type="email"
              id="email"
              value={email}
              
              className="w-full mb-6  px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-300 ease-in-out"
            />
            <div className="flex justify-between mb-6whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center ">
                Do you want to change your name?{" "}
                <span
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-300 ml-1 cursor-pointer"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  Edit
                </span>
              </p>

              <p
                className="text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out"
                onClick={handleSignOut}
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
