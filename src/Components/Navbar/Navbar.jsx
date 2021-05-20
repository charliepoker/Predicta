import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import Bell from "../../assets/Icons/Notification.svg";
import Avatar from "../../assets/Icons/Avatar.svg";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="" height="36.39px" Width="151.16px" />
        </div>

        {location.pathname !== "/dashboard" ? (
          <>
            {" "}
            <ul className="nav-link">
              <li>
                <Link to="/#home">HOME</Link>
              </li>
              <li>
                <Link to="/#insight">INSIGHT</Link>
              </li>
              <li>
                <Link to="/#contact">CONTACT</Link>
              </li>
            </ul>
            <div className="nav-btn">
              <Link to="login">
                <Button className="btn-login" text="LOGIN" />
              </Link>
              <Link to="signUpScreen">
                <Button className="btn-signup" text="SIGN UP" />
              </Link>
            </div>
          </>
        ) : null}

        {location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/analysis" ? (
          <div className="profile">
            <div className="bell">
              <img src={Bell} alt="" />
            </div>
            <div className="avatar">
              <img src={Avatar} alt="" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
