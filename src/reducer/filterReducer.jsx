const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCT":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { category } = state.filters;

      if(category !== "All"){
        tempFilterProduct=tempFilterProduct.filter((curElem)=>{
          return curElem.category===category
        })
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    default:
      return state;
  }
};
export default filterReducer;
