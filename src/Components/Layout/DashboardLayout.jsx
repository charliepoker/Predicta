import React from "react";
import "../AdminBoard/Dashboard/Dashboard.css";
import Navbar from "../Navbar/Navbar";
import SideMenu from "../AdminBoard/SideMenu/SideMenu";

function Dashboard(props) {
  return (
    <>
      <Navbar />
      <div className="dashboard-container-main">
        <div className="predicta-sidebar">
          <SideMenu />
        </div>
        <div className="predicta-main">{props.children}</div>
      </div>
    </>
  );
}

export default Dashboard;
