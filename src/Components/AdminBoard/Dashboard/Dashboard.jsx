import React from "react";
import "./Dashboard.css";
import Navbar from "../../Navbar/Navbar";
import SideMenu from "../../AdminBoard/SideMenu/SideMenu";
import DashBoardPage from "../../AdminBoard/Dashboard/DashBoardPage";
import Analysis from "../../AdminBoard/Analysis/Analysis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout"
function Dashboard() {
  return (
    <DashboardLayout>
      <DashBoardPage />
    </DashboardLayout>
  );
}

export default Dashboard;
