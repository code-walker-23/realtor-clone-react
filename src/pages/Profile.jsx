import React, { useState } from "react";
import { toast } from "react-toastify";
import { signOut, updateProfile as updateFirebaseProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { doc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { updateDoc } from "firebase/firestore";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

function Profile() {
  const [name, setName] = useState(auth.currentUser.displayName || "");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const email = auth.currentUser.email;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      toast.success("Sign out successful");
    } catch (error) {
      toast.error("Sign out failed");
    }
  };

  const handleProfileUpdate = async () => {
    setIsEditing(false);
    try {
      if (auth.currentUser.displayName !== name) {
        await updateFirebaseProfile(auth.currentUser, {
          displayName: name,
        });
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          fullName: name,
        });

        toast.success("Profile updated successfully");
      } else {
        toast.info("No changes made");
      }
    } catch (error) {
      toast.error("Profile update failed");
    }
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!isEditing}
              onChange={(e) => setName(e.target.value)}
              className={`w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-300 ease-in-out ${
                isEditing && "bg-red-200 focus:bg-red-200"
              }`}
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-300 ease-in-out"
            />
            <div className="flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center">
                Do you want to change your name?{" "}
                <span
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-300 ml-1 cursor-pointer"
                  onClick={() => {
                    if (isEditing) {
                      console.log("handleProfileUpdate");
                      handleProfileUpdate();
                    } else {
                      setIsEditing(true); // for the first time
                    }
                  }}
                >
                  {isEditing ? "Apply Changes" : "Edit"}
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
          <button
            type="submit"
            className="bg-blue-600 w-full text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition duration-300 ease-in-out"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Sell or Rent your homes
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
