import React from "react";
import "./Slide.css";

function Slide({ image, mainText, subText, footerText }) {
  return (
    <div className="slider ">
      <img src={image} alt="" />

      <div className="main-text">
        <h2>{mainText}</h2>
        <p>{subText}</p>
      </div>

      <div className="footer-text">
        <p>{footerText} </p>
      </div>
    </div>
  );
}

export default Slide;


