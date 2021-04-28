import React from "react";
import './Info.css'
import DataPrediction from "../../assets/data-prediction.svg";
import DataAnalysis from "../../assets/data-analysis.svg";
import DataVisualization from "../../assets/data-visualization.svg";


function Info() {
  return (
    <>
      <div className="info-container">
        <div className="default-prediction">
          <img src={DataPrediction} alt="" />
        </div>
        <div className="default-analysis">
          <img src={DataAnalysis} alt="" />
        </div>
        <div className="default-visualization">
          <img src={DataVisualization} alt="" />
        </div>
      </div>
    </>
  );
}

export default Info;
