import React from "react";
import "./dashboardCard.css";
function DashboardCard({ title, children }) {
  return (
    <div className="dashboard-card">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default DashboardCard;
