import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

function OAuth() {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // CHECK FOR THE USER ALREADY EXISTS
      const docRef = doc(db, "users", result.user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        setDoc(docRef, {
          fullName: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        toast.success("Google Sign In Successful");
      }
      navigate("/");
    } catch (error) {
      toast.error("Google Sign In Failed");
    }
  };
  return (
    <button
      onClick={onGoogleClick}
      type="button"
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
