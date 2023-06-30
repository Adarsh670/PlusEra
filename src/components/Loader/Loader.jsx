import React from "react";
import "./loader.css"
const Loader = () => {
  return (
    <div className="overlay">
      <div className="wrapper">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Loader;
