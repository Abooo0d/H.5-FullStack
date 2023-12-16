import React, { useState } from "react";
import "./ItemCard.css";
import cartImage from "../../Assets/Images/cart.png";
import { LiaEdit } from "react-icons/lia";
import { AiTwotoneDelete } from "react-icons/ai";

import { Link } from "react-router-dom";
import axiosClient from "../../AxiosClient/axiosClient";
const ItemCard = ({ item, onDelete }) => {
  const [admin, setAdmin] = useState(localStorage.getItem("USER-STATE"));
  return (
    <div className="card">
      <div className="image">
        <img src={item.image !== null ? item.image : cartImage} />
      </div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <span>{item.price + " "}$ </span>
      <Link to={`/details/${item.id}`} className="view-btn">
        View Item
      </Link>
      {admin == 1 && (
        <>
          <Link to={`/Admin/${item.id}/edit`} className="edit-btn">
            <LiaEdit />
          </Link>
          <button onClick={() => onDelete(item.id)} className="delete-btn">
            <AiTwotoneDelete />
          </button>
        </>
      )}
    </div>
  );
};
export default ItemCard;
