import { productActions } from "../reducers/productSlice";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    dispatch(productActions.getAllproducts({ data }));
  };
}

export const productAction = { getProducts };
