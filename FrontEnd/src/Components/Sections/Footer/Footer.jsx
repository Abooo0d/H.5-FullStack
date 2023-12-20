import React from "react";
import "./Footer.css";
import logo from "../../../Assets/Images/logo.png";
import MiniContact from "../../MiniContact/MiniContact";
import {
  FaTiktok,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { GiChelseaBoot, GiNecklaceDisplay } from "react-icons/gi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { PiPantsFill } from "react-icons/pi";
import MiniCategory from "../../MiniCategory/MiniCategory";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-overlay">
        <div className="footer-section logo">
          <img src={logo} alt="logo" />
          <h3>H.5 Shop</h3>
        </div>
        <div className="footer-section links">
          <h3 className="subtitle">Links</h3>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#features">Features</a>
          <a href="#quote">Quote</a>
          <a href="#contact-us">Contact Us</a>
        </div>
        <div className="footer-section footer-categories">
          <h3 className="subtitle">Categories</h3>
          <MiniCategory cat="Pages" Icon={HiMiniShoppingBag} />
          <MiniCategory cat="Clothes" Icon={PiPantsFill} />
          <MiniCategory cat="Shoes" Icon={GiChelseaBoot} />
          <MiniCategory cat="Accessories" Icon={GiNecklaceDisplay} />
        </div>
        <div className="footer-section footer-accounts">
          {/* <h3 className="subtitle">Contact Us</h3> */}
          <div className="accounts-con">
            <MiniContact Icon={FaTiktok} />
            <MiniContact Icon={FaInstagram} />
            <MiniContact Icon={FaWhatsapp} />
            <MiniContact Icon={FaTelegram} />
          </div>
        </div>
      </div>
      <div className="copy">
        All Right Reserved <span>Abood</span>
      </div>
    </div>
  );
};

export default Footer;
