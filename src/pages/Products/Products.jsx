import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./product.css";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import { useProductContext } from "../../context/productcontext";
import Loader from "../../components/Loader/Loader";
const Products = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { isLoading, products } = useProductContext();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Helmet>
        <title>PlusEra - Product</title>
      </Helmet>
      <div className="container products">
        <div className="row">
          <div className="col-lg-2 col-md-3 productFilter">
            <FilterSection />
          </div>
          <div className="col-lg-10 col-md-9 productListDiv">
            <div className="row">
              <div className="col-12">
                <ProductList products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
