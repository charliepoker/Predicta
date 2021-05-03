import React from "react";
import "./Login.css";
import Button from "../Button/Button";
import money from "../../assets/money.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="login-screen-container">
        <div className="login-form-container">
          <Link to="/">
            <span className="arrow">
              <i class="fas fa-arrow-left"></i>
            </span>
          </Link>
          <div className="login-form-header">
            <h2>Sign in your account</h2>
          </div>
          <div className="form-container">
            <form action="" className="form">
              <div className="email-address form-control">
                <label htmlFor="email">Email Address</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="password form-control">
                <label htmlFor="">Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <Button text="Sign in your account" className="login" />
            </form>
          </div>
          <div className="login-form-footer">
            <Link to="">forgot password?</Link>
          </div>
        </div>

        <div className="login-form-image-container">
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

export default Login;
