import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-content">
          <div className="footer-container-content-information">
            <h4>Information</h4>
            <li>
              <a href=""> About Us</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
          </div>
          <div className="footer-container-content-customer">
            <h4>Customer Care</h4>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Customer Assistance</a>
            </li>
          </div>
          <div className="footer-container-content-newsletter">
            <h4>Newsletter</h4>
            <p>Sign Up for update about our platform</p>

            <form action="">
              <input type="text" placeholder="Enter your email" />
              <button className="signup-btn">
                <i class="fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="footer-container-content-connect">
            <h4>Connect</h4>
            <p>follow us on:</p>
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
            <p>Copyright 2021 Predictz. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
