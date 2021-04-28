import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import money from "../../assets/money.jpg";
import nathan from "../../assets/nathan-dumlao-unsplash.jpg";
import sharon from "../../assets/sharon-mccutcheon-unsplash.jpg";

const photos = [
  {
    name: "money",
    image: money,
    mainText: "Credit card predictions made easy.",
    subText:
      "Factual and visionary predictions made available at your fingertips.",
    footerText: "powered by GroupFive",
  },
  {
    name: "nathan",
    image: nathan,
    mainText: "Get informed insights into the future",
    subText:
      "Factual and visionary predictions made available at your fingertips.",
    footerText: "powered by GroupFive",
  },
  {
    name: "sharon",
    image: sharon,
    mainText: "Let's illuminate the pattern for you.",
    subText:
      "Factual and visionary predictions made available at your fingertips.",
    footerText: "powered by GroupFive",
  },
];

console.log(photos);
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {photos.map((photo, key) => (
            <Slide
              key={key}
              image={photo.image}
              mainText={photo.mainText}
              subText={photo.subText}
              footerText={photo.footerText}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

// export default Carousel;
