import React from "react";
import "./Dashboard.css";
import Navbar from "../../Navbar/Navbar";
import SideMenu from "../../AdminBoard/SideMenu/SideMenu";
import DashBoardPage from "../../AdminBoard/Dashboard/DashBoardPage";
import Analysis from "../../AdminBoard/Analysis/Analysis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard-container-main">
        <div className="predicta-sidebar">
          <SideMenu />
        </div>
        <div className="predicta-main">
          <Switch>
            <Route path="/dashboard" exact component={DashBoardPage} />
            <Route path="/dashboard/analysis" component={Analysis} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
