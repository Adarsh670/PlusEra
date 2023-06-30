import React, { useRef } from "react";
import "./homesection.css";
import Slider from "react-slick";
import { headerList } from "../../components/Reviews/reviewlist";
import { CgArrowLongDownC, CgArrowLongUpC } from "react-icons/cg";

const HomeSection = () => {
  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const homeslider = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="homesection">
        <div className="top"></div>
        <div className="container-fluid homesectionContainer">
          <div className="row">
            <div className="col-lg-4 left">
              <p>Welcome to PlusEra LifeScience</p>
              <h2>PRESERVING TRADITION, ADVANCING HEALTHCARE</h2>
              <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="col-lg-8 right">
              <Slider ref={slider} {...homeslider}>
                {headerList.map((item, index) => (
                  <div key={index} className="d-flex">
                    <div className="right_left">
                      <img src={item.img} width="250px" alt="" />
                    </div>

                    <div className="right_right">
                      <div className="product-desc">
                        <h1>{item.title}</h1>
                        <p>Welcome to Shareat restaurant</p>
                        <div className="d-flex ">
                          <ul>
                            <li>{item.pointone}</li>
                            <li>{item.pointtwo}</li>
                            <li>{item.pointthree}</li>
                            <li>{item.pointfour}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="buttons">
                        <p onClick={() => slider.current.slickPrev()}>
                          <CgArrowLongUpC />
                        </p>
                        <p onClick={() => slider.current.slickNext()}>
                          <CgArrowLongDownC />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
