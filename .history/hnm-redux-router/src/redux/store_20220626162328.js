import { createStore } from "redux";
import productReducer from "./reducers/productReducer";

let store = createStore(productReducer);

export default store;
