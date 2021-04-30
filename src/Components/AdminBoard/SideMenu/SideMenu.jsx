import React from "react";
import "./SideMenu.css";
import DashboardIcon from "../../../assets/Icons/Property 1=Dashboard, State=Default.svg";
import AnalysisIcon from "../../../assets/Icons/Property 1=Analysis, State=Default.svg";
import DocumentIcon from "../../../assets/Icons/Property 1=Folder, State=Default.svg";
import HistoryIcon from "../../../assets/Icons/Property 1=History, State=Default.svg";

function SideMenu() {
  return (
    <>
      <div className="side-menu-container">
        <div className="side-menu-item-container">
          <div className="side-menu-dashboard menu-item">
            <img src={DashboardIcon} alt="dashboard icon" />
            <p>Dashboard</p>
          </div>
          <div className="side-menu-analysis menu-item">
            <img src={AnalysisIcon} alt="analysis icon" />
            <p>Analysis</p>
          </div>
          <div className="side-menu-document menu-item">
            <img src={DocumentIcon} alt="document icon" />
            <p>Documents</p>
          </div>
          <div className="side-menu-history menu-item">
            <img src={HistoryIcon} alt="history icon" />
            <p>History</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
