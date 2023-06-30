import React from "react";
import { NavLink } from "react-router-dom";
import { useFilterContext } from "../../context/filter_context";
import "./product.css";
const ProductList = () => {
  const { filter_products } = useFilterContext();

  return (
    <div>
      <div className="container">
        <div className="row">
          {filter_products.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4 product-show"
              key={index}
             
            >
              <NavLink to={`/singleproduct/${item.id}`}>
                <img src={item.image} className="img-fluid" alt="" />
                <div className="product-show-innerdiv py-1">
                  <h6>{item.title}</h6>
                  <p>{item.smalldesc}</p>
                  <hr className="product-show-innerdiv-line" />
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
