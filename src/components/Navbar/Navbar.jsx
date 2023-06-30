import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { MdClose } from 'react-icons/md';
const Navbar = () => {
 
  const [menuActive, setMenuState] = useState(false);

  return (
    <div>
      <div className="mobile-navbar">
        <header className="header">
          <div className="nav_container">
            <div className="nav_row">
              <div className="logo">
                <Link to="/"><img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1675839228/PlusEra/Plusera_Logo_brpirn.svg" width={"130px"} alt="" /></Link>
              </div>
              <div
                className="nav_toggle"
                onClick={() => setMenuState(!menuActive)}
              >
                <span></span>
              </div>
            </div>
          </div>
        </header>
        <div
          className={`nav-overlay ${menuActive ? "open" : "mobile"}`}
          onClick={() => setMenuState(!menuActive)}
        ></div>
        <div className={`navv ${menuActive ? "navopen" : "navclose"}`}>
          <strong>Menu</strong>
          <div className="colse" onClick={() => setMenuState(!menuActive)}>
            <MdClose/>
          </div>
          <ul >
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="about">About Us</Link>
            </li>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="product">Products</Link>
            </li>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="collaboration">Collaborations</Link>
            </li>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="contact">Contact Us</Link>
            </li>
           
           
          </ul>
        </div>
      </div>
      {/* Desktop */}
      <div className={`desktop-menu main-header `}>
        <div className="sticky-header">
          <div className="container-fluid">
            <div className="logo">
              <Link to="/"><img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1675839228/PlusEra/Plusera_Logo_brpirn.svg" width="200px" height="50px" alt="" /></Link>
            </div>
            <div className="nav-links">
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
                  <Link to="collaboration">Collaborations</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
