import React from "react";
import "./Insight.css";
import Infograph from "../../assets/infograph.svg";

function Insight() {
  return (
    <>
      <div className="insight-container">
        <div className="insight-content-text">
          <h3>INSIGHTS</h3>
          <h5>
            Using K nearest neighbors for prediction of Customer loan default
          </h5>
          <p>
            Systems tries to predict the Sub-Grade based on the FICO score
            provided.
          </p>
          <li>
            One would expect the relation to be linear between FICO score and
            sub grade but that is not exactly the case
          </li>
          <li>
            From the subgrade predicited we get the interest Rate for the
            applicant.
          </li>
        </div>
        <div className="insight-content-infograph">
          <img src={Infograph} alt="" />
        </div>
      </div>
    </>
  );
}

export default Insight;
