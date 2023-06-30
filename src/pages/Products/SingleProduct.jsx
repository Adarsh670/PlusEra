import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productcontext";
import "./product.css";
import Loader from "../../components/Loader/Loader";
const API = "https://my-json-server.typicode.com/Adarsh670/pluseraapi/products";
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  const {  pimg, smalldesc, title,pointone,pointtwo,pointthree,pointfour } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
   window.scroll(0,0)
  }, []);

  if (isSingleLoading) {
    return <Loader />;
  }
  return (
    <>
     
      <div className="container-fluid single_page">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6 p-0">
              <div className="single_product_left">
                <div className="single_product_details">
                  <div className="single_product_heading">
                    <h4>{title}</h4>
                  </div>
                  <div className="single_product_desc">{`${title}   ${smalldesc}`}</div>
                  <div className="single_product_hightlight">
                    <p>Product highlights</p>
                    <ul className="single_product_points">
                      <li>{pointone}</li>
                      <li>{pointtwo}</li>
                      <li>{pointthree}</li>
                      <li>{pointfour}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="single_product_image">
                <img src={pimg}  alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
