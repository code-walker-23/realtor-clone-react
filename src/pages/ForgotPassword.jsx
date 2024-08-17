import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function SignIn() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Password reset email sent. Please check your email inbox."
      );
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email address.");
      } else {
        toast.error(
          "Failed to send password reset email. Please check the email address and try again."
        );
      }
      console.error("Error sending password reset email:", error);
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transitions ease-in-out"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              aria-label="Email Address"
              required
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p className="mb-6">
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign In instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 shadow-md text-white py-3 px-7 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out uppercase hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send Reset Email
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
