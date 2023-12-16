import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-overlay">
        <div className="text">
          {/* <h1>
            <span>Style Sphere</span>
          </h1> */}
          <img src={logo} alt="" />
          <p className="desc">Shopping Like Never Before</p>
          <p className="about">
            Welcome to <span>H.5</span> your destination for premium products
            and effortless shopping. Explore our curated collection of fashion
            and more. Enjoy a seamless experience with secure payments. Join us
            for exclusive deals. Elevate your style and shop smarter with us!
          </p>
          <Link to="/home">View Store</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
