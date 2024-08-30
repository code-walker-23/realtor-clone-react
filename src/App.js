import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer, Bounce } from "react-toastify"; // Import Bounce transition
import "react-toastify/dist/ReactToastify.css";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} // Use Bounce component correctly
      />
    </>
  );
}

export default App;
