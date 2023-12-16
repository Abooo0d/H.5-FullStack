import React from "react";
import "./gustlayout.css";
import { Outlet } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import NavBar from "../../Components/Sections/NavBar/NavBar";
function GustLayout() {
  return (
    <>
      <NavBar />
      <div className="login-form">
        <div className="login-con">
          <img src={logo} alt="H.5 Logo" />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default GustLayout;
