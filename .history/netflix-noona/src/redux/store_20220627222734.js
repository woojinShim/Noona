import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevtools } from "redux-devtools-extension";

let store = createStore(
  rootReducer,
  composeWithDevtools(applyMiddleware(thunk))
);
