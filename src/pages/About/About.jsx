import React, { useEffect } from "react";
import "./about.css";
import Review from "../../components/Reviews/Review";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const cardContent = [
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1676442154/PlusEra/icons-02_da3wcf.svg",
      title: "Formulated with evidence based ingredients",
      animation: "fade-left",
      desc: "We believe in taking the ancient wisdom ahead scientifically and hence our products are formulated with the evidence based ingredients",
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1676442154/PlusEra/icons-01_n9zypg.svg",
      title: "Plant based healing",
      animation: "fade-up",
      desc: "We focus on providing efficacious plan based healing to the humanity",
    },

    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1676442153/PlusEra/icons-03_u0shp4.svg",
      title: "Promising Quality, Safety & Efficacy",
      animation: "fade-right",
      desc: "PlusEra promise to provide it's consumers the products that are rich in Quality, are efficacious & follow every single safety parameter",
    },
  ];
  const choosearray = [
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1674629964/PlusEra/organic_uq9lhn.png",
      title: "Best Quality APIs   (Active pharmaceutical ingredients)",
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1674629964/PlusEra/labtested_rx2n6t.png",
      title: "Lab Tested & assured",
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1674629964/PlusEra/labmedicine_np1osc.png",
      title: "Certified manufacturing facilities",
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1675852946/PlusEra/512_new-01_tyeawj.png",
      title: "We care for you",
    },
  ];

  return (
    <>
      <Helmet>
        <title>PlusEra - About</title>
      </Helmet>
      <section className="about-section">
        <div className="about_banner">
          <h1>ABOUT US</h1>
        </div>

        {/* Home Text */}

        {/* Product_Part */}
        <div className="container about_product_part">
          <div className="row">
            <div
              className="col-lg-5  about_product_part_left"
              data-aos="zoom-up"
              data-aos-offset="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              {/* <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1677231889/PlusEra/Collage-01_hhb9qv.webp"
                alt=""
                className="img-fluid"
              /> */}
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <div className="about_product_part_right">
                {/* <h2>PlusEra Introduction</h2> */}
                <p>
                  PlusEra Lifesciences is India's leading innovative healthcare
                  company providing foremost healthcare products by combining
                  modern pharmaceutical extraction technologies & wisdom of
                  thousands year old Ayurveda, an Indian system of medicines.
                  PlusEra Lifesciences is backed with more than 20 years of
                  manufacturing excellence to provide best in market
                  pharmaceutical products prepared with the authentic principles
                  of Ayurveda. PlusEra Lifesciences source the most authentic
                  ingredients from certified medicinal farms across the india to
                  ensure it’s consumers get the clean & effective healthcare
                  products to live an active healthy life. PlusEra Lifesciences
                  is proudly indian and takes the responsibility to take
                  authentic ayurveda global with right products in right dosage
                  forms. Uncompromising passion for quality is the thumb rule of
                  PlusEra Lifesciences as we make sure to undergo powder
                  microscopy and Chromatography for our every batch of crude
                  drugs to get best concentration & quality of active
                  Phytoconstituents. PlusEra Lifesciences range of products is
                  Microbiologically tested as well as maintain a strict heavy
                  metal control using Atomic Absorption spectrophotometer to
                  bring out the best quality products.
                </p>
                {/* <button>ABOUT US</button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about_choose">
          <div className="container">
            <div className="title ">
              <h2>Why Choose Us</h2>
              <p>
                At PlusEra Lifesciences, we believe in the power of ancient
                pharmaceutical sciences, such as Ayurveda, to provide quality
                and effective healthcare solutions.
              </p>
            </div>

            <div
              className="row about_choose_icons"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              {choosearray.map((item, index) => (
                <div
                  className="col-lg-3 col-md-3 p-3 lg-p-0 text-center"
                  key={index}
                >
                  <span className="icon-s">
                    <img src={item.img} width="80px" alt="" />
                  </span>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certified Banner */}
        <div className="container-fluid certified">
          <div className="certified_background">
            <h1>We Are Certified Medical Company</h1>
            <p>
              PlusEra Lifesciences is an registered and approved by Ministry Of
              AYUSH, Government of India. PlusEra Lifesciences manufactures its
              products in government certified GMP & ISO certified manufacturing
              units to deliver best of healthcare formulations.
            </p>
            <Link to="/contact">
              <button>Get In Touch</button>
            </Link>
          </div>
        </div>
        {/* Cards */}
        <div className="container about_cards">
          <div className="row">
            {cardContent.map((item, index) => (
              <div className="col-lg-4 col-md-4 mb-3" key={index}>
                <div
                  className="card"
                  data-aos={`${item.animation}`}
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src={item.img}
                    className={`card-img-top about_card_img ${item.animation}`}
                    alt="truck"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review */}
        <div className="about_review">
          <div className="container">
            <div className="title">
              {/* <h2>Honest Review of Our Clients</h2> */}
              <h2>Testimonials</h2>
              <p>
                At PlusEra Lifesciences, we take great pride in the positive
                impact that our products have on our customers' health and
                well-being. Our customers are our top priority.
              </p>
            </div>
            <Review />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
