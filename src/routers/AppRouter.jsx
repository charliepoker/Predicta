import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Homepage from "../Components/Pages/Hompage/Homepage.jsx";
// import SignUpScreen from "../Components/SignUp/SignUpScreen.jsx";
// import SignUpForm from "../Components/SignUp/SignUpForm";
// import Login from "../Components/Login/Login"
import Dashboard from "../Components/AdminBoard/Dashboard/Dashboard";
// import DashBoardPage from "../Components/AdminBoard/Dashboard/DashBoardPage";
import Analysis from "../Components/AdminBoard/Analysis/Analysis";

// import ActivationPage from "../Components/Activation-Page/ActivationPage.jsx"

function AppRouter() {
  return (
    <Router>
      <div>
        <Analysis />

        {/* <Route path="/" exact component={Homepage} /> */}
        <Switch>
          {/* <Route path="/login" component={Login} />
            <Route path="/SignUpScreen" component={SignUpScreen} />
            <Route path="/SignUpForm" component={SignUpForm} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
