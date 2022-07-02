import { createStore, applyMiddleware } from "redux";
import { composeWithDevtools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

let store = createStore(
  rootReducer,
  composeWithDevtools(applyMiddleware(thunk))
);

export default store;
