let initialState = {
  productList: [],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state };
    default:
      return { ...state };
  }
}

export default productReducer;
