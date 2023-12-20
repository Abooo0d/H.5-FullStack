import React, { useEffect, useState } from "react";
import axiosClient from "../../AxiosClient/axiosClient";
import "./dashboard.css";
import LandingPage from "../../Components/Sections/LandingPage/LandingPage";
import OurFeatures from "../../Components/Sections/OurFeatures/OurFeatures";
import Categories from "../../Components/Sections/Categories/Categories";
import Footer from "../../Components/Sections/Footer/Footer";
import ContactUs from "../../Components/Sections/ContactUs/ContactUs";
import Quote from "../../Components/Sections/Quote/Quote";
function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/dashboard")
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <LandingPage />
      <OurFeatures />
      <Categories />
      <Quote />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Dashboard;
