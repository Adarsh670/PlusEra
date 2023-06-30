import React from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import { reviewList } from "./reviewlist";
const Review = () => {
  const reviewSlider = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="container review-container">
      <Slider {...reviewSlider}>
        {reviewList.map((item, index) => (
          <div key={index}>
            <ReviewCard item={item}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
