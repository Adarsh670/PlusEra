import React from "react";
import "./footer.css";
import { FiPhoneIncoming } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const topHandler=()=>{
 window.scroll(0,0)
  }
  return (
    <div className="container-fluid footer">
      <div className="container footer_content">
        <div className="row ">
          <div className="col-lg-4 ps-lg-0 ps-4">
            <div className="footer_titles">
              <h4>About Us</h4>
            </div>
            <div className="footer_desc">
              <p className="pe-5">
                Pulsera life sciences is India's leading innovative company. we
                believe in preserving tradition and advancing health care by
                formulating evidence based natural formulations.
              </p>
            </div>
          </div>
          <div className="col-lg-2 mt-3 mt-lg-0 ps-lg-0 ps-4">
            <div className="footer_titles">
              <h4>Information</h4>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About Us</Link>
              </li>
              <li>
                <Link to="product">Products</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mt-3 mt-lg-0 ps-lg-0 ps-4">
            <div className="footer_titles">
              <h4>Helpful</h4>
            </div>
            <ul>
              <li>
                <FiPhoneIncoming /> +91 (830-780-9323)
              </li>
              <li>
                <HiOutlineMail /> care.plusera@gmail.com
              </li>
              <ul className="social-icons">
                <li>
                  <AiFillFacebook />
                </li>
                <li>
                  <AiFillTwitterSquare />
                </li>
                <li>
                  <AiFillLinkedin />
                </li>
              </ul>
            </ul>
          </div>
          <div className="col-lg-4 lg-px-5 mt-3 mt-lg-0 ps-lg-0 ps-4">
            <div className="footer_titles">
              <h5 className="pe-lg-0 pe-5">
              Get the latest researches done by our R&D team straight into your inbox.
              </h5>
            </div>
            <div className="footer_subscribe">
            <form action="https://formspree.io/f/myyaklqk" method="POST">
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    autoComplete="off"
                  />
                  <button type="submit" style={{marginTop:"10px"}}>SUBSCRIBE</button>
                </form>
            </div>
          </div>
        </div>
      </div>
      <div className="topbtn" onClick={topHandler}>
        <BsArrowUp />
      </div>
    </div>
  );
};

export default Footer;
