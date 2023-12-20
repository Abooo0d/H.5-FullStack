import React from "react";
import "./MiniCategory.css";
const MiniCategory = ({ cat, Icon }) => {
  return (
    <div className="mini-category">
      <Icon />
      <h4>{cat}</h4>
    </div>
  );
};

export default MiniCategory;
