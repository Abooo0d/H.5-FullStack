import React from "react";
import NavBar from "../../Components/Sections/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function View() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default View;
