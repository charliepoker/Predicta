import React from "react";
import "./SignUpScreen.css";
import Carousel from "../Carousel/Carousel";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function SignUpScreen() {
  return (
    <>
      <div className="signup-screen-container">
        <div className="carousel-container">
          <Carousel />
        </div>

        <div className="signup-screen-text">
          <span className="arrow">
            <Link to="/">
              <i class="fas fa-arrow-left"></i>
            </Link>
          </span>

          <div className=" signup-text">
            <p>Select an option to continue</p>
            <Link to="SignUpForm">
              <Button text="Create account" className="create-account" />
            </Link>
            <p>OR</p>
            <Link to="login">
              <Button
                text="Sign in to your account"
                className="signin-account"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpScreen;
