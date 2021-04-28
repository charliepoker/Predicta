import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import image from "../../assets/Hands-with-credit-card.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1>The most transparent & secure banking ever</h1>
          </div>

          <Button text="Get Started" className="btn-started" />
          <div className="header-image">
            <img src={image} alt="" height="800px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
