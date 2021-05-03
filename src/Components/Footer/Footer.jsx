import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-content">
          <div className="footer-container-content-information">
            <h4>Information</h4>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </div>
          <div className="footer-container-content-customer">
            <h4>Customer Care</h4>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Customer Assistance</li>
          </div>
          <div className="footer-container-content-newsletter">
            <h4>Newsletter</h4>
            <p className="footer-p">Sign Up for update about our platform</p>

            <form action="" className="footer-form">
              <input
                className="footer-form-input"
                type="text"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
              <button className="signup-btn">
                <i class="fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="footer-container-content-connect">
            <h4>Connect</h4>
            <p className="footer-p"> follow us on:</p>
            <div className="social-icons">
              <div className="social social-icons-twitter">
                <i class="fab fa-twitter"></i>
              </div>
              <div className="social social-icons-facebook">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div className="social social-icons-instagram">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <div className="footer-copyright-content">
            <div className="nav-logo">
              <img src={logo} alt="" height="25px" />
            </div>
            <p className="footer-copyright-content-para">
              Copyright 2021 Predictz. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
