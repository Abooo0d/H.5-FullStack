import React, { useState } from "react";
import Container from "../../Components/container/Container";
import "./newItemPage.css";
import axiosClient from "../../AxiosClient/axiosClient";
import CartImage from "../../Assets/Images/cart.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
function NewItemPage() {
  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleFileSelect = (event) => {
    // we only get the selected file from input element's event
    setSelectedFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = function () {
      if (reader.readyState === 2) {
        setItem({
          ...item,
          image: reader.result,
        });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    // Create a FormData object
    const formData = new FormData();
    // Append file to the formData object here
    formData.append("selectedFile", selectedFile);
    formData.append("name", item.title);
    formData.append("description", item.description);
    formData.append("price", item.price);
    try {
      // We will send formData object as a data to the API URL here.
      const response = await axiosClient
        .post("/items", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setIsLoading(false);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="new-item-page">
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="image con">
            <label>Photo:</label>
            <img src={item.image == "" ? CartImage : item.image} />
            <button>
              Choose Image
              <input type="file" onChange={handleFileSelect} />
            </button>
          </div>
          <div className="name con">
            <label htmlFor="itemName">Item Name:</label>
            <input
              type="text"
              name="itemName"
              id="itemName"
              placeholder="Type The Item Name"
              onChange={(ev) => setItem({ ...item, title: ev.target.value })}
            />
          </div>
          <div className="desc con">
            <label htmlFor="itemDesc">Description:</label>
            <textarea
              name="itemDesc"
              id="itemDesc"
              placeholder="Type Your Description"
              onChange={(ev) =>
                setItem({ ...item, description: ev.target.value })
              }
            ></textarea>
          </div>
          <div className="price con">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={(ev) => setItem({ ...item, price: ev.target.value })}
            />
          </div>
          <input type="submit" value="Add New Item" className="send" />
        </form>
      </Container>
      {isLoading && <Spinner />}
    </div>
  );
}

export default NewItemPage;
