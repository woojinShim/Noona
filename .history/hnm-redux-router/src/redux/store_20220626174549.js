import { createStore, applyMiddleware } from "redux";
import { composeWithDevtools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
