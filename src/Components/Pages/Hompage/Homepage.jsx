import React from "react";
import NavBar from "../../Navbar/Navbar";
import Header from "../../Header/Header.jsx";
import Info from "../../Info/Info.jsx";
import Insight from "../../Insight/Insight.jsx";
import Footer from "../../Footer/Footer";

function Homepage() {
  return (
    <>
      <NavBar />
      <div id="home">
        <Header />
      </div>
      <Info />
      <div id="insight">
        <Insight />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
