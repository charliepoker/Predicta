import React, { useState } from "react";
import "./Analysis.css";
import Button from "../../Button/Button";
import DashboardLayout from "../../Layout/DashboardLayout";
import axios from "axios";
function Analysis() {
  let [formFields, setFormFields] = useState({
    limitAmount: "",
    education: "",
    marriage: "",
    sex: "",
    age: "",
    repaymentApril: "",
    repaymentMay: "",
    repaymentJune: "",
    repaymentJuly: "",
    repaymentAug: "",
    repaymentSept: "",
    billstatementApril: "",
    billstatementMay: "",
    billstatementJune: "",
    billstatementJuly: "",
    billstatementAugust: "",
    billstatementSeptember: "",
    previousPaymentApril: "",
    previousPaymentMay: "",
    previousPaymentJune: "",
    previousPaymentJuly: "",
    previousPaymentAugust: "",
    previousPaymentSeptember: "",
  });

  const [hasError, setHasError] = useState(false);
  const handleChange = (e) => {
    let {
      target: { name, value },
    } = e;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (
      formFields.limitAmount === "" ||
      formFields.education === "" ||
      formFields.marriage === "" ||
      formFields.sex === "" ||
      formFields.age === "" ||
      formFields.repaymentApril === "" ||
      formFields.repaymentMay === "" ||
      formFields.repaymentJune === "" ||
      formFields.repaymentJuly === "" ||
      formFields.repaymentAug === "" ||
      formFields.repaymentSept === "" ||
      formFields.billstatementApril === "" ||
      formFields.billstatementMay === "" ||
      formFields.billstatementJune === "" ||
      formFields.billstatementJuly === "" ||
      formFields.billstatementAugust === "" ||
      formFields.billstatementSeptember === "" ||
      formFields.previousPaymentApril === "" ||
      formFields.previousPaymentMay === "" ||
      formFields.previousPaymentJune === "" ||
      formFields.previousPaymentJuly === "" ||
      formFields.previousPaymentAugust === "" ||
      formFields.previousPaymentSeptember === ""
    ) {
      setHasError(true);
    } else {
      axios
        .post("http://localhost:4000/predict", formFields)
        .then((res) => {
          alert(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <DashboardLayout>
      <div className="analysis-form-container">
        <h2>CUSTOMER APPLICATION FORM</h2>
        <p>Personal Information</p>
        <hr />
        <form onSubmit={onSubmit} className="analysis-form">
          <div className="form-control">
            <div className="limit-balance">
              <label htmlFor="">Limit Balance</label>
              <input
                type="number"
                value={formFields.limitAmount}
                name="limitAmount"
                onChange={handleChange}
                placeholder="Enter Limit amount"
              />
              {hasError && formFields.limitAmount === "" && (
                <small>Required</small>
              )}
            </div>
            {console.log({ formFields })}
            <div className="education">
              <label htmlFor="">Education</label>

              <select
                value={formFields.education}
                name="education"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select Education
                </option>
                <option value="1">Graduates school</option>
                <option value="2">University</option>
                <option value="3">High School</option>
                <option value="4">Others</option>
              </select>
              {hasError && formFields.education === "" && (
                <small>Required</small>
              )}
            </div>
          </div>
          <div className="form-control">
            <div className="marriage">
              <label htmlFor="">Marriage</label>
              <select
                value={formFields.marriage}
                name="marriage"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select marriage status
                </option>
                <option value="1">Married</option>
                <option value="2">Single</option>
                <option value="3">Others</option>
              </select>
              {hasError && formFields.marriage === "" && (
                <small>Required</small>
              )}
              <br />
            </div>
            <div className="sex">
              <label htmlFor="">Sex</label>
              <select value={formFields.sex} name="sex" onChange={handleChange}>
                <option disabled selected hidden>
                  Select Sex
                </option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
              {hasError && formFields.sex === "" && <small>Required</small>}
            </div>
          </div>
          <div className="form-control">
            <div className="age">
              <label htmlFor="">Age</label>
              <input
                type="number"
                placeholder="0"
                value={formFields.age}
                name="age"
                onChange={handleChange}
              />
              <br />
              {hasError && formFields.age === "" && <small>Required</small>}
            </div>
          </div>
          <p>Repayment Status</p>
          <hr />
          <small>Month/Year</small>
          <div className="month-control">
            <div className="april">
              <label htmlFor="">April(2005)</label>
              <select
                value={formFields.repaymentApril}
                name="repaymentApril"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select Status
                </option>
                <option value="-1">Paid duly</option>
                <option value="0">No Delay</option>
                <option value="1">Payment delayed for one month</option>
                <option value="2">Payment delayed for two months</option>
                <option value="3">Payment delayed for three months</option>
                <option value="4">Payment delayed for four months</option>
                <option value="5">Payment delayed for five months</option>
                <option value="6">Payment delayed for six months</option>
                <option value="7">Payment delayed for seven month</option>
                <option value="8">Payment delayed for eight month</option>
                <option value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
              {hasError && formFields.repaymentApril === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <select
                value={formFields.repaymentMay}
                name="repaymentMay"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select Status
                </option>
                <option value="-1">Paid duly</option>
                <option value="0">No Delay</option>
                <option value="1">Payment delayed for one month</option>
                <option value="2">Payment delayed for two months</option>
                <option value="3">Payment delayed for three months</option>
                <option value="4">Payment delayed for four months</option>
                <option value="5">Payment delayed for five months</option>
                <option value="6">Payment delayed for six months</option>
                <option value="7">Payment delayed for seven month</option>
                <option value="8">Payment delayed for eight month</option>
                <option value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
              {hasError && formFields.repaymentMay === "" && (
                <small>Required</small>
              )}
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <select
                value={formFields.repaymentJune}
                name="repaymentJune"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select Status
                </option>
                <option value="-1">Paid duly</option>
                <option value="0">No Delay</option>
                <option value="1">Payment delayed for one month</option>
                <option value="2">Payment delayed for two months</option>
                <option value="3">Payment delayed for three months</option>
                <option value="4">Payment delayed for four months</option>
                <option value="5">Payment delayed for five months</option>
                <option value="6">Payment delayed for six months</option>
                <option value="7">Payment delayed for seven month</option>
                <option value="8">Payment delayed for eight month</option>
                <option value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
              {hasError && formFields.repaymentJune === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <select
                value={formFields.repaymentJuly}
                name="repaymentJuly"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select Status
                </option>
                <option value="-1">Paid duly</option>
                <option value="0">No Delay</option>
                <option value="1">Payment delayed for one month</option>
                <option value="2">Payment delayed for two months</option>
                <option value="3">Payment delayed for three months</option>
                <option value="4">Payment delayed for four months</option>
                <option value="5">Payment delayed for five months</option>
                <option value="6">Payment delayed for six months</option>
                <option value="7">Payment delayed for seven month</option>
                <option value="8">Payment delayed for eight month</option>
                <option value="9">
                  Payment delayed for nine or more months
                </option>
                {hasError && formFields.repaymentJuly === "" && (
                  <small>Required</small>
                )}
              </select>
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <select
                value={formFields.repaymentAug}
                name="repaymentAug"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select Status
                </option>
                <option value="-1">Paid duly</option>
                <option value="0">No Delay</option>
                <option value="1">Payment delayed for one month</option>
                <option value="2">Payment delayed for two months</option>
                <option value="3">Payment delayed for three months</option>
                <option value="4">Payment delayed for four months</option>
                <option value="5">Payment delayed for five months</option>
                <option value="6">Payment delayed for six months</option>
                <option value="7">Payment delayed for seven month</option>
                <option value="8">Payment delayed for eight month</option>
                <option value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
              {hasError && formFields.repaymentAug === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <select
                value={formFields.repaymentSept}
                name="repaymentSept"
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Select Status
                </option>
                <option value="-1">Paid duly</option>
                <option value="0">No Delay</option>
                <option value="1">Payment delayed for one month</option>
                <option value="2">Payment delayed for two months</option>
                <option value="3">Payment delayed for three months</option>
                <option value="4">Payment delayed for four months</option>
                <option value="5">Payment delayed for five months</option>
                <option value="6">Payment delayed for six months</option>
                <option value="7">Payment delayed for seven month</option>
                <option value="8">Payment delayed for eight month</option>
                <option value="9">
                  Payment delayed for nine or more months
                </option>
              </select>
              {hasError && formFields.repaymentSept === "" && (
                <small>Required</small>
              )}
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
                value={formFields.billstatementApril}
                name="billstatementApril"
                onChange={handleChange}
              />
              {hasError && formFields.billstatementApril === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.billstatementMay}
                name="billstatementMay"
                onChange={handleChange}
              />
              {hasError && formFields.billstatementMay === "" && (
                <small>Required</small>
              )}
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.billstatementJune}
                name="billstatementJune"
                onChange={handleChange}
              />
              {hasError && formFields.billstatementJune === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.billstatementJuly}
                name="billstatementJuly"
                onChange={handleChange}
              />
              {hasError && formFields.billstatementJuly === "" && (
                <small>Required</small>
              )}
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.billstatementAugust}
                name="billstatementAugust"
                onChange={handleChange}
              />
              {hasError && formFields.billstatementAugust === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="september">
              <label htmlFor="">September(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.billstatementSeptember}
                name="billstatementSeptember"
                onChange={handleChange}
              />
              {hasError && formFields.billstatementSeptember === "" && (
                <small>Required</small>
              )}
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
                value={formFields.previousPaymentApril}
                name="previousPaymentApril"
                onChange={handleChange}
              />
              {hasError && formFields.previousPaymentApril === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="may">
              <label htmlFor="">May(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.previousPaymentMay}
                name="previousPaymentMay"
                onChange={handleChange}
              />
              {hasError && formFields.previousPaymentMay === "" && (
                <small>Required</small>
              )}
            </div>
          </div>
          <div className="month-control">
            <div className="june">
              <label htmlFor="">June(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.previousPaymentJune}
                name="previousPaymentJune"
                onChange={handleChange}
              />
              {hasError && formFields.previousPaymentJune === "" && (
                <small>Required</small>
              )}
            </div>
            <div className="july">
              <label htmlFor="">July(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.previousPaymentJuly}
                name="previousPaymentJuly"
                onChange={handleChange}
              />
              {hasError && formFields.previousPaymentJuly === "" && (
                <small>Required</small>
              )}
            </div>
          </div>
          <div className="month-control">
            <div className="august">
              <label htmlFor="">August(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.previousPaymentAugust}
                name="previousPaymentAugust"
                onChange={handleChange}
              />
              {hasError && formFields.previousPaymentAugust === "" && (
                <small>Required</small>
              )}
            </div>

            <div className="september">
              <label htmlFor="">September(2005)</label>
              <input
                type="number"
                placeholder="Enter Lotsize here"
                value={formFields.previousPaymentSeptember}
                name="previousPaymentSeptember"
                onChange={handleChange}
              />
              {hasError && formFields.previousPaymentSeptember === "" && (
                <small>Required</small>
              )}
            </div>
          </div>

          <Button text="PREDICT" className="analysis-form-btn" />
        </form>
      </div>
    </DashboardLayout>
  );
}

export default Analysis;
