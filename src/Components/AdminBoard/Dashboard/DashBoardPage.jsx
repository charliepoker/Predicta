import React from "react";
import "./DashBoardPage.css";
import DoughnutChart from "../../Chart/DoughnutChart";
import LineChart from "../../Chart/LineChart";

function DashBoardPage() {
  return (
    <>
      <div className="dashboard-container">
        <p className="welcome">Welcome Charlie</p>
        <h2>DASHBOARD OVERVIEW</h2>

        <div className="info-1-container">
          <div className="total-balance">
            <div className="total-balance-figure">
              <p className="first-paragraph">TOTAL LOAN BALANCE</p>
              <p className="second-paragraph">
                <small>NGN</small>500,000
              </p>
            </div>
            <div className="line"></div>
            <div className="total-balance-pie-chart">
              <DoughnutChart />
              <p>50% paid</p>
            </div>
          </div>

          <div className="overdue-loans-container">
            <div className="dashboard-subtext">
              <p>OVERDUE LOANS</p>
            </div>

            <div className="overdue-loans-table">
              <table>
                <thead>
                  <tr>
                    <th>Loan Type</th>
                    <th>Amount</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Insurance</td>
                    <td>NGN100,000.00</td>
                    <td>4/21/21</td>
                  </tr>
                  <tr>
                    <td>Insurance</td>
                    <td>NGN100,000.00</td>
                    <td>4/21/21</td>
                  </tr>
                  <tr>
                    <td>Insurance</td>
                    <td>NGN100,000.00</td>
                    <td>4/21/21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="info-2-container">
          <div className="payment-analytics">
            <div className="dashboard-subtext">
              <p>PAYMENT ANALYTICS</p>
            </div>
            <div className="line-chart">
              <LineChart />
            </div>
          </div>

          <div className="upcoming-payments-container">
            <div className="dashboard-subtext">
              <p>UPCOMING PAYMENTS</p>
            </div>

            <div className="overdue-loans-table">
              <table>
                <thead>
                  <tr>
                    <th>Loan Type</th>
                    <th>Amount</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Insurance</td>
                    <td>NGN100,000.00</td>
                    <td>4/21/21</td>
                  </tr>
                  <tr>
                    <td>Insurance</td>
                    <td>NGN100,000.00</td>
                    <td>4/21/21</td>
                  </tr>
                  <tr>
                    <td>Insurance</td>
                    <td>NGN100,000.00</td>
                    <td>4/21/21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardPage;
