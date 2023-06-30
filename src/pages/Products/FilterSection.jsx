import React from "react";
import { useFilterContext } from "../../context/filter_context";
import "./product.css";

const FilterSection = () => {
 

  const {
    filters: { category },
    all_products,
    updateFilterValue,
  } = useFilterContext();
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  return (
    <div>
      {/* <div className={freeze ? "freeze" : "category"}> */}
      <div className="category">
        <h3>Category</h3>
        <div className="category-items">
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className="filter-btns"
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Category</h3>
        <form action="">
          <select
            name="category"
            id="category"
            className="filter_company_select"
            onClick={updateFilterValue}
          >
            {categoryData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="category">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
