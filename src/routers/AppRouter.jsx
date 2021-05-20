import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Components/Pages/Hompage/Homepage.jsx";
import SignUpScreen from "../Components/SignUp/SignUpScreen.jsx";
import SignUpForm from "../Components/SignUp/SignUpForm";
import Login from "../Components/Login/Login";
import Dashboard from "../Components/AdminBoard/Dashboard/Dashboard";
import ActivationPage from "../Components/Activation-Page/ActivationPage";
// import DashBoardPage from "../Components/AdminBoard/Dashboard/DashBoardPage";
import Analysis from "../Components/AdminBoard/Analysis/Analysis";
// import SideMenu from "../Components/AdminBoard/SideMenu/SideMenu";
// import DashBoardPage from "../Components/AdminBoard/Dashboard/DashBoardPage";
import Navbar from "../Components/Navbar/Navbar";
// import ActivationPage from "../Components/Activation-Page/ActivationPage.jsx"

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Homepage} />
        {/* <Route path="/dashboard" component={SideMenu} /> */}
        
        {/* <SideMenu /> */}
        {/* <Analysis /> */}
        {/* < SignUpForm /> */}
        {/* <ActivationPage /> */}
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/SignUpScreen" component={SignUpScreen} />
          <Route path="/SignUpForm" component={SignUpForm} />
          {/* <Route path="/Dashboard/Analysis" component={Analysis} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
