import React from "react";
import "./Insight.css";
import Infograph from "../../assets/infograph.svg";

function Insight() {
  return (
    <>
      <div className="insight-container">
        <div className="insight-content-text">
          <h3>INSIGHTS</h3>
          <h5>Using Predicta for prediction of Customer loan default</h5>
          <ul>
            <li>
              Systems tries to predict the Sub-Grade based on the FICO score
              provided.
            </li>
            <li>
              A report would be displayed on the dashboard showingpayment
              history of the client
            </li>
            <li>
              From the report, you decide if the client is eligble for a loan or
              not.
            </li>
            <li>Simple, safe and reliable pediction</li>
          </ul>
        </div>

        <div className="insight-content-infograph">
          <img src={Infograph} alt="" />
        </div>
      </div>
    </>
  );
}

export default Insight;
