import React from "react";
import "./Contact.css";
const Contact = ({ text, Icon }) => {
  return (
    <div className="contact">
      <h3>{text}</h3>
      <Icon />
    </div>
  );
};

export default Contact;
