import axiosClient from "../../AxiosClient/axiosClient";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import Container from "../../Components/container/Container";
import CartImage from "../../Assets/Images/cart.png";
import "./itemDetail.css";
import QrCode from "../../Assets/Images/Qr-Code.png";
import { RiArrowGoBackLine } from "react-icons/ri";
function ItemDetail() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const { id } = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [Image, setImage] = useState(false);
  const overlyRef = useRef();
  const overlyConRef = useRef();
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/items/${id}`)
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  const showImage = () => {
    let imageLeft = 0;
    let remove = false;
    if (Image) {
      overlyRef.current.classList.remove("active");
      setImage(false);
    } else {
      imageLeft = 0;
      overlyConRef.current.style.left = `${imageLeft}%`;
      overlyRef.current.classList.add("active");
      let ImageInterval = setInterval(() => {
        imageLeft++;
        overlyConRef.current.style.left = `${imageLeft}%`;
        if (imageLeft >= 50) {
          clearInterval(ImageInterval);
        }
      }, 2);
      setImage(true);
    }
  };
  return (
    <div className="details-page">
      <Container>
        {loading && <Spinner />}
        {!loading && (
          <>
            {data && (
              <div className="main-con">
                <div className="image">
                  <button>
                    <img
                      src={data.image ? data.image : CartImage}
                      alt="Iem Image"
                    />
                  </button>
                </div>
                <div className="info">
                  <div className="text">
                    {/* <label htmlFor="">Item Name:</label> */}
                    <h1>{data?.name}</h1>
                  </div>
                  <div className="text">
                    {/* <label htmlFor="">Item Description:</label> */}
                    <p>{data?.description}</p>
                  </div>
                  {/* // TODO: Add The Colors To The Database And Implement It */}
                  {/* <div className="colors">
                    <span className="red"></span>
                    <span className="blue"></span>
                    <span className="magenta"></span>
                    <span className="green"></span>
                    <span className="violate"></span>
                  </div> */}
                  {/* //TODO: add The Sizes To The Database And Implement It */}
                  {/* <div className="sizes">
                    {sizes.map((v, i) => (
                      <span>{v}</span>
                    ))}
                  </div> */}
                  <div className="order-now">
                    <a href="https://wa.me/qr/OBWHAUWHKTWRC1">
                      <img src={QrCode} alt="" />
                      <h2>Order Via Whatsapp</h2>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div className="overlay" ref={overlyRef}>
          <div className="overlay-con" ref={overlyConRef}>
            {data && (
              <>
                <img
                  src={data.image ? data.image : CartImage}
                  alt="Iem Image"
                />
                <button className="close" onClick={showImage}>
                  <RiArrowGoBackLine />
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ItemDetail;
