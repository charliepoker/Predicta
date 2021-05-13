import React from "react";
import "./SignUpForm.css";
import Button from "../Button/Button";
import money from "../../assets/money.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUpForm() {
  // const [fullName, setFullName] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const registeredUser = formData;

    axios.post("http://localhost:4000/signup", registeredUser).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <>
      <div className="signup-form-screen">
        <div className="signup-form-container">
          <span className="signup-arrow">
            <Link to="signUpScreen">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </span>
          <div className="signup-form-header">
            <h2>Create a free account</h2>
            <p>Register your account with us to get started</p>
          </div>
          <div className="form-container">
            <form action="" className="form" onSubmit={handleSubmit}>
              <div className="fullname form-control">
                <label htmlFor="fullname">Full name</label>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="company-name form-control">
                <label htmlFor="company name">Company name</label>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="Name of Organization"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="email-address form-control">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  className="signup-input"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="password form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="signup-input"
                  placeholder="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <Button text="Create account" className="signup" />
            </form>
          </div>
          <div className="signup-form-footer">
            <p>
              By creating an account, you are accepting or
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
