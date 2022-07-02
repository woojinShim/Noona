import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevtools } from "redux-devtools-extension";
import rootReducer from "./reducers";

let store = createStore(
  rootReducer,
  composeWithDevtools(applyMiddleware(thunk))
);

export default store;
