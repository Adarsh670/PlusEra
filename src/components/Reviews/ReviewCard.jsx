import React from "react";
import "./review.css";
const ReviewCard = ({ item }) => {
  return (
    <>
      <div className="card reviewCard">
        <span className="icon-s">
          <img src={item.img} className="card-img-top img-fluid" alt="..." />
        </span>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h6 className="card_second_title">{item.title}</h6>
          <p className="card-text">{item.desc}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
