import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import image from "../../assets/Hero.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1>Credit default prediction simplified</h1>
            <p>
              Get secure and reliable credit default predictions
              <br /> and analysis whenever you need.
            </p>
          </div>
          <Link to="SignUpScreen">
            <Button text="Get Started" className="btn-started" />
          </Link>
          <div className="header-image">
            <img src={image} alt="" height="700px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
