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
              <input type="number" placeholder="0" />
            </div>
            <div className="education">
              <label htmlFor="">Education</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-control">
            <div className="marriage">
              <label htmlFor="">Marriage</label>
              <input type="text" />
            </div>
            <div className="sex">
              <label htmlFor="">Sex</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-control">
            <div className="age">
              <label htmlFor="">Age</label>
              <input type="text" />
            </div>
          </div>

          <p>Repayment Status</p>
          <hr />
          <small>Month/Year</small>

          <div className="month-control">
            <div className="april">
              <label htmlFor="">April(2005)</label>
              <input type="text" />
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <input type="text" />
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <input type="text" />
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <input type="text" />
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <input type="text" />
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <input type="text" />
            </div>
          </div>
          <p>Amount of Bill Statement</p>
          <hr />
          <small>Month/Year</small>

          <div className="month-control">
            <div className="april">
              <label htmlFor="">April(2005)</label>
              <input type="text" />
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <input type="text" />
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <input type="text" />
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <input type="text" />
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <input type="text" />
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <input type="text" />
            </div>
          </div>
          <p>Amount of Previous Payment</p>
          <hr />
          <small>Month/Year</small>

          <div className="month-control">
            <div className="april">
              <label htmlFor="">April(2005)</label>
              <input type="text" />
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <input type="text" />
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <input type="text" />
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <input type="text" />
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <input type="text" />
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <input type="text" />
            </div>
          </div>

          <Button text="PREDICT" className="analysis-form-btn" />
        </form>
      </div>
    </>
  );
}

export default Analysis;
