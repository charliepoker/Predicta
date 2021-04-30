import React from "react";
import "./SignUpForm.css";
import Button from "../Button/Button";
import money from "../../assets/money.jpg";
import { Link } from "react-router-dom";



function SignUpForm() {
  return (
    <>
      <div className="signup-form-screen">
        <div className="signup-form-container">
          <span className="arrow">
            <Link to="signUpScreen">
              <i class="fas fa-arrow-left"></i>
            </Link>
          </span>
          <div className="signup-form-header">
            <h2>Create a free account</h2>
            <p>Register your account with us to get started</p>
          </div>
          <div className="form-container">
            <form action="" className="form">
              <div className="fullname form-control">
                <label htmlFor="">Full name</label>
                <input type="text" placeholder="full name" />
              </div>
              <div className="company-name form-control">
                <label htmlFor="">Company name</label>
                <input type="text" placeholder="Name of Organization" />
              </div>
              <div className="email-address form-control">
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="password form-control">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" />
              </div>
              <Button text="Create account" className="signup" />
            </form>
          </div>
          <div className="signup-form-footer">
            <p>
              By creating an account, you are accepting or{" "}
              <a href=""> Terms </a>
              and <a href=""> Privacy Policy.</a>
            </p>
          </div>
        </div>
        <div className="signup-form-image-container">
          <div className="signup-form-image">
            <img src={money} alt="" />
          </div>
          <div className="main-text">
            <h2>
              Reliable, <br /> Secure, <br /> Made for you.
            </h2>
          </div>

          <div className="footer-text">
            <p>powered by GroupFive</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
