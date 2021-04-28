import React from "react";
import "./ActivationPage.css";
import Button from "../Button/Button";
import money from "../../assets/money.jpg";

function ActivationPage() {
  return (
    <>
      <div className="activation-screen-container">
        <div className="activation-screen-content">
          <span className="arrow">
            <i class="fas fa-arrow-left"></i>
          </span>
          <div className="activation-screen-text">
            <span className="envelope">
              <i class="fas fa-envelope-open-text"></i>
            </span>
            <p>Very your email address </p>
            <p>A verification email has been sent to</p>
            <p>
              <a href="group5@gmail.com">Group 5 financial services limited</a>.
            </p>
            <p>please click on the link to verify your email</p>
            <Button text="Resend Email" className="resend-btn" />
          </div>
        </div>

        <div className="activation-image-container">
          <div className="login-form-image">
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

export default ActivationPage;
