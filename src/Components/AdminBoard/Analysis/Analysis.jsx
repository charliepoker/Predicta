import React from "react";
import "./Analysis.css";
import Button from "../../Button/Button";

function Analysis() {
  return (
    <>
      <div className="analysis-form-container">
        <h2>CUSTOMER APPLICATION FORM</h2>
        <p>Personal Information</p>
        <hr />
        <form action="" className="analysis-form">
          <div className="form-control">
            <div className="limit-balance">
              <label htmlFor="">Limit Balance</label>
              <input type="number" placeholder="Enter Limit amount" />
            </div>
            <div className="education">
              <label htmlFor="">Education</label>

              <select name="">
                {/* <option disabled selected>
                  Select Education
                </option> */}
                <option value="1">Graduates school</option>
                <option value="2">University</option>
                <option value="3">High School</option>
                <option value="4">Others</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <div className="marriage">
              <label htmlFor="">Marriage</label>
              <select id="" name="">
                <option value="1">Married</option>
                <option selected value="2">
                  Single
                </option>
                <option selected value="3">
                  Others
                </option>
              </select>
              <br />
            </div>
            <div className="sex">
              <label htmlFor="">Sex</label>
              <select id="" name="">
                <option value="1">Male</option>
                <option selected value="2">
                  Female
                </option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <div className="age">
              <label htmlFor="">Age</label>
              <input type="number" placeholder="0" />
            </div>
          </div>

          <p>Repayment Status</p>
          <hr />
          <small>Month/Year</small>

          <div className="month-control">
            <div className="april">
              <label htmlFor="">April(2005)</label>
              <select id="" name="">
                <option value="-1">Paid duly</option>
                <option selected value="0">
                  No Delay
                </option>
                <option selected value="1">
                  Payment delayed for one month
                </option>
                <option selected value="2">
                  Payment delayed for two months
                </option>
                <option selected value="3">
                  Payment delayed for three months
                </option>
                <option selected value="4">
                  Payment delayed for four months
                </option>
                <option selected value="5">
                  Payment delayed for five months
                </option>
                <option selected value="6">
                  Payment delayed for six months
                </option>
                <option selected value="7">
                  Payment delayed for seven month
                </option>
                <option selected value="8">
                  Payment delayed for eight month
                </option>
                <option selected value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <select id="" name="">
                <option value="-1">Paid duly</option>
                <option selected value="0">
                  No Delay
                </option>
                <option selected value="1">
                  Payment delayed for one month
                </option>
                <option selected value="2">
                  Payment delayed for two months
                </option>
                <option selected value="3">
                  Payment delayed for three months
                </option>
                <option selected value="4">
                  Payment delayed for four months
                </option>
                <option selected value="5">
                  Payment delayed for five months
                </option>
                <option selected value="6">
                  Payment delayed for six months
                </option>
                <option selected value="7">
                  Payment delayed for seven month
                </option>
                <option selected value="8">
                  Payment delayed for eight month
                </option>
                <option selected value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <select id="" name="">
                <option value="-1">Paid duly</option>
                <option selected value="0">
                  No Delay
                </option>
                <option selected value="1">
                  Payment delayed for one month
                </option>
                <option selected value="2">
                  Payment delayed for two months
                </option>
                <option selected value="3">
                  Payment delayed for three months
                </option>
                <option selected value="4">
                  Payment delayed for four months
                </option>
                <option selected value="5">
                  Payment delayed for five months
                </option>
                <option selected value="6">
                  Payment delayed for six months
                </option>
                <option selected value="7">
                  Payment delayed for seven month
                </option>
                <option selected value="8">
                  Payment delayed for eight month
                </option>
                <option selected value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <select id="" name="">
                <option value="-1">Paid duly</option>
                <option selected value="0">
                  No Delay
                </option>
                <option selected value="1">
                  Payment delayed for one month
                </option>
                <option selected value="2">
                  Payment delayed for two months
                </option>
                <option selected value="3">
                  Payment delayed for three months
                </option>
                <option selected value="4">
                  Payment delayed for four months
                </option>
                <option selected value="5">
                  Payment delayed for five months
                </option>
                <option selected value="6">
                  Payment delayed for six months
                </option>
                <option selected value="7">
                  Payment delayed for seven month
                </option>
                <option selected value="8">
                  Payment delayed for eight month
                </option>
                <option selected value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <select id="" name="">
                <option value="-1">Paid duly</option>
                <option selected value="0">
                  No Delay
                </option>
                <option selected value="1">
                  Payment delayed for one month
                </option>
                <option selected value="2">
                  Payment delayed for two months
                </option>
                <option selected value="3">
                  Payment delayed for three months
                </option>
                <option selected value="4">
                  Payment delayed for four months
                </option>
                <option selected value="5">
                  Payment delayed for five months
                </option>
                <option selected value="6">
                  Payment delayed for six months
                </option>
                <option selected value="7">
                  Payment delayed for seven month
                </option>
                <option selected value="8">
                  Payment delayed for eight month
                </option>
                <option selected value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <select id="" name="">
                <option value="-1">Paid duly</option>
                <option selected value="0">
                  No Delay
                </option>
                <option selected value="1">
                  Payment delayed for one month
                </option>
                <option selected value="2">
                  Payment delayed for two months
                </option>
                <option selected value="3">
                  Payment delayed for three months
                </option>
                <option selected value="4">
                  Payment delayed for four months
                </option>
                <option selected value="5">
                  Payment delayed for five months
                </option>
                <option selected value="6">
                  Payment delayed for six months
                </option>
                <option selected value="7">
                  Payment delayed for seven month
                </option>
                <option selected value="8">
                  Payment delayed for eight month
                </option>
                <option selected value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
            </div>
          </div>
          <p>Amount of Bill Statement</p>
          <hr />
          <small>Month/Year</small>

          <div className="month-control">
            <div className="april">
              <label htmlFor="">April(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
          </div>
          <p>Amount of Previous Payment</p>
          <hr />
          <small>Month/Year</small>

          <div className="month-control">
            <div className="april">
              <label htmlFor="">April(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                id=""
                name=""
              />
            </div>
          </div>

          <Button text="PREDICT" className="analysis-form-btn" />
        </form>
      </div>
    </>
  );
}

export default Analysis;
