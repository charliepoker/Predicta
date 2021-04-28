import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button";

function Navbar(props) {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="" height="25px" />
        </div>
        <div className="nav-link">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">INSIGHT</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </div>
        <div className="nav-btn">
          <Button className="btn-login" text="LOGIN" />
          <Button className="btn-signup" text="SIGN UP" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
