import React from "react";
import "./Dashboard.css";
import Navbar from "../../Navbar/Navbar";
import SideMenu from "../../AdminBoard/SideMenu/SideMenu";
import DashBoardPage from "../../AdminBoard/Dashboard/DashBoardPage";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <SideMenu />
        <DashBoardPage />
      </div>
    </>
  );
}

export default Dashboard;
