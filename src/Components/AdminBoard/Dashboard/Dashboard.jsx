import React from "react";
import "./Dashboard.css";
import Navbar from "../../Navbar/Navbar";
import SideMenu from "../../AdminBoard/SideMenu/SideMenu";
import DashBoardPage from "../../AdminBoard/Dashboard/DashBoardPage";

function Dashboard() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="dashboard-container-main">
        <div className="predicta-sidebar">
          <SideMenu />
        </div>
        <div className="predicta-main">
          <DashBoardPage />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
