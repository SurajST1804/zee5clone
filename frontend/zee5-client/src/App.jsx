import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import UploadMovie from "./Components/UploadMovie/UploadMovie";
import Home from "./Pages/Home";
import Shashi from "./Pages/Shashi";
// import Navbar from "./Pages/Zee5Header/Navbar";

// import SignUp from "./Components/Auth/SignUp";

const App = () => {
  return (
    <section>
      <article>
        <Router>
          <Shashi />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/moviepost" element={<UploadMovie />} />
          </Routes>
        </Router>
      </article>
    </section>
  );
};

export default App;
