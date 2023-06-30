import React, { useEffect } from "react";
import "./contact.css";
import { Helmet } from "react-helmet";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
const Contact = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <>
      <Helmet>
        <title>PlusEra - About</title>
      </Helmet>
      <section className="contact">
        <div className="contact_banner"></div>
        <div className="contact_banner_text">
          <h1
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
          >
            Contact Us
          </h1>
        </div>

        <div className="container contact-section">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 contact-left"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
            >
              <h1>For Any Queries Contact Us</h1>
              <div className="contact-form-div">
                <form action="https://formspree.io/f/myyaklqk" method="POST">
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    name="purpose"
                    placeholder="Purpose"
                    required
                    autoComplete="off"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 contact-right"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
            ></div>
          </div>
        </div>
        <div className="container contact-cards">
          <div className="row gx-4">
            <div
              className="col-lg-4 col-md-4 lg-mb-0 mb-3"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
            >
              <div className="contact-card">
                <FiPhoneCall />
                <h4>PHONE NUMBER</h4>
                <p>+91 (830-780-9323)</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 lg-mb-0 mb-3"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
            >
              <div className="contact-card">
                <FiMail />
                <h4>EMAIL ADDRESS</h4>
                <p>care.plusera@gmail.com</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 lg-mb-0 mb-3"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
            >
              <div className="contact-card">
                <MdLocationPin />
                <h4>ADDRESS</h4>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
