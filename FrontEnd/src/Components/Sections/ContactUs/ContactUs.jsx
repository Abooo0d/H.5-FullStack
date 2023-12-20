import React from "react";
import "./ContactUs.css";
import {
  FaTiktok,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import Contact from "../../contact/Contact";

const ContactUs = () => {
  return (
    <div className="accounts">
      <h1 className="label">Contact Us</h1>
      <p className="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        suscipit cum quae. Amet, consequuntur! Necessitatibus?
      </p>
      <div className="contacts-con">
        <Contact text="Telegram" Icon={FaTelegramPlane} />
        <Contact text="WhatsApp" Icon={FaWhatsapp} />
        <Contact text="TikTok" Icon={FaTiktok} />
        <Contact text="Instagram" Icon={FaInstagram} />
      </div>
    </div>
  );
};

export default ContactUs;
