// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "../../Components/container/Container";
import ItemCard from "../../Components/ItemCard/ItemCard";
import Spinner from "../../Components/Spinner/Spinner";
import axiosClient from "../../AxiosClient/axiosClient";
import { IoMdSearch } from "react-icons/io";
import logo from "../../Assets/Images/logo.png";
import "./homepage.css";
function HomePage() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const GetData = () => {
    axiosClient
      .get("/items")
      .then(({ data }) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };
  React.useEffect(() => {
    setIsLoading(true);
    GetData();
  }, []);
  const onDelete = (id) => {
    axiosClient
      .delete(`/items/${id}`)
      .then(() => {
        setIsLoading(true);
        GetData();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <div className="homepage">
      <Container>
        {/* <div className="second-header">
          <div className="search-box">
            <input
              type="text"
              name="search"
              placeholder="Type Your Item Name"
            />
            <button>
              <IoMdSearch />
            </button>
          </div>
        </div> */}
        {!isLoading && (
          <div className="item-con">
            {data.map((item) => (
              <ItemCard item={item} key={item.id} onDelete={onDelete} />
            ))}
          </div>
        )}
      </Container>
      {isLoading && <Spinner />}
    </div>
  );
}

export default HomePage;
