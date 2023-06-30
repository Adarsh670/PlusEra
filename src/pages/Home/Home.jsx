import React, { useEffect } from "react";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../../components/Reviews/Review";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
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
        mobile-navbar
        <title>PlusEra - Home</title>
      </Helmet>
      <section className="home-section">
        {/* Home Text */}
        <div className="container-fluid homebanner p-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1677233806/PlusEra/Plus_Era_Home_Page_1920X800px_ihx9az.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carosuleCaption">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-sine"
                  >
                    preserving tradition,
                  </h1>
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                  >
                    {" "}
                    Advancing Healthcare
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>

        {/* Product_Part */}
        <div className="container home_product_part">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
            >
              <div className="home_product_part_right">
                <h2>About Us</h2>
                <p className="home_product_part_right_web">
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
                  forms.
                </p>
                <p className="home_product_part_right_mob">
                  PlusEra Lifesciences is India's leading innovative healthcare
                  company providing foremost healthcare products by combining
                  modern pharmaceutical extraction technologies & wisdom of
                  thousands year old Ayurveda, an Indian system of medicines.
                  PlusEra Lifesciences is backed with more than 20 years of
                  manufacturing excellence to provide best in market
                  pharmaceutical products prepared with the authentic principles
                  of Ayurveda.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 home_product_part_left"
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
            >
              {/* <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1677231889/PlusEra/Collage-01_hhb9qv.webp"
                alt=""
                className="img-fluid"
              /> */}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="container home_cards">
          <div className="row">
            {cardContent.map((item, index) => (
              <div className="col-lg-4  " key={index}>
                <div
                  className="card mb-3"
                  data-aos={`${item.animation}`}
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src={item.img}
                    className={`card-img-top home_card_img ${item.animation}`}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="choose">
          <div className="container">
            <div className="title ">
              <h2
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
              >
                Why Choose Us
              </h2>
              <p>
                At PlusEra Lifesciences, we believe in the power of ancient
                pharmaceutical sciences.
              </p>
            </div>

            <div className="row choose_icons">
              {choosearray.map((item, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-offset="10"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
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
        {/* Our Product */}
        <div className="ourProduct">
          <div
            className="container-fluid"
          >
            <div className="row d-flex">
              <div
                className="col-lg-6 ourproductLeft"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                <h2>Our Product</h2>
                <p>
                  At PlusEra Lifesciences, we offer a wide range of
                  pharmaceutical products that are inspired by ancient wisdom
                  and backed by modern science. Our product range includes
                  products for
                  <li>Kidney care</li>
                  <li>Liver care</li>
                  <li>Gut health</li>
                  <li> Mental wellness</li>
                  <li> Female health Care</li>
                  <li> Multivitamins (Health Restorative)</li>
                  <li> Pulmonary care</li>
                  <li> Diabetes management</li>
                  <li> Joints & Muscle pain</li>
                  <li> Sexual wellness</li>
                  <li> Skin health</li>
                  Each of our products is carefully crafted to provide maximum
                  therapeutic benefits, using only the highest-quality Active
                  Pharmaceutical Ingredients (APIs) sourced from certified
                  medicinal farms. Our formulations are manufactured in
                  state-of-the-art facilities and undergo rigorous quality
                  testing to ensure their safety and efficacy.
                </p>
                <Link to="/product">
                  <button>VIEW MORE</button>
                </Link>
              </div>
              < div
                className="col-lg-6 ourproductrightImg"
                data-aos="fade-down"
                data-aos-offset="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              ></div>
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="review">
          <div className="container">
            <div className="title ">
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

export default Home;
