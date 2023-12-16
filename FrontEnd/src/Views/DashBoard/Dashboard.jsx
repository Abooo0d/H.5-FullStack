import React, { useEffect, useState } from "react";
import axiosClient from "../../AxiosClient/axiosClient";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import Spinner from "../../Components/Spinner/Spinner";
import Container from "../../Components/container/Container";
import "./dashboard.css";
import { Link } from "react-router-dom";
import LandingPage from "../../Components/Sections/LandingPage/LandingPage";
import OurFeatures from "../../Components/Sections/OurFeatures/OurFeatures";
import HomePage from "../HomePage/HomePage";
import Categories from "../../Components/Sections/Categories/Categories";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
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
    </div>
  );
}

export default Dashboard;
