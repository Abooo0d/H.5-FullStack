/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./navbar.css";
import Container from "../../container/Container";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import axiosClient from "../../../AxiosClient/axiosClient";
import Spinner from "../../Spinner/Spinner";
import router from "../../../router";
import { useState } from "react";
function NavBar({ page }) {
  const dashboardLi = useRef();
  const homeLi = useRef();
  const menuRef = useRef();
  const menuBtnRef = useRef();
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  const [userData, setUserData] = useState(localStorage.getItem("USER"));
  const [admin, setAdmin] = useState(localStorage.getItem("USER-STATE"));
  const [loading, setLoading] = useState(false);
  const showMenu = () => {
    menuRef.current.classList.toggle("active");
    menuBtnRef.current.classList.toggle("active");
  };
  const logout = () => {
    setLoading(true);
    axiosClient
      .post("/logout")
      .then(() => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("USER");
        localStorage.removeItem("USER-STATE");
        setToken(localStorage.getItem("TOKEN"));
        setUserData(localStorage.getItem("USER"));
        setAdmin(localStorage.getItem("USER-STATE"));
        menuRef.current.classList.remove("active");
        menuBtnRef.current.classList.remove("active");
        setLoading(false);
        router.navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
      });
      
  };
  return (
    <>
      <div className="header">
        <Container>
          {userData !== null && (
            <>{admin == 1 && <div className="admin">Admin</div>}</>
          )}
          <div className="navbar">
            {/* <h1>Style Sphere</h1> */}
            <img src={logo} alt="" />
            <button className="menu-btn" onClick={showMenu} ref={menuBtnRef}>
              <span className="one"></span>
              <span className="tow"></span>
              <span className="three"></span>
            </button>
          </div>
          <div className="links" ref={menuRef}>
            <ul>
              {userData !== null && (
                <li ref={homeLi} className="user-data">
                  Welcome {userData}
                </li>
              )}
              <li ref={dashboardLi} className={page == "home" ? "active" : ""}>
                <NavLink to="/home">Store</NavLink>
              </li>
              <li ref={homeLi} className={page == "dashboard" ? "active" : ""}>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              {admin == 1 && (
                <li ref={homeLi}>
                  <NavLink to="/Admin/create">Create Item</NavLink>
                </li>
              )}
              {token == null ? (
                <li
                  ref={homeLi}
                  className={page == "dashboard" ? "active" : ""}
                >
                  <NavLink to="/login">Login</NavLink>
                </li>
              ) : (
                <li ref={homeLi} className="logout">
                  <button onClick={logout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </div>
      {loading && <Spinner />}
    </>
  );
}

export default NavBar;
