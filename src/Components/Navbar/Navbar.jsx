import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="" height="36.39px" Width="151.16px" />
        </div>

        <ul className="nav-link">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">INSIGHT</Link>
          </li>
          <li>
            <Link to="/">CONTACT</Link>
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
      </div>
    </>
  );
}

export default Navbar;
