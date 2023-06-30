import React, { useEffect } from "react";
import "./collaboration.css";

import Slider from "react-slick";
import { plantList } from "../../components/Reviews/reviewlist";
const Collaboration = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  const farmSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    // slidesToScroll: 1,
    pauseOnHover:false,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid collaboration">
        <div className="container collaboration_heading">
          <div className="row">
           
            <div className="col-12 collaboration_hero_left">
              <h1>Our Collaborations</h1>
              <p>
                At PlusEra Lifesciences, we understand that quality starts at
                the source. That's why we've established collaborations with
                certified medicinal farms to bring you the best in natural
                ingredients for our formulations. These partnerships allow us to
                procure the freshest, highest-quality herbs, with their
                phytoconstituents intact, to use as active pharmaceutical
                ingredients (APIs) in our products. This sets us apart from
                other companies in the market and ensures that our customers
                receive the maximum therapeutic benefits from our products.
                We're proud of our collaborations with these trusted farms and
                are committed to providing you with the best in natural health


                
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className=" collaboration_slider">
          <Slider {...farmSlider}>
            {plantList.map((item, index) => (
              <div className="farm_div" key={index}>
                <img src={item.img} alt="" />
                <div className="farm_div_text">
                  <h2>{item.title}</h2>
                  <h1>{item.location}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Collaboration;
