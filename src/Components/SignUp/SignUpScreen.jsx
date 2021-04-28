import React from "react";
import "./SignUpScreen.css";
import Carousel from "../Carousel/Carousel";
import Button from "../Button/Button";

function SignUpScreen() {
  return (
    <>
      <div className="signup-screen-container">
        <div className="carousel-container">
          <Carousel />
        </div>

        <div className="signup-screen-text">
          <span className="arrow">
            <i class="fas fa-arrow-left"></i>
          </span>
          <div className=" signup-text">
            <p>Select an option to continue</p>
            <Button text="Create account" className="create-account" />
            <p>OR</p>
            <Button text="Sign in to your account" className="signin-account" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpScreen;
