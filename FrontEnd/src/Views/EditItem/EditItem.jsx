import React, { useEffect, useState } from "react";
import CartImage from "../../Assets/Images/cart.png";
import Spinner from "../../Components/Spinner/Spinner";
import Container from "../../Components/container/Container";
import axiosClient from "../../AxiosClient/axiosClient";
import { useNavigate, useParams } from "react-router-dom";
function EditItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axiosClient
      .get(`/items/${id}`)
      .then(({ data }) => {
        setItem(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);
  const OnSubmit = async (ev) => {
    setIsLoading(true);
    ev.preventDefault();
    const formData = new FormData();
    if (imageChanged) {
      formData.append("selectedFile", selectedFile);
    }
    formData.append("name", item.name);
    formData.append("description", item.description);
    formData.append("price", item.price);
    formData.append("_method", "PUT");
    const response = await axiosClient
      .post(`/items/${id}`, formData)
      .then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const ImageChange = (ev) => {
    setImageChanged(true);
    setSelectedFile(ev.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setItem({ ...item, image: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  return (
    <div className="new-item-page">
      <Container>
        {item && (
          <form onSubmit={OnSubmit}>
            <div className="image con">
              <label>Photo:</label>
              <img src={item.image ? item.image : CartImage} />
              <button>
                Choose Image
                <input type="file" onChange={ImageChange} />
              </button>
            </div>
            <div className="name con">
              <label htmlFor="itemName">Item Name:</label>
              <input
                type="text"
                name="itemName"
                id="itemName"
                placeholder="Type The Item Name"
                value={item.name}
                onChange={(ev) => setItem({ ...item, name: ev.target.value })}
              />
            </div>
            <div className="desc con">
              <label htmlFor="itemDesc">Description:</label>
              <textarea
                name="itemDesc"
                id="itemDesc"
                placeholder="Type Your Description"
                onChange={(ev) => {
                  setItem({ ...item, description: ev.target.value });
                }}
                value={item?.description}
              ></textarea>
            </div>
            <div className="price con">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                name="price"
                id="price"
                value={item.price}
                onChange={(ev) => setItem({ ...item, price: ev.target.value })}
              />
            </div>
            <input type="submit" value="Edit Item" className="send" />
          </form>
        )}
      </Container>
      {isLoading && <Spinner />}
    </div>
  );
}

export default EditItem;
