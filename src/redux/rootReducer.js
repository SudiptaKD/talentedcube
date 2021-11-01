import { combineReducers } from "redux";

import shopReducer from "./shop/reducers";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;