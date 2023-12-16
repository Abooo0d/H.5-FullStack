import React from "react";
import "./categoriesCard.css";
import { Link } from "react-router-dom";
function CategoriesCard({ name, children }) {
  return (
    <Link className="categories-card" to="/home">
      <h2>{name}</h2>
      {children}
    </Link>
  );
}

export default CategoriesCard;
